const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lembretes = []
exibirMenu()

function exibirMenu(){
    console.log(`
  -*- Lembretes -*-
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

function adicionarLembrete() {
    rl.question('Digite o seu lembrete aqui: ', (lembrete) => {
        rl.question('Qual é o prazo para fazer isso? ', (prazo) => {
            lembretes.push({ nome: lembrete, prazo: prazo
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
      console.log(`${index + 1}. Nome: ${lembrete.nome}.
   Prazo: ${lembrete.prazo}.`)
      })
    }
    exibirMenu()
  }

function editar() {
    rl.question ('digite o numero do elemento que voçe deseja listar:', (numero) => {
        rl.question('digite a novo lembrete 1:',(lembrete1) =>{
            rl.question('digite um novo nome 2:',(lembrete2) =>{
                rl.question('digite a no 3:',(lembrete3) =>{
                    vetor[ numero-1] ={
                        nome1,
                        nome2,
                        
                    }
                    console.log('editado com sucesso!')
                    exibirMenu()
                })
            }) 
        })

    })
}

    

    

    
 













        
