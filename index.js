console.log("index.js");

let btn = document.getElementById("btn");

let parentOfListItems = document.getElementById("tasks-list");
// parentOfListItems.style.border = "2px solid teal";
let inputArea = document.querySelector("#write-tasks");

// Event Listeners
inputArea.addEventListener("keyup",function(event){
    let todo_text = inputArea.value;
    if(todo_text != "" && event.keyCode === 13){
        addTodo();
    }
});  

function addTodo(event) {
    
        let text_val = inputArea.value;

        let listItemParentDiv = document.createElement("div");
        listItemParentDiv.classList.add("list-item");
        listItemParentDiv.style.position = "relative";
        listItemParentDiv.style.margin = "2%";
        listItemParentDiv.style.backgroundColor = "rgb(224, 220, 220)";
        

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

        // Added task completion functionality
        childCheckBoxElem.addEventListener("click",function strikeThroughTask(){
            if (childCheckBoxElem.checked) {
                childTextElem.style.textDecoration = "line-through";
            }
            else{
                childTextElem.style.textDecoration = "none";
            }
        });

        childCheckBoxElem.style.height = "1.35em";
        childCheckBoxElem.style.width = "1.35em";
        // childCheckBoxElem.style.padding = "2%";

        buttonDivForListItems.appendChild(childCheckBoxElem);
        // console.log(buttonDivForListItems);  
    
        // Creating and adding delete button to buttonDivForListItem
        let childDeleteBtn = document.createElement("button");
        
        childDeleteBtn.classList.add("delete-btn");
        childDeleteBtn.style.float = "right";
        childDeleteBtn.innerText = "X";
        childDeleteBtn.style.fontSize = "0.95em";
        childDeleteBtn.style.backgroundColor = "rgb(224, 220, 220)";
        childDeleteBtn.style.border = "2px solid rgb(224, 220, 220)";
        
        childDeleteBtn.addEventListener("click",function removeTask(event){
             
             event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
            
        });

        buttonDivForListItems.appendChild(childDeleteBtn);

        listItemParentDiv.appendChild(textElemDiv);
        listItemParentDiv.appendChild(buttonDivForListItems);
        
        parentOfListItems.appendChild(listItemParentDiv);
        
        inputArea.value = "";
}
    
  

    