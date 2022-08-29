function criarDiv(nomeTarefa){
    //criar a div de class tarefa
    const TAREFA_NOVA = document.createElement('div')
    TAREFA_NOVA.classList.add('tarefa')

    //parágrafo novo
    const P_NOVO = document.createElement('p')
    P_NOVO.innerText = nomeTarefa
    //div onde ficará os novos botões
    const BTS_NOVOS = document.createElement('div')
    BTS_NOVOS.classList.add('bts')
    
    TAREFA_NOVA.appendChild(P_NOVO)
    TAREFA_NOVA.appendChild(BTS_NOVOS)

    //adiciona os botões
    //checkbox
    const CHECKBOX_NOVA = document.createElement('input')
    CHECKBOX_NOVA.setAttribute('type', 'checkbox')
    CHECKBOX_NOVA.classList.add('check')
    
    //delete tarefa
    const DELETE_BT_NOVO = document.createElement('button')
    DELETE_BT_NOVO.classList.add('delete')
    const IMG_DELETE_BT = document.createElement('img')
    IMG_DELETE_BT.setAttribute('src', 'src/img/trash.png')
    DELETE_BT_NOVO.appendChild(IMG_DELETE_BT)
    //edit tarefa
    const EDIT_BT_NOVO = document.createElement('button')
    EDIT_BT_NOVO.classList.add('edit')
    const IMG_EDIT_BT = document.createElement('img')
    IMG_EDIT_BT.setAttribute('src', 'src/img/write.png')
    EDIT_BT_NOVO.appendChild(IMG_EDIT_BT)
    
    BTS_NOVOS.appendChild(CHECKBOX_NOVA)
    BTS_NOVOS.appendChild(DELETE_BT_NOVO)
    BTS_NOVOS.appendChild(EDIT_BT_NOVO)

    return TAREFA_NOVA
}

export default criarDiv