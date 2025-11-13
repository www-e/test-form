// Generate navigation items dynamically
const navList = document.getElementById('navList');

// Create navigation items
for (let i = 1; i <= 6; i++) {
    const navItem = document.createElement('div');
    navItem.className = 'nav-item';
    
    navItem.innerHTML = `
        <button onclick="toggleSelection(this, ${i})">
            <span class="nav-text">Page ${i}</span>
            <div class="checkbox">
                <span class="checkmark"></span>
            </div>
        </button>
    `;
    
    navList.appendChild(navItem);
}

// Handle page selection with toggle functionality
let selectedPage = null;

function toggleSelection(button, pageNumber) {
    const navItem = button.closest('.nav-item');
    
    // If clicking the same item, deselect it
    if (selectedPage === pageNumber) {
        navItem.classList.remove('selected');
        selectedPage = null;
    } else {
        // Remove previous selection
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('selected');
        });
        
        // Add selection to clicked item
        navItem.classList.add('selected');
        selectedPage = pageNumber;
    }
    
    // Add ripple effect
    button.style.transform = 'scale(0.98)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}

// Create toast notification
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // Add to page
    document.body.appendChild(toast);
    
    // Show with animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Auto hide after 2.5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 2500);
}

// Enhanced done button interaction
document.addEventListener('DOMContentLoaded', () => {
    const doneButton = document.querySelector('.action-btn');
    
    doneButton.addEventListener('click', () => {
        // Button press animation
        doneButton.style.transform = 'translateY(0) scale(0.98)';
        
        setTimeout(() => {
            doneButton.style.transform = 'translateY(0) scale(1)';
        }, 150);
        
        // Show appropriate message
        if (selectedPage) {
            showToast('You have pressed done!');
            console.log(`Action completed for page ${selectedPage}`);
        } else {
            showToast('Please select a page first');
        }
    });
    
    // Add hover effects
    doneButton.addEventListener('mouseenter', () => {
        doneButton.style.transform = 'translateY(-2px)';
    });
    
    doneButton.addEventListener('mouseleave', () => {
        doneButton.style.transform = 'translateY(0)';
    });
});