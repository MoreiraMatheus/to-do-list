class Tarefa{
    constructor(description){
        this.descreve = description
    }

    descreverTarefa(){
        console.log(this.descreve)
    }

    delete(){
        console.log('delete')
    }

    edit(){
        console.log('edit')
    }

    done(){
        console.log('done')
    }
}