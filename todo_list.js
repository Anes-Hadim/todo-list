const todo= JSON.parse(localStorage.getItem('store')) || [];
displaytodo();

function enter(event) {
  if (event.key==='Enter') {
    addtodo();
  }
}

function addtodo() {
  const input=document.querySelector('.input_todo');
  const dateinput=document.querySelector('.date_in');

  todo.push({
    name: input.value ,
    date: dateinput.value 
  });
  localStorage.setItem('store',JSON.stringify(todo));

  input.value='';
  
  displaytodo();
}

function displaytodo() {
  let phtml='';
  for(let i=0;i<todo.length;i++){
    const html=`
    <div>${todo[i].name}</div>
    <div>${todo[i].date}</div>
    <button class="delete" onclick="
    todo.splice(${i},1);
    localStorage.setItem('store',JSON.stringify(todo));
    displaytodo();
    ">Delete</button>`;
    phtml+=html;
  }
  document.querySelector('.display').innerHTML=phtml;
}
 