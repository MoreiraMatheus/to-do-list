const addTarefa = document.querySelectorAll('button')[0]
const listaTarefas = document.getElementById('lista-tarefas')
const deleteTarefa = document.querySelectorAll('button.delete')
const editTarefa = document.querySelectorAll('button.edit')

addTarefa.addEventListener('click', () => {
    const adicionarNovaTarefa = document.querySelectorAll('input')[0]
    let descreveTarefa = adicionarNovaTarefa.value
    if(descreveTarefa == ''){
        window.alert('descreva a tarefa para adicionar ela')
    }
    else{
        let textoTarefa = 
        `<div class="tarefa">
            <p>${descreveTarefa}</p>
            <div class="bts">
                <input type="checkbox" name="" id="check">
                <button><img src="src/img/trash.png" alt=""></button>
                <button><img src="src/img/write.png" alt=""></button>
            </div>
        </div>`
        adicionarNovaTarefa.value = ''
        listaTarefas.innerHTML += textoTarefa
    }
    console.log(listaTarefas.querySelectorAll('div.tarefa'))
})