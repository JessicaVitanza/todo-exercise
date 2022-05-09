const task1 = new ToDo('compra il latte', ToDo.PRIORITY.veryHigh, ['spesa', 'colazione']);
const task2 = new ToDo('compra la frutta', ToDo.PRIORITY.medium, ['spesa', 'merenda']);
const task3 = new DeadLineToDo('fai gli auguri alla mamma', new Date(2022, 6, 9), ToDo.PRIORITY.low, ['compleanno']);
const task4 = new DeadLineToDo('chiama valerio');

const toDoList = [task1, task2, task3, task4];

function displayToDoWithTemplate(){
    const template = 
    `
    <span class="title">#TODOTITLE</span>
    </div>
    <div class="tags">
    </div>
    <div class="dates">
        <span class="creation-date">
            #CREATIONDATE
        </span>
    </div>
    <button class="todo-button">FATTO</button>
    ` 
    
    const toDoContainer = document.getElementById('todo-container');

    for (let i = 0; i < toDoList.length; i++) {
        const todo = toDoList[i];


        const div = document.createElement('div')
        div.classList.add('first-container');
        const todoTemplate = template.replace('#TODOTITLE', todo.name)
                                     .replace('#CREATIONDATE', todo.creationDate.toISOString());

        div.innerHTML = todoTemplate;
        toDoContainer.appendChild(div);

        const tagContainer = div.querySelector('.tags');
        for (const tag of todo.tags) {
            const tagSpan = document.createElement('span');
            tagSpan.classList.add('tag')
            const node = document.createTextNode(tag);
            tagSpan.appendChild(node);
            tagContainer.appendChild(tagSpan);
        }

        if (todo.deadLineDate) {

            const dateContainer = div.querySelector('.dates');
 
            const dateSpan = document.createElement('span');
            const dateNode = document.createTextNode(todo.deadLineDate.toISOString());
            dateSpan.appendChild(dateNode);
            dateContainer.appendChild(dateSpan);
         }
   
    }
}


displayToDoWithTemplate();



const doneList = [];