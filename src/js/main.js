const addTarefa = document.querySelectorAll('button')[0]
const deleteTarefa = document.querySelectorAll('button')[1]//seleciona apenas um button, resolver
const editTarefa = document.querySelectorAll('button')[2]//seleciona apenas um button, resolver isso
const listaTarefas = document.getElementById('lista-tarefas')

addTarefa.addEventListener('click', () => {
    const novaTarefa = document.querySelectorAll('input')[0]
    let descreveTarefa = novaTarefa.value
    let textoTarefa = 
    `<div class="tarefa">
        <p>${descreveTarefa}</p>
        <div class="bts">
            <input type="checkbox" name="" id="check">
            <button><img src="src/img/trash.png" alt=""></button>
            <button><img src="src/img/write.png" alt=""></button>
        </div>
    </div>`

    novaTarefa.value = ''

    listaTarefas.innerHTML += textoTarefa
    console.log(listaTarefas.querySelectorAll('div.tarefa'))
})

deleteTarefa.addEventListener('click', () => {
    window.alert('tarefa removida')
    const listaDelete = listaTarefas.querySelectorAll('button.delete')
    console.log(listaDelete)
})

editTarefa.addEventListener('click', () => {
    window.alert('vamos editar essa tarefa')
})
