/* <div class="task-item" data-task-id="1">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
                <label for="task-1"></label>
            </form>
            <span class="task-item__text">
                Посмотреть новый урок по JavaScript
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
            Удалить
        </button>
    </div>
</div> */

const tasks = [
  {
      id: '1138465078061',
      completed: false,
      text: 'Посмотреть новый урок по JavaScript',
  },
  {
      id: '1138465078062',
      completed: false,
      text: 'Выполнить тест после урока',
  },
  {
      id: '1138465078063',
      completed: false,
      text: 'Выполнить ДЗ после урока',
  },
]
  console.log(tasks)
  console.log(tasks[0])
  console.log(tasks+1)

const task = tasks.map((task, id)=>{
  return (
  `<div class="task-item" data-task-id="${id+1}">
  <div class="task-item__main-container">
      <div class="task-item__main-content">
          <form class="checkbox-form">
              <input class="checkbox-form__checkbox" type="checkbox" id="${"task"+ id+1}" ${task.completed? checked : ''}>
              <label for="${"task"+ id+1}"></label>
          </form>
          <span class="task-item__text">
              ${task.text}
          </span>
      </div>
      <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
          Удалить
      </button>
  </div>
</div>`
)
})
const main = document.querySelector('.tasks-list')
main.innerHTML = task

/*
let div1 = document.createElement('div')
div2 = document.createElement('div')
div3 = document.createElement('div')
form = document.createElement('form')
input = document.createElement('input')
label = document.createElement('label')
span = document.createElement('span')
button = document.createElement('button')
div1.className = "task-item" 
div1.dataset.taskId = "id+1" //"1"
div2.className = "task-item__main-container"
div3.cassName = "task-item__main-content"
form.className = "checkbox-form"
input.className = "checkbox-form__checkbox"
input.type = "checkbox"
input.id = "task+ id+1 ${task.completed? checked : ''}" //"task-1"
label.htmlFor = "task"+ id+1 //"task-1"
span.className = "task-item__text"
span.textContent = "task+ id+1"//'Посмотреть новый урок по JavaScript'
button.classname = "task-item__delete-button default-button delete-button"
button.dataset.deleteTaskId = "5"
button.textContent = "Удалить"

const main = document.querySelector('.tasks-list')
main.append (div1)
form.append(input, " ", label)
div3.append(form, '', span)
div2.append(div3, '', button)
div1.append(div2)
*/
