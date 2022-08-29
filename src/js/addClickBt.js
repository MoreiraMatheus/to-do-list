function addClickBt(listaBotoes, func){
    listaBotoes.forEach((bt, index) => {
        if(!bt.classList.contains('click')){
            bt.addEventListener('click', () => {
                func(index)
            })
            bt.classList.add('click')
        }
    })
}

export default addClickBt