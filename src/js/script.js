(function () {

    // Navigation toggler
    const toggleBtn = document.querySelector('.toggle-button');
    const mainNav = document.querySelector('.right');
    toggleBtn.addEventListener('click', () => {
        mainNav.classList.toggle('show');
    });

    // Share button
    let shareBtn = document.querySelector('.share');
    shareBtn.addEventListener('click', () => {
        shareBtn.children[1].classList.toggle('show');
        shareBtn.classList.toggle('clicked');
    })
    
    // Modal
    const modal = document.querySelector('.modal');
    const contactBtn = document.querySelector('#contact-us');
    const closeBtn = document.querySelector('#close-modal');

    contactBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

    // Open
    function openModal() {
        contactBtn.classList.add('clicked');
        modal.style.display = 'flex';
    }

    // Close
    function closeModal() {
        contactBtn.classList.remove('clicked');
        modal.style.display = 'none';
    }

    // Close If Outside Click
    function outsideClick(e) {
        if (e.target == modal) {
            contactBtn.classList.remove('clicked');
            modal.style.display = 'none';
        }
    }
})();