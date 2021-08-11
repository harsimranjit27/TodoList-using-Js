console.log("index.js");

let btn = document.getElementById("btn");

let parentOfListItems = document.getElementById("tasks-list");
// parentOfListItems.style.border = "2px solid teal";
let inputArea = document.querySelector("#write-tasks");

// Event Listeners
inputArea.addEventListener("keyup",function(event){
    let todo_text = inputArea.value;
    if(todo_text && event.keyCode === 13){
        addTodo();
    }
});  

function addTodo(event) {
    
        let text_val = inputArea.value;
        let darkColoredListItem = document.createElement("div");
        darkColoredListItem.classList.add("dark-bg-div");

        let listItemParentDiv = document.createElement("div");
        
        darkColoredListItem.appendChild(listItemParentDiv);
        
        darkColoredListItem.style.padding = "0.25% 0.5%";
        darkColoredListItem.style.margin = "0.5%";
        // darkColoredListItem.style.backgroundColor = "darkgray";
        listItemParentDiv.classList.add("list-item");
        listItemParentDiv.style.position = "relative";
        // listItemParentDiv.style.padding = "2%";
        listItemParentDiv.style.backgroundColor = "white";
        

        // 1st div tag
        // creating div tag that holds the ul list containing task text
        let textElemDiv = document.createElement("div");
        textElemDiv.style.width = "90%";
        // textElemDiv.style.border = "2px solid blue";
        textElemDiv.classList.add("text-element-div");
        
        let childTextElem = document.createElement("ul");
        textElemDiv.appendChild(childTextElem);
        childTextElem.classList.add("task-item");
        
        // styling text element having task written in it
        // childTextElem.style.border = "2px dotted green";
        childTextElem.style.padding = "0%";
        childTextElem.style.margin = "0.5% 3%";
        childTextElem.style.wordWrap = "break-word";

        // adding test value to created element
        childTextElem.innerText = text_val;
        childTextElem.style.fontSize = "1.5em";

        // 2nd div tag
        // Creating and adding div tag to add checkbox and delete button
        let buttonDivForListItems = document.createElement("div");
        buttonDivForListItems.classList.add("button-div");
        
        // styling the div holding checkbox and delete
        buttonDivForListItems.style.position = "absolute";
        buttonDivForListItems.style.width = "12%";
        buttonDivForListItems.style.top = "10%";
        buttonDivForListItems.style.right = "0%";
        // buttonDivForListItems.style.border = "2px solid blue";
        
        // Creating and adding checkbox to buttonDivForListItems
        let childCheckBoxElem = document.createElement("input");
        childCheckBoxElem.type = "checkbox";
        childCheckBoxElem.classList.add("checkBox");
        childCheckBoxElem.style.height = "1.35em";
        childCheckBoxElem.style.width = "1.35em";
        // childCheckBoxElem.style.padding = "2%";
        
        buttonDivForListItems.appendChild(childCheckBoxElem);
        // console.log(buttonDivForListItems);  

        
        
        // Creating and adding delete button to buttonDivForListItem
        let childDeleteElem = document.createElement("button");
        childDeleteElem.classList.add("delete-btn");
        childDeleteElem.style.float = "right";
        childDeleteElem.innerText = "X";
        childDeleteElem.style.fontSize = "0.95em";
        childDeleteElem.style.backgroundColor = "white";
        childDeleteElem.style.border = "2px solid white";
        
        buttonDivForListItems.appendChild(childDeleteElem);
        
        
        listItemParentDiv.appendChild(textElemDiv);
        listItemParentDiv.appendChild(buttonDivForListItems);
        
        parentOfListItems.appendChild(darkColoredListItem);
        
        inputArea.value = "";
}

