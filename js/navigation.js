// Generate navigation items
const navList = document.getElementById('navList');
for (let i = 1; i <= 6; i++) {
    navList.innerHTML += `
        <div class="nav-item">
            <button onclick="toggleSelection(this, ${i})">
                <span class="nav-text">Page ${i}</span>
                <div class="checkbox"><span class="checkmark"></span></div>
            </button>
        </div>
    `;
}

// Track multiple selections
let selectedPages = new Set();

function toggleSelection(button, pageNumber) {
    const item = button.closest('.nav-item');
    
    // Toggle selection
    if (selectedPages.has(pageNumber)) {
        item.classList.remove('selected');
        selectedPages.delete(pageNumber);
    } else {
        item.classList.add('selected');
        selectedPages.add(pageNumber);
    }
    
    // Ripple effect
    button.style.transform = 'scale(0.98)';
    setTimeout(() => button.style.transform = 'scale(1)', 150);
}

function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Done button interactions
const doneBtn = document.querySelector('.action-btn');
doneBtn.addEventListener('click', () => {
    doneBtn.style.transform = 'translateY(0) scale(0.98)';
    setTimeout(() => doneBtn.style.transform = 'translateY(0) scale(1)', 150);
    
    if (selectedPages.size > 0) {
        const pages = Array.from(selectedPages).sort((a, b) => a - b);
        showToast(`You have pressed done! (${pages.length} page${pages.length > 1 ? 's' : ''} selected)`);
        console.log(`Action completed for pages: ${pages.join(', ')}`);
    } else {
        showToast('Please select at least one page first');
    }
});
doneBtn.addEventListener('mouseenter', () => doneBtn.style.transform = 'translateY(-2px)');
doneBtn.addEventListener('mouseleave', () => doneBtn.style.transform = 'translateY(0)');