let addToDoButton= document.getElementById("addToDo")
let todocontainer= document.getElementById("todocontainer")
let inputfield= document.getElementById("inputfield")

addToDo.addEventListener("click",function(){
    
    var items = document.createElement("checkbox")
    items.classList.add("paragraph-styling")
    items.innerText= inputfield.value
    todocontainer.appendChild(items)
    inputfield.value=""
    items.addEventListener("click",function(){
        donecontainer.appendChild(items)
     })
    items.addEventListener("dblclick",function(){
        donecontainer.removeChild(items)
        var X= document.appendChild(items)
    })
        
    
})