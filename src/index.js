document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form').addEventListener('submit',function(e){
    e.preventDefault()
    const item = document.getElementById('new-task-description').value
    console.log(item)
    const text = document.createTextNode(item)
    buildToDo(item)
  })
  
});

function buildToDo(todo){
  let list = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent = 'Delete'
  list.textContent = todo
  list.appendChild(btn)
  document.querySelector('ul').appendChild(list)
}


function handleDelete(e){
  e.target.parentNode.remove()
}

