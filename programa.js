const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lembretes = []
let feito
exibirMenu()

function exibirMenu(){
    console.log(`
    - Lembretes -
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
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente')
                exibirMenu()
                break
        }
    })
}

function adicionarLembrete() {
    rl.question('Digite o seu lembrete aqui: ', (lembrete) => {
        rl.question('Qual é o prazo para fazer isso? ', (prazo) => {
            lembretes.push({ nome: lembrete, prazo: prazo, concluido: false
            })
                console.log('Lembrete adicionado com sucesso!')
                exibirMenu()
        })
    })
}
        
function listarLembrete() {
    if (lembretes.length === 0) {
      console.log('Nenhum lembrete cadastrado.')
    } else {
      console.log('Lista de lembretes: ')
      lembretes.forEach((lembrete, index) => {
        if(lembrete.concluido == false){
            feito = 'Não'
        } else if (lembrete.concluido == true){
            feito = 'Sim'
        }
      console.log(`${index + 1}. Nome: ${lembrete.nome}.
   Prazo: ${lembrete.prazo}.
   Concluido: ${feito}`)
      })
    }
    exibirMenu()
  }

function editarLembrete() {
    if(lembretes.length == 0){
        console.log("Nenhum lembrete cadastrado")
        exibirMenu()
    } else {
        console.log('Lista de lembretes: ')
        lembretes.forEach((lembrete, index) => {
            console.log(`${index + 1}. ${lembrete.nome}`)
        })
        rl.question ('Digite o numero do lembrete que deseja editar: ', (numero) => {
            if(numero > 0 && numero <= lembretes.length){
                rl.question('Digite a novo lembrete: ', (nome) => {
                    rl.question('Digite o novo prazo: ', (prazo) => {
                        lembretes[numero - 1] = {
                            nome,
                            prazo,
                        }
                        console.log('Editado com sucesso!')
                        exibirMenu()
                    })
                })
            } else {
                console.log('Número inválido, tente novamente.')
                exibirMenu()
            }
        })
    }
}

function lembreteConcluido() {
    if(lembretes.length == 0){
        console.log("Nenhum lembrete cadastrado")
        exibirMenu()
    } else {
        console.log('Lista de lembretes: ')
        lembretes.forEach((lembrete, index) => {
            console.log(`${index + 1}. ${lembrete.nome}`)
        })
        rl.question('Digite o número do lembrete concluído: ', (numero) => {
            if(numero > 0 && numero <= lembretes.length){
                    lembretes[numero - 1].concluido = true
                    console.log('Lembrete concluído com sucesso!')
                    exibirMenu()
            } else {
                console.log('Número inválido, tente novamente.')
                exibirMenu()
            }
        })
    }
}