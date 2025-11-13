// Generate navigation items dynamically
const navList = document.getElementById('navList');

// Create navigation items
for (let i = 1; i <= 6; i++) {
    const navItem = document.createElement('div');
    navItem.className = 'nav-item';
    
    navItem.innerHTML = `
        <button onclick="selectPage(${i})">
            <span class="nav-text">Page ${i}</span>
            <div class="icon-wrapper">
                <span class="check-icon"></span>
                <span class="nav-icon"></span>
                <span class="icon-bg"></span>
            </div>
        </button>
    `;
    
    navList.appendChild(navItem);
}

// Handle page selection
let selectedPage = null;

function selectPage(pageNumber) {
    // Remove previous selection
    document.querySelectorAll('.nav-item button').forEach(btn => {
        btn.style.background = 'none';
        btn.querySelector('.check-icon').classList.remove('show');
    });
    
    // Highlight selected page and show blue check
    const button = event.target.closest('.nav-item').querySelector('button');
    button.style.background = '#f8f8f8';
    button.querySelector('.check-icon').classList.add('show');
    selectedPage = pageNumber;
}

// Create notification element
function showNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'You have pressed done!';
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove after animation
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3100);
}

// Handle done button
document.querySelector('.action-btn').addEventListener('click', () => {
    if (selectedPage) {
        console.log(`Action completed for page ${selectedPage}`);
        showNotification();
    } else {
        alert('Please select a page first');
    }
});