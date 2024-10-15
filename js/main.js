const list = document.getElementById('dynamicList');
const newItemInput = document.getElementById('newItem');
const addItemBtn = document.getElementById('addItemBtn');
const removeItemBtn = document.getElementById('removeItemBtn');
const successMessage = document.getElementById('successMessage');

let selectedItem = null;

// Add new item to the list
addItemBtn.addEventListener('click', function () {
    const newItemText = newItemInput.value.trim();

    // Check if the input is not empty
    if (newItemText !== "") {
        // Create a new list item element
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;

        // Add click event to select the item
        newItem.addEventListener('click', function () {
            selectItem(newItem);
        });

        // Append the new item to the list
        list.appendChild(newItem);

        // Clear the input field
        newItemInput.value = "";

        showSuccessMessage();

    } else {
        alert("Please enter a valid item.");
    }
});

// Remove the selected item from the list
removeItemBtn.addEventListener('click', function () {
    // Check if there is an item selected
    if (selectedItem) {
        list.removeChild(selectedItem);
        selectedItem = null;
    } else {
        alert("No item selected to remove.");
    }
});

// Function to select an item (highlight)
function selectItem(item) {
    // Deselect the previous item
    if (selectedItem) {
        selectedItem.classList.remove('selected');
    }

    // Select the new item
    selectedItem = item;
    selectedItem.classList.add('selected');
}

// Add click event to each existing list item to allow selection
const listItems = list.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
        selectItem(listItems[i]);
    });
}

function showSuccessMessage() {
    successMessage.innerHTML="Option added successfully!";  // Show the message

    // Hide the message after 2 seconds
    setTimeout(function() {
        successMessage.innerHTML="";  // Hide the message
    }, 2000);
}