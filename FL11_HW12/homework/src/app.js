// const rootNode = document.getElementById('root');

// const todoItems = [
//     {isDone: false, id: 12345, description: 'Todo 1'}
// ];

const zero = 0;
function showPage(pageId) {
    let item = document.getElementsByClassName('anonymous');
    let id = String(pageId);
    let newItem = document.querySelector(id);
    for (let i = 0; i < item.length; i++) {
        item[i].style.display = 'none';
    }
    newItem.style.display = 'block';
}

window.addEventListener('hashchange', function () {
    showPage(window.location.hash);
});
window.location.hash = '';
window.location.hash = '#main';

let addTaskInput = document.querySelector('.add-task');
let btnAddTask = document.querySelector('.btn');
let list = document.querySelector('.list');
let todoIsEmpty = document.querySelector('.todo-is-empty');
let counter = 0;

btnAddTask.addEventListener('click', function () {
    let btnCheckEl = document.createElement('button');
    btnCheckEl.setAttribute('class', 'btn-check-el');
    let imgCheckEl = document.createElement('img');
    imgCheckEl.setAttribute('alt', 'todo');
    imgCheckEl.setAttribute('src', '../homework/assets/img/todo-s.png');
    btnCheckEl.appendChild(imgCheckEl);
    btnCheckEl.addEventListener('click', function () {
        imgCheckEl.setAttribute('src', '../homework/assets/img/done-s.png');
        btnCheckEl.appendChild(imgCheckEl);
        commonDiv.appendChild(btnCheckEl);
        aEl.style.background = 'grey';
        commonDiv.appendChild(aEl);
        commonDiv.appendChild(btnDeleteEl);
        list.appendChild(commonDiv);
    });
    let divEl = document.createElement('div');
    divEl.setAttribute('class', 'div-text-el');
    let aEl = document.createElement('a');
    aEl.setAttribute('href', '#modify');
    aEl.setAttribute('class', 'add-link');

    divEl.appendChild(document.createTextNode(addTaskInput.value));
    aEl.appendChild(divEl);

    let btnDeleteEl = document.createElement('button');
    let commonDiv = document.createElement('div');

    btnDeleteEl.setAttribute('class', 'btn-delete-el');
    let imgDeleteEl = document.createElement('img');
    imgDeleteEl.setAttribute('alt', 'remove');
    imgDeleteEl.setAttribute('src', '../homework/assets/img/remove-s.jpg');
    btnDeleteEl.appendChild(imgDeleteEl);
    let btnModify = document.querySelector('.btn-modify');
    let textModify = document.querySelector('.modify-task');
    btnModify.addEventListener('click', function () {
        // debugger;
        // let k = event.target;
        // if(event){
            divEl.innerText = textModify.value;
        // }

    });

    commonDiv.setAttribute('class', 'common-div');
    commonDiv.appendChild(btnCheckEl);
    commonDiv.appendChild(aEl);
    commonDiv.appendChild(btnDeleteEl);
    list.appendChild(commonDiv);



    counter++;

    btnDeleteEl.addEventListener('click', function () {
        commonDiv.remove();
        counter--;
        console.log(counter);
        if (counter === zero) {
            list.style.display = 'none';
            todoIsEmpty.style.display = 'block';
        }
    });

    if (counter !== zero) {
        list.style.display = 'block';
        todoIsEmpty.style.display = 'none';
    }
    addTaskInput.value = '';
});

// rootNode.appendChild(/* Append your list item node*/);
