const taskTitle = document.querySelector(".input-title");
const taskDetail = document.querySelector(".input-detail");
const tasks = document.querySelector(".tasks");
const addTask = document.querySelector(".add-task");

const taskArr = [];

addTask.addEventListener("click", () => {
	const title = taskTitle.value.trim();
	const detail = taskDetail.value.trim();

	if (title === "" || detail === "") {
	} else {
		const taskObj = {
			title: title,
			detail: detail,
			id: Date.now(),
		};
		taskArr.push(taskObj);
		updateTaskContainer();
		console.log(taskArr);
	}
});

tasks.addEventListener("click", (e) => {
	const deleteBtn = e.target.closest(".delete-btn");

	if (deleteBtn !== null) {
		deleteBtn.closest(".task");
	}
});

function updateTaskContainer() {
	tasks.innerHTML = "";

	taskArr.forEach((task) => {
		const taskHTML = ` <div class="task" id=${task.id}>
            <div class="task-1">
              <h3>${task.title}</h3>
              <p>${task.detail}</p>
 <div class="icons">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
              fill="#e3e3e3"> 
                <path 
                   d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z" /> 
               </svg> 
              <svg class="edit-btn" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
               fill="#e3e3e3"> 
               <path 
                   d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" /> 
              </svg> 
<svg class="delete-btn"" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                 fill="#e3e3e3"> 
                 <path 
                   d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /> -->
               </svg> 
             </div> 
            </div>
`;
		tasks.innerHTML += taskHTML;
	});
}
