function projectInterface() {
  let projectMainContainer = document.createElement("div");
  projectMainContainer.className = "projectMainContainer";
  projectMainContainer.style.cssText =
    "width: 100%; height: 100%; background-color: blue";

  let projectHeader = document.createElement("div");
  projectHeader.textContent = "Project Header";
  projectHeader.className = "projectHeader";
  projectHeader.style.cssText =
    "width: 100%; height: 50px; background-color: darkblue";

  let projectAddButton = document.createElement("button");
  projectAddButton.textContent = "+ Add an event";
  projectAddButton.className = "projectAddButton";
  projectAddButton.style.cssText =
    "width: 100%; height: 50px; background-color: red; border: none";

  projectMainContainer.appendChild(projectHeader);
  projectMainContainer.appendChild(projectAddButton);
  let display = document.querySelector("#display");
  display.appendChild(projectMainContainer);
}

export { projectInterface };
