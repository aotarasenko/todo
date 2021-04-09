let inputArea = document.querySelector('.task__input');
let createButton = document.querySelector('.create__task');
let resultArea = document.querySelector('.list__area');

let deleteButtons = [];
let editButtons = [];

function createTask(value) {
    let resultStr = `
        <div class="task">
            <p class="task__description">
                ${value}
            </p>
            <button class="edit">
                EDIT
            </button>
            <button class="task__delete">
                DELETE
            </button>
        </div>
    `;
    return resultStr;
}

createButton.addEventListener('click', (Event) => {
    Event.preventDefault();
    if(inputArea.value !== ''){
        resultArea.innerHTML += createTask(inputArea.value);
        inputArea.value = '';
        deleteButtons = document.querySelectorAll('.task__delete');
        editButtons = document.querySelectorAll('.edit');
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].addEventListener('click', (Event)=>{
                if(Event.target.parentNode.className.includes('complete')){
                    Event.target.parentNode.remove();
                }
            });
        }

        for (let i = 0; i < editButtons.length; i++) {
            editButtons[i].addEventListener('click', (Event)=>{
                let p = document.querySelectorAll('.task__description');

                let tmp = p[i].textContent;
                p[i].remove();

                let input = document.createElement('input');
                input.value = tmp;
                let tasks = document.querySelectorAll('.task');
                tasks[i].prepend(input);
            });
            
        }
    } else{
        alert('Empty input area');
    }
});

resultArea.addEventListener('click', (Event) => {
    let tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i++) {
        if(Event.target.textContent == tasks[i].textContent){
            Event.target.classList.toggle('complete');
        }  
    }
});



