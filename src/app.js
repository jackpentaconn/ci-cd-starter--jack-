<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mini To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      display: flex;
      justify-content: center;
      margin-top: 50px;
    }
    .todo-container {
      background: #fff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      width: 320px;
    }
    h2 {
      margin-top: 0;
      text-align: center;
    }
    #taskInput {
      width: 75%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
    #addBtn {
      padding: 8px 12px;
      margin-left: 5px;
      border: none;
      background: #007BFF;
      color: #fff;
      border-radius: 6px;
      cursor: pointer;
    }
    #addBtn:hover {
      background: #0056b3;
    }
    ul {
      list-style: none;
      padding: 0;
      margin-top: 15px;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f9f9f9;
      padding: 8px;
      border-radius: 6px;
      margin-bottom: 8px;
    }
    li.completed {
      text-decoration: line-through;
      color: #aaa;
    }
    .deleteBtn {
      background: crimson;
      color: #fff;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      width: 24px;
      height: 24px;
    }
  </style>
</head>
<body>
  <div class="todo-container">
    <h2>Mini To-Do List</h2>
    <input type="text" id="taskInput" placeholder="Add a new task">
    <button id="addBtn">Add</button>
    <ul id="taskList"></ul>
  </div>

  <script>
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    // Load saved tasks
    window.onload = () => {
      const saved = JSON.parse(localStorage.getItem("tasks")) || [];
      saved.forEach(task => addTask(task.text, task.completed));
    };

    addBtn.addEventListener("click", () => {
      const text = taskInput.value.trim();
      if (text !== "") {
        addTask(text);
        taskInput.value = "";
        saveTasks();
      }
    });

    function addTask(text, completed = false) {
      const li = document.createElement("li");
      li.textContent = text;

      if (completed) li.classList.add("completed");

      li.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
      });

      const delBtn = document.createElement("button");
      delBtn.textContent = "×";
      delBtn.className = "deleteBtn";
      delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        saveTasks();
      });

      li.appendChild(delBtn);
      taskList.appendChild(li);
    }

    function saveTasks() {
      const tasks = [];
      document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
          text: li.childNodes[0].textContent.trim(),
          completed: li.classList.contains("completed")
        });
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  </script>
</body>
</html>

