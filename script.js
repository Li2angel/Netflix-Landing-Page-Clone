const tabItems = document.querySelectorAll('.tab-items');
const tabContentItems = document.querySelectorAll('.tab-content-item');


function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Fuction for Seleting tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab Content From DOM
    const contentItem = document.querySelector(`#${this.id}-content`);
    contentItem.classList.add('show');
}
tabItems.forEach(item => item.addEventListener('click', selectItem));