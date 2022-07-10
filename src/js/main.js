const btAddTarefa = document.querySelectorAll('button')[0]
const listaTarefas = document.getElementById('lista-tarefas')
let btDelete = listaTarefas.querySelectorAll('button.delete')
let btEdit = listaTarefas.querySelectorAll('button.edit')

// atualiza dados importantes
function refresh(){
    btDelete = listaTarefas.querySelectorAll('button.delete')
    btEdit = listaTarefas.querySelectorAll('button.edit')
}

btAddTarefa.addEventListener('click', () => {
    //criar div
    const inputTarefa = document.querySelector('input')
    const novaDiv = criarDiv(inputTarefa.value)
    inputTarefa.value = ''
    //adicionar div a lista de tarefas
    listaTarefas.appendChild(novaDiv)
    //dar refresh
    refresh()
})

function criarDiv(nomeTarefa){
    //criar a div de class tarefa
    const tarefaNova = document.createElement('div')
    tarefaNova.classList.add('tarefa')

    //parágrafo novo
    const pNovo = document.createElement('p')
    pNovo.innerText = nomeTarefa
    //div onde ficará os novos botões
    const btsNovos = document.createElement('div')
    btsNovos.classList.add('bts')
    
    tarefaNova.appendChild(pNovo)
    tarefaNova.appendChild(btsNovos)

    //adiciona os botões
    //checkbox
    const checkboxNova = document.createElement('input')
    checkboxNova.setAttribute('type', 'checkbox')
    
    //delete tarefa
    const deleteBtNovo = document.createElement('button')
    deleteBtNovo.classList.add('delete')
    const imgDeleteBt = document.createElement('img')
    imgDeleteBt.setAttribute('src', 'src/img/trash.png')
    deleteBtNovo.appendChild(imgDeleteBt)
    //edit tarefa
    const editBtNovo = document.createElement('button')
    editBtNovo.classList.add('edit')
    const imgEditBt = document.createElement('img')
    imgEditBt.setAttribute('src', 'src/img/write.png')
    editBtNovo.appendChild(imgEditBt)
    
    btsNovos.appendChild(checkboxNova)
    btsNovos.appendChild(deleteBtNovo)
    btsNovos.appendChild(editBtNovo)

    return tarefaNova
}

//Criar funções dos botões das tarefas

// Checkbox

// Delete

// Edit
