// Select the DOM elements we need to interact with
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Function to add a brand-new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === "") {
        alert("Please type a task before adding!");
        return;
    }

    // 1. Create a new list item (li) element
    const li = document.createElement('li');
    
    // 2. Set the text content inside the list item
    li.textContent = taskText;

    // 3. Create a unique delete button for this specific task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';

    // 4. Attach an event listener to the delete button to remove this task item
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // 5. Append the delete button to our list item, then append the list item to the main list
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // 6. Clear the input box so it is ready for the next entry
    taskInput.value = "";
}

// Execute addTask function when clicking the 'Add Task' button
addBtn.addEventListener('click', addTask);

// Allow pressing the 'Enter' key on the keyboard to add tasks quickly
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});