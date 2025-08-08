// This file contains the JavaScript code for the To Do List application.

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const list = document.getElementById('task-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (input.value.trim() === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
      <label style="display: flex; align-items: center; gap: 10px;">
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${input.value}</span>
      </label>
      <button class="delete-btn">✖</button>
    `;

        list.appendChild(li);
        input.value = '';

        //--> Mark as done
        li.querySelector('.task-checkbox').addEventListener('change', function () {
            li.classList.toggle('done', this.checked);
        });

        //--> Delete task
        li.querySelector('.delete-btn').addEventListener('click', function () {
            li.remove();
        });
    });
});