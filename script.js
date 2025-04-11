// Add event listener for the "Add" button
document.getElementById('add-task-btn').addEventListener('click', function () {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  // Check if the input is not empty
  if (taskText !== '') {
    const taskList = document.getElementById('task-list');

    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create a container for buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    // Create the "Completed" button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Completed';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', function () {
      taskItem.classList.toggle('completed');
    });

    // Create the "Delete" button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function () {
      taskList.removeChild(taskItem);
    });

    // Append buttons to the button container
    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    // Append the task text and button container to the task item
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(buttonContainer);

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
  }
});