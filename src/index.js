const render = document.getElementById('content');
const formulario = document.getElementById('task');
render.innerHTML +=
'<input type="text" id="task">'
+'<button id="miboton">New Task</button>'
const list = []

const mostrar = () => {
    list.push(task.value)
    console.log(list)
    document.getElementById('task').value = ''

    function create() {
        let index = list.length - 1;
        let h1 = document.createElement('h1');
        h1.textContent = `hola ${list[index]}`;
        h1.setAttribute('class', 'note');
        render.appendChild(h1);
    }
    create()
}

document.getElementById('miboton').onclick = mostrar ;