// In your blank JavaScript file, declare three variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Add a click event listener for the add chapter button
button.addEventListener('click', function () {
    // Check if the user entered something
    if (input.value.trim() !== '') {
        // Create a list item and give the value of the input
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create a delete button and add a click event listener
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Add the delete button to the list item
        li.append(deleteBtn);
        // Append the list item to the unordered list
        list.append(li);

        // Clear the user input field
        input.value = '';
    }

    // Focus the user back to the input field
    input.focus();
});