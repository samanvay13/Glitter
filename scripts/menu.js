document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const menuContent = document.getElementById('menuContent');

    hamburgerIcon.addEventListener('click', function() {
        menuContent.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!menuContent.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            menuContent.classList.remove('show');
        }
    });
});
