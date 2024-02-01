document.addEventListener('DOMContentLoaded', function () {
    // Get the pop-up, close buttons, and overlay elements
    var popup = document.getElementById('popup');
    var closeButton = document.getElementById('close');
    var closePopupAndScrollBtn = document.getElementById('closePopupAndScrollBtn');

    var overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.classList.add('overlay'); // Add the 'overlay' class

    // Append overlay to the document
    document.body.appendChild(overlay);

    // Check the timestamp of when the pop-up was closed
    var lastClosedTimestamp = localStorage.getItem('lastClosedTimestamp');
    var currentTime = new Date().getTime();

    // If the pop-up should be displayed or if the timestamp is not set, display the pop-up and overlay
    if (!lastClosedTimestamp || currentTime - lastClosedTimestamp > 1 * 2 * 2 * 1000) {
        // Display the pop-up and overlay
        popup.style.display = 'block';
        overlay.style.display = 'block';

        // Add a click event listener to the first close button
        closeButton.addEventListener('click', function () {
            // Hide the pop-up and overlay
            popup.style.display = 'none';
            overlay.style.display = 'none';

            // Set the timestamp of when the pop-up was closed
            localStorage.setItem('lastClosedTimestamp', currentTime);
        });

        // Add a click event listener to the second close and scroll button
        closePopupAndScrollBtn.addEventListener('click', function () {
            // Hide the pop-up and overlay
            popup.style.display = 'none';
            overlay.style.display = 'none';

            // Set the timestamp of when the pop-up was closed
            localStorage.setItem('lastClosedTimestamp', currentTime);

            // Scroll to the target section
            var targetSection = document.getElementById('GalaMoreinfo');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
