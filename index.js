console.log("index.js");
let count = 0;
let textarea_content = document.getElementById("write-tasks");

let btn = document.getElementById("btn");

let parentOfListItems = document.getElementById("tasks-list");
parentOfListItems.style.border = "2px solid teal";

btn.addEventListener("click",addToDo);
// Functions
function addToDo(event) {
    
    let text_val = textarea_content.value;

    if (text_val) {
        
        let listItemParentDiv = document.createElement("div");
        listItemParentDiv.classList.add("list-item");
        listItemParentDiv.style.position = "relative";
        
        // 1st div tag
        // creating div tag that holds the ul list containing task text
        let textElemDiv = document.createElement("div");
        textElemDiv.style.width = "85%";
        textElemDiv.style.border = "2px solid blue";
        textElemDiv.classList.add("text-element-div");
        
        let childTextElem = document.createElement("ul");
        textElemDiv.appendChild(childTextElem);
        childTextElem.classList.add("task-item");
        
        // styling text element having task written in it
        childTextElem.style.border = "2px dotted green";
        childTextElem.style.padding = "0%";
        childTextElem.style.margin = "5%";
        childTextElem.style.wordWrap = "break-word";

        // adding test value to created element
        childTextElem.innerText = text_val;
        
        // 2nd div tag
        // Creating and adding div tag to add checkbox and delete button
        let buttonDivForListItems = document.createElement("div");
        buttonDivForListItems.classList.add("button-div");
        
        // styling the div holding checkbox and delete
        buttonDivForListItems.style.position = "absolute";
        buttonDivForListItems.style.width = "12%";
        buttonDivForListItems.style.top = "30%";
        buttonDivForListItems.style.right = "0%";
        buttonDivForListItems.style.border = "2px solid blue";
        
        // Creating and adding checkbox to buttonDivForListItems
        let childCheckBoxElem = document.createElement("input");
        childCheckBoxElem.type = "checkbox";
        childCheckBoxElem.classList.add("checkBox");
        childCheckBoxElem.style.height = "1.5em";
        childCheckBoxElem.style.width = "1.5em";
        childCheckBoxElem.style.margin = "2%";
        
        buttonDivForListItems.appendChild(childCheckBoxElem);
        // console.log(buttonDivForListItems);  
        
        // Creating and adding delete button to buttonDivForListItem
        let childDeleteElem = document.createElement("button");
        childDeleteElem.classList.add("delete-btn");
        childDeleteElem.style.float = "right";
        childDeleteElem.innerText = "X";
        childDeleteElem.style.margin = "2%";
        childDeleteElem.style.backgroundColor = "white";
        childDeleteElem.style.border = "2px solid white";
        
        buttonDivForListItems.appendChild(childDeleteElem);
        
        
        listItemParentDiv.appendChild(textElemDiv);
        listItemParentDiv.appendChild(buttonDivForListItems);
        
        parentOfListItems.appendChild(listItemParentDiv);
        
        textarea_content.value = "";
    }
}