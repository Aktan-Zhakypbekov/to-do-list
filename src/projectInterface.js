function projectInterface(projectHeaderName) {
  let projectMainContainer = document.createElement("div");
  projectMainContainer.className = "projectMainContainer";
  projectMainContainer.style.cssText =
    "width: 100%; height: 100%; background-color: blue";

  let projectHeader = document.createElement("div");
  projectHeader.textContent = projectHeaderName;
  projectHeader.className = "projectHeader";
  projectHeader.style.cssText =
    "width: 100%; height: 50px; background-color: darkblue";

  let projectAddButton = document.createElement("button");
  projectAddButton.textContent = "+ Add an event";
  projectAddButton.className = "projectAddButton";
  projectAddButton.style.cssText =
    "width: 100%; height: 50px; background-color: red; border: none";

  let toDoFormContainer = document.querySelector("#toDoFormContainer");
  projectAddButton.addEventListener("click", (e) => {
    toDoFormContainer.style.cssText = "display: grid";
  });

  projectMainContainer.appendChild(projectHeader);
  projectMainContainer.appendChild(projectAddButton);
  let display = document.querySelector("#display");
  display.appendChild(projectMainContainer);
}
function removeProjectInterfaces() {
  let projectMainContainerList = document.querySelectorAll(
    ".projectMainContainer"
  );
  projectMainContainerList.forEach((element) => {
    element.remove();
  });
}

export { projectInterface, removeProjectInterfaces };
