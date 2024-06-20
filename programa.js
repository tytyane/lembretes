const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lembretes = []
exibirMenu()

function exibirMenu(){
    console.log(`
    Menu:
    1. Adicionar lembrete
    2. Listar lembretes
    3. Editar lembrete
    4. Marcar lembrete como concluído
    5. Sair
    `)

    rl.question('Escolha uma opção: ', (opcao) => {
        switch(opcao){
            case '1':
                adicionarLembrete()
                break
            case '2':
                listarLembrete()
                break
            case '3':
                editarLembrete()
                break
            case '4':
                lembreteConcluido()
                break
            case '5':
                rl.close
                break
            default:
                console.log('Opção inválida, tente novamente')
                exibirMenu()
                break
        }
    })
}