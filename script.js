const idade = 13
if (idade >= 13) {
  if (idade < 18) {
    console.log('Seu dependente já pode ter um cartão vinculado ao seu')
  } else {
    console.log('Consulte outras opções do Labank - Caso 1')
  }
} else {
  console.log('Consulte outras opções do Labank - Caso 2')
}

if (idade >= 13 && idade < 18) {
  console.log('Seu dependente já pode ter um cartão vinculado ao seu')
} else {
  console.log('Consulte outras opções do Labank')
}

idade === 13
  ? console.log('A idade do dependente é 13 anos e já pode ter um cartão')
  : console.log('Verifique as opções possíveis')

const opcaoEscolhida = 4
switch (opcaoEscolhida) {
  case 1:
    console.log('A opção desejada é Fácil')
    break
  case 2:
    console.log('A opção desejada é Black')
    break
  case 3:
    console.log('A opção desejada é Platinum')
    break
  case 4:
    console.log('A opção desejada é MasterCard Gold')
  default:
    console.log('Escolha uma das quatro opções válidas')
    break
}

/* const valorEscolha = prompt('Digite um valor qualquer:')
if (valorEscolha % 2 == 0) {
  if (valorEscolha % 3 == 0) {
    console.log('o valor digitado é divisivel por 2 e por 3')
  } else {
    console.log('o valor digitado não é divisivel por 2 e por 3')
  }
} else {
  console.log('o valor digitado não é divisivel por 2 e por 3')
} */

const valorEscolha = Number(prompt('Digite um valor qualquer:'))
valorEscolha == 30
  ? console.log('UFA, acertei o numero surpresa!')
  : console.log('[NUMERO SURPRESA] Não foi desta vez! :(')

if (valorEscolha % 2 == 0 && valorEscolha % 3 == 0) {
  console.log('o valor digitado é divisivel por 2 e por 3')

  switch (valorEscolha) {
    case 6:
      console.log('O número escolhido foi 6')
      break
    case 12:
      console.log('O número escolhido foi 12')
      break
    case 18:
      console.log('O número escolhido foi 18')
      break
    case 24:
      console.log('O número escolhido foi 24')
      bre
    case 30:
      console.log('O número escolhido foi 30')
      break
    default:
      console.log('O número escolhido foi menor que 6 ou maior do que 30')
  }
} else {
  console.log('o valor digitado não é divisivel por 2 e por 3')
}
