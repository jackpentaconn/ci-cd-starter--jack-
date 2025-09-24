<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mini To-Do List</title>
  <style>
    /* Base styles */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    /* App container */
    #app {
      background: #fff;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      width: 350px;
      max-width: 90%;
      animation: fadeIn 0.6s ease;
    }

    h1 {
      font-size: 22px;
      margin-bottom: 20px;
      text-align: center;
      color: #333;
    }

    /* Input + button row */
    .input-group {
      display: flex;
      margin-bottom: 15px;
    }
    input {
      flex: 1;
      padding: 10px;
      border: 2px solid #ddd;
      border-radius: 8px;
      outline: none;
      transition: 0.2s;
    }
    input:focus {
      border-color: #667eea;
    }
    button {
      margin-left: 10px;
      padding: 10px 15px;
      border: none;
      background: #667eea;
      color: white;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.2s;
    }
    button:hover {
      background: #5563c1;
    }

    /* Task list */
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      background: #f8f9fa;
      margin-bottom: 10px;
      padding: 12px 15px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: 0.3s;
    }
    li:hover {
      background: #eef1ff;
    }
    li.done {
      text-decoration: line-through;
      color: #999;
      background: #e9ecef;
    }

    /* Delete button */
    .delete-btn {
      background: #ff4d4f;
      border: none;
      color: white;
      font-weight: bold;
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .delete-btn:hover {
      background: #d9363e;
    }

    /* Animation */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <div id="app">
    <h1>✨ My To-Do List</h1>
    <div class="input-group">
      <input id="taskInput" type="text" placeholder="Add a new task..." />
      <button onclick="addTask()">Add</button>
    </div>
    <ul id="taskList"></ul>
  </div>

  <script>
    function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      li.textContent = taskText;

      // Toggle completion
      li.addEventListener("click", () => {
        li.classList.toggle("done");
      });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "×";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
      };

      li.appendChild(deleteBtn);
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }
  </script>
</body>
</html>
