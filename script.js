const taskTitle = document.querySelector(".input-title");
const taskDetail = document.querySelector(".input-detail");
const tasks = document.querySelector(".tasks");
const addTask = document.querySelector(".add-task");

const taskArr = [];

addTask.addEventListener("click", () => {
	const title = taskTitle.value.trim();
	const detail = taskDetail.value.trim();

	if (title === "" || detail === "") {
		alert("Input should not be empty");
		return;
	}
});
