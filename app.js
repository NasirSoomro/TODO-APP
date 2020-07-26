var list = document.getElementById("list")

function addTodo() {
      var  todo_item = document.getElementById("todo-item")
      var li = document.createElement('li')
      var liText = document.createTextNode(todo_item.value)
      li.appendChild(liText)
      
      var delBtn = document.createElement("Button")
      var delText = document.createTextNode("DELETE")
      delBtn.setAttribute("class","btn")
      delBtn.setAttribute("onclick","deleteItem(this)")
      delBtn.appendChild(delText)

// creat edite button
var editBtn = document.createElement("Button") 
var editText = document.createTextNode("EDIT")
editBtn.setAttribute("class","jus")
editBtn.appendChild(editText)
li.appendChild(delBtn)
li.appendChild(editBtn)
editBtn.setAttribute("onclick","editItem(this)")




      li.appendChild(delBtn )
      
      list.appendChild(li)
      todo_item.value = ""
     

}



function deleteItem(e){
         e.parentNode.remove()
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value",val)
    e.parentNode.firstChild.nodeValue = editValue
}




function deleteAll(){
    list.innerHTML = " "
}