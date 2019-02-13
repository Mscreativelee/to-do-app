function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
   let newLi = document.createElement('li');

   // create a new input
   let checkbox = document.createElement('input');

   // set the input's type to checkbox
   checkbox.type = "checkbox";

   // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';


  });


 5 +  // create delete button
 6 +  deleteToDo.addEventListener('click', removal => {
 7 +    removal.preventDefault();
 8 +    let selected = document.querySelectorAll('#toDoList li input:checked');
 9 +    for (var i = 0; i < selected.length; i++){
10 +      selected[i].parentNode.parentNode.removeChild(selected[i].parentNode);
11 +    }
12 +  });
 }

 window.onload = function() {
   onReady();
 };
