document.addEventListener('DOMContentLoaded', function() {
    // Select the element containing the text "THIS TEXT HERE"
    var textElement = document.getElementById('current_time');

    // Write a function to modify the contents of this element to display the current date and time
    function displayDateTime() {
        var currentDate = new Date();
        var dateTimeString = currentDate.toLocaleString(); // Get date and time in localized format
        textElement.innerText = dateTimeString; // Update the text content of the element
    }

    // Modify the button to run this function when clicked
    var button = document.querySelector('button');
    button.addEventListener('click', displayDateTime);
});
