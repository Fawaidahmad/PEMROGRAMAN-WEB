let taskList = [];
let completedTasks = 0;

function updateProgress() {
    const progressText = document.getElementById('progress-text');
    const progressFill = document.getElementById('progress-fill');
    const totalTasks = taskList.length;
    progressText.innerText = `${completedTasks}/${totalTasks}`;

    const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    progressFill.style.width = `${progressPercentage}%`;

    // Check if all tasks are completed to trigger confetti
    if (completedTasks === totalTasks && totalTasks > 0) {
        launchConfetti();
    }
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    taskList.push(task);
    taskInput.value = '';
    renderTasks();
}

function toggleTaskCompletion(id) {
    const task = taskList.find(task => task.id === id);
    task.completed = !task.completed;
    completedTasks = task.completed ? completedTasks + 1 : completedTasks - 1;
    renderTasks();
}

function editTask(id) {
    const task = taskList.find(task => task.id === id);
    const newText = prompt('Edit your task:', task.text);
    if (newText !== null && newText.trim() !== '') {
        task.text = newText;
        renderTasks();
    }
}

// Updated deleteTask function
function deleteTask(id) {
    const task = taskList.find(task => task.id === id);
    
    // If the task was completed, decrease the completedTasks count
    if (task.completed) {
        completedTasks--;
    }
    
    // Remove the task from the taskList
    taskList = taskList.filter(task => task.id !== id);
    
    renderTasks(); // Re-render tasks and update progress
}

function renderTasks() {
    const taskListContainer = document.getElementById('task-list');
    taskListContainer.innerHTML = '';

    taskList.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        if (task.completed) taskItem.classList.add('completed');

        taskItem.innerHTML = `
            <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTaskCompletion(${task.id})">
            <span>${task.text}</span>
            <div class="task-buttons">
                <button class="edit-btn" onclick="editTask(${task.id})">&#9998;</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">&#128465;</button>
            </div>
        `;

        taskListContainer.appendChild(taskItem);
    });

    updateProgress(); // Update progress after rendering the task list
}

// Confetti function
function launchConfetti() {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}
