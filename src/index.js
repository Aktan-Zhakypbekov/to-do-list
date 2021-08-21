import { projectInterface, removeProjectInterfaces } from "./projectInterface";

let inboxButton = document.querySelector("#inboxButton");
inboxButton.addEventListener("click", (e) => {
  removeProjectInterfaces();
  projectInterface("Inbox");
});

let todayButton = document.querySelector("#todayButton");
todayButton.addEventListener("click", (e) => {
  removeProjectInterfaces();
  projectInterface("Today");
});

let thisWeekButton = document.querySelector("#thisWeekButton");
thisWeekButton.addEventListener("click", (e) => {
  removeProjectInterfaces();
  projectInterface("This Week");
});

let toDoFormContainer = document.querySelector("#toDoFormContainer");
let exitButton = document.querySelector("#exitButton");
exitButton.addEventListener("click", (e) => {
  toDoFormContainer.style.cssText = "display: none";
});
