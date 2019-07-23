let rootNode = document.getElementById('root');

function toDoList () {
    let addNewActionInput = document.querySelector('.add-new-action__input');
    let list = document.querySelector('.list');
    let addNewActionBtn = document.querySelector('.add-new-action__btn');
    let topHeaderParagraph = document.querySelector('.top-header__paragraph');
    let counter = 0, ten = 10;

    addNewActionInput.addEventListener('keyup', function () {
        let itemList = addNewActionInput.value;
        itemList ? addNewActionBtn.disabled = false : addNewActionBtn.disabled = true;
    });

    addNewActionBtn.addEventListener('click', function () {
        if (counter < ten) {
            topHeaderParagraph.style.display = 'none';
            let itemList = addNewActionInput.value;
            let divAction = document.createElement('div');
            let elCheckBtn = document.createElement('button');
            let elCheckI = document.createElement('i');
            let elText = document.createElement('div');
            let elEditBtn = document.createElement('button');
            let elEditI = document.createElement('i');
            let elDeleteBtn = document.createElement('button');
            let elDeleteI = document.createElement('i');
            let divInnerContainer = document.createElement('div');

            divAction.setAttribute('class', 'action');
            divAction.setAttribute('draggable', 'true');
            elCheckBtn.setAttribute('class', 'action__checkbox');
            elCheckI.setAttribute('class', 'material-icons');
            elCheckI.appendChild(document.createTextNode('check_box_outline_blank'));
            elText.setAttribute('class', 'action__text');
            elText.appendChild(document.createTextNode(itemList));
            elEditBtn.setAttribute('class', 'action__edit');
            elEditI.setAttribute('class', 'material-icons');
            elEditI.appendChild(document.createTextNode('edit'));
            elDeleteBtn.setAttribute('class', 'action__delete');
            elDeleteI.setAttribute('class', 'material-icons');
            elDeleteI.appendChild(document.createTextNode('delete'));
            divInnerContainer.setAttribute('class', 'inner-container');

            elCheckBtn.appendChild(elCheckI);
            elEditBtn.appendChild(elEditI);
            elDeleteBtn.appendChild(elDeleteI);

            divInnerContainer.appendChild(elCheckBtn);
            divInnerContainer.appendChild(elText);
            divInnerContainer.appendChild(elEditBtn);

            divAction.appendChild(divInnerContainer);
            divAction.appendChild(elDeleteBtn);

            list.appendChild(divAction);

            elCheckI.addEventListener('click', function () {
                elCheckI.innerText = 'check_box';
            });

            elDeleteBtn.addEventListener('click', function () {
                divAction.remove();
                counter--;
            });

            elEditBtn.addEventListener('click', function (){
                let divNewInnerContainer = document.createElement('div');
                divNewInnerContainer.setAttribute('class', 'inner-container');
                let elActionInput = document.createElement('input');
                let elActionSave = document.createElement('button');
                let elActionI = document.createElement('i');

                elActionInput.setAttribute('class', 'action__input');
                elActionSave.setAttribute('class', 'action__btn');
                elActionSave.setAttribute('disabled', 'disabled');
                elActionI.setAttribute('class', 'material-icons');
                elActionI.appendChild(document.createTextNode('save'));
                elActionSave.appendChild(elActionI);

                divNewInnerContainer.appendChild(elActionInput);
                divNewInnerContainer.appendChild(elActionSave);

                divInnerContainer.style.display = 'none';
                divInnerContainer.before(divNewInnerContainer);

                elActionInput.addEventListener('keyup', function () {
                    elActionInput.value ? elActionSave.disabled = false : elActionSave.disabled = true;
                });

                elActionSave.addEventListener('click', function () {
                    elText.innerText = elActionInput.value;
                    divInnerContainer.style.display = 'flex';
                    divNewInnerContainer.remove();
                });
            });
            addNewActionInput.value = '';
            addNewActionBtn.disabled = true;
            counter++;
        } else {
            topHeaderParagraph.style.display = 'block';
        }
    });
}
toDoList();


