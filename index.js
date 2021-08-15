console.log("index.js");
let btn = document.getElementById("btn");
let parentOfListItems = document.getElementById("tasks-list");
// parentOfListItems.style.border = "2px solid teal";
let inputArea = document.querySelector("#write-tasks");

// EVENT LISTENERS
inputArea.addEventListener("keyup",function(event){
    // CHECK PRESS OF ENTER KEY
    if(event.keyCode === 13){
        let todo_text = inputArea.value;
        if(todo_text){
            addTodo();
            taskItems.push(todo_text);
        }
    }
});  

function addTodo(event) {    
    let text_val = inputArea.value;

    // ADD TODO TO DOM
    addTodoToDOM(text_val);
    inputArea.value = "";
}

function addTodoToDOM(text_val) {

    let listItemParentDiv = document.createElement("div");
    listItemParentDiv.classList.add("list-item");
    listItemParentDiv.style.position = "relative";
    listItemParentDiv.style.margin = "2%";
    listItemParentDiv.style.backgroundColor = "rgb(224, 220, 220)";
    

    // 1st div tag
    // CREATING div tag THAT HOLDS THE ul LIST CONTAINING TASK TEXT
    let textElemDiv = document.createElement("div");
    textElemDiv.style.width = "90%";
    // textElemDiv.style.border = "2px solid blue";
    textElemDiv.classList.add("text-element-div");
    
    let childTextElem = document.createElement("ul");
    textElemDiv.appendChild(childTextElem);
    childTextElem.classList.add("task-item");
    
    // STYLING TEXT ELEMENT HAVING TASK WRITTEN ON IT
    childTextElem.style.padding = "0%";
    childTextElem.style.margin = "0.5% 3%";
    childTextElem.style.wordWrap = "break-word";
    // childTextElem.style.border = "2px dotted green";

    // ADDING text_val TO CREATED ELEMENT
    childTextElem.innerText = text_val;
    childTextElem.style.fontSize = "1.5em";

    
    // 2nd div tag
    // CREATING AND ADDING DIV TAG TO ADD checkbox AND delete BUTTON
    let buttonDivForListItems = document.createElement("div");
    buttonDivForListItems.classList.add("button-div");
    
    // STYLING THE checkbox AND delete BUTTON 
    buttonDivForListItems.style.position = "absolute";
    buttonDivForListItems.style.width = "12%";
    buttonDivForListItems.style.top = "10%";
    buttonDivForListItems.style.right = "0%";
    // buttonDivForListItems.style.border = "2px solid blue";
    
    // CREATING AND STYLING CHECKBOX BUTTON TO buttonDivForListItems
    let childCheckBoxElem = document.createElement("input");       
    childCheckBoxElem.type = "checkbox";
    childCheckBoxElem.classList.add("checkBox");
    childCheckBoxElem.style.height = "1.35em";
    childCheckBoxElem.style.width = "1.35em";
    // childCheckBoxElem.style.padding = "2%";

    // ADDING TASK COMPLETION FUNCTIONALITY
    childCheckBoxElem.addEventListener("click",strikeThroughTask);
    buttonDivForListItems.appendChild(childCheckBoxElem);
    // console.log(buttonDivForListItems);  

    // CREATING AND STYLING delete BUTTON FOR buttonDivForListItem
    let childDeleteBtn = document.createElement("button");      
    childDeleteBtn.classList.add("delete-btn");
    childDeleteBtn.style.float = "right";
    childDeleteBtn.innerText = "X";
    childDeleteBtn.style.fontSize = "0.95em";
    childDeleteBtn.style.backgroundColor = "rgb(224, 220, 220)";
    childDeleteBtn.style.border = "2px solid rgb(224, 220, 220)";
    buttonDivForListItems.appendChild(childDeleteBtn);
    
    // ADDING FUNCTIONALITY TO REMOVE TASK FROM buttonDivForListItem
    childDeleteBtn.addEventListener("click",removeTask);

    // APPENDING textElemDiv AND buttonDivForListItems TO CHILD OF parentOfListItems
    listItemParentDiv.appendChild(textElemDiv);
    listItemParentDiv.appendChild(buttonDivForListItems);
    
    // APPENDING CHILD OF parentOfListItems TO IT'S PARENT
    parentOfListItems.appendChild(listItemParentDiv);
}

function removeTask(event){
    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
}

function strikeThroughTask(event){
    // console.log(event.target.parentNode.parentNode.childNodes[1].firstChild.parentNode.parentNode.firstChild.firstChild);
    if (event.target.checked) {
        event.target.parentNode.parentNode.childNodes[1].firstChild.parentNode.parentNode.firstChild.firstChild.style.textDecoration = "line-through";
    }
    else{
        event.target.parentNode.parentNode.childNodes[1].firstChild.parentNode.parentNode.firstChild.firstChild.style.textDecoration = "none";
    }
}