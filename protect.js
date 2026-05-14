

document.addEventListener('DOMContentLoaded', () => {

    // Disable right-click
    document.querySelectorAll('img, video').forEach(element => {
        element.addEventListener('contextmenu', e => {
            e.preventDefault();
        });

        // Disable drag
        element.setAttribute('draggable', 'false');
    });

});