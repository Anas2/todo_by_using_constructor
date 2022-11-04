var todoList = document.getElementById("todolist");

// Empty Array of object declaration
var arrOfObj = [{}];

// Constructor function to make an object
function TodoTask(message){
    this.message = message; 
}


function addItems(){
 var todo_inp = document.getElementById("todo-inp");

 // create li tag
 var li = document.createElement("LI");
 var liText = document.createTextNode(todo_inp.value);
 li.appendChild(liText)

 // create delete button
 var btn3 = document.createElement("BUTTON");
 var btnText = document.createTextNode("Delete");
 btn3.appendChild(btnText)
 btn3.setAttribute("onclick", "delitem(this)")
 btn3.setAttribute("class","btn3")

 // create edit button
  var btn4 = document.createElement("BUTTON");
  var btn4Text = document.createTextNode(" Edit ");
  btn4.setAttribute("class","btn4")

  btn4.appendChild(btn4Text);
  btn4.setAttribute("onclick","edititem(this)")

  li.appendChild(btn4);
  li.appendChild(btn3)
  li.className = "liStyle";

  todoList.appendChild(li)
  todo_inp.value = "";

  var task = li.firstChild.nodeValue;
  console.log(task);
 // Assign value of input field to object.
   var todo1 = new TodoTask(task);
   console.log(todo1);
 // Calculate the length of li
   var li_len = document.getElementsByTagName("LI").length - 1;
   console.log(li_len);
 // Assigning Object to Array of Object at certain index #:
   arrOfObj[li_len] = todo1;
   console.log(arrOfObj[li_len]);
}

function delitem(e){
 var editvalue = e.parentNode.remove();
}

function edititem(e){
    var a = e.parentNode.firstChild.nodeValue;
    var b = prompt("enter new value", a);
    e.parentNode.firstChild.nodeValue = b

    console.log(e.parentNode.firstChild.nodeValue);
}

function deleteAll(){
 todoList.innerHTML = "";
}