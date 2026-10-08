/* ============================================================
   CURSO DE JAVASCRIPT (André Iacono - Udemy) - Anotações
   ------------------------------------------------------------
   Este arquivo é o meu "caderno" de estudos.

   Convenções usadas aqui:
   - Quando o professor apaga um exemplo para escrever outro, eu
     comento o exemplo anterior em vez de apagar, para poder
     revisar no futuro.
   - "// -> valor" mostra o que aparece no console.
   - "ATENÇÃO"     = armadilha, erro ou detalhe que merece cuidado.
   - "Complemento" = explicação extra que NÃO foi dita na aula,
                     adicionada depois só para facilitar o estudo.

   Como estudar: abra o index.html no navegador, aperte F12 e
   vá para a aba "Console". Comente/descomente trechos e
   compare o resultado com o que está escrito aqui.
   ============================================================ */


/* ============================================================
   1. ALERT
   Cria uma janela de alerta na abertura da página HTML.
   Enquanto você não clicar em "OK", a página fica travada.
   ============================================================ */
alert('Ola mundo')


/* ============================================================
   2. CONSOLE
   Objeto com vários métodos para enviar mensagens ao console
   (acessível pelo DevTools do navegador - tecla F12).
   ============================================================ */
console.log('Jean')      // mensagem comum
console.error('550')     // mensagem de erro (aparece em vermelho)
console.warn('Erro 300') // mensagem de aviso (aparece em amarelo)

// console.group agrupa mensagens relacionadas (até o groupEnd)
console.group('App')
console.log('Jean')
console.error('550')
console.warn('Erro 300')
console.groupEnd()


/* ============================================================
   3. COMENTÁRIOS e ATALHOS ÚTEIS
   ------------------------------------------------------------
   // comentário de linha (vale só até o fim da linha)
   /* ... * / comentário de bloco (várias linhas) - o fechamento
   real é sem espaço; aqui está separado para não encerrar este
   próprio comentário.

   Atalhos (editor VS Code):
   Ctrl+K e Ctrl+S           -> abrir a configuração dos atalhos
   Ctrl + /                  -> comentar/descomentar linha
   Alt+Shift+Seta pra baixo  -> duplica uma linha/conteúdo
   ============================================================ */


/* ============================================================
   4. VARIÁVEIS (var / let / const)
   ------------------------------------------------------------
   Variável = "caixa" com nome que guarda um valor.

   - var:   forma antiga de declarar
   - let:   forma atual, o valor pode ser alterado
   - const: cria uma constante, o valor não pode ser reatribuído

   Regras de nome de variável:
   - pode ter letras e números
   - pode começar com underline (_) e cifrão ($)
   - não pode ter espaço no nome
   - não pode começar com número
   - não pode usar palavras reservadas (ex: let let)
   - por boas práticas, usamos camelCase (ex: firstName)
   - maiúscula e minúscula fazem diferença: idade != Idade
   ============================================================ */
let myName = 'João' // valor inicial
myName = 'Jean'     // reatribuindo novo valor (só é possível com let/var)
let lastName = 'Bortolon'
let age = 31
console.log(myName, lastName, age) // -> Jean Bortolon 31

// Declarando duas variáveis na mesma linha (separadas por vírgula)
let myName2 = 'Jean', lastName2 = 'Bortolon'
console.log(myName2, lastName2)

// const: cria constante, não é possível atribuir novo valor depois
const calcTax = 0.7
// calcTax = 0.5 // ERRO! não se pode reatribuir uma const
console.log(calcTax)
// obs: também não é possível declarar uma const sem valor
// (const x  -> dá erro, pois é obrigatório já iniciar com um valor)


/* ============================================================
   5. TIPOS DE DADOS (Data Types)
   Primitivos x Referência
   O operador typeof mostra o tipo de um valor.
   ============================================================ */

// --- Primitivos ---

// String -> texto (aspas simples ou duplas)
let meuNome = 'Jean'
console.log(meuNome, typeof meuNome) // -> Jean string

// Number -> inteiros e decimais (decimal usa PONTO, não vírgula)
let num1 = 10
let num2 = 5.5
console.log(num1, num2, typeof num2, typeof num1) // -> 10 5.5 number number

// Boolean -> só pode ser true ou false
let myState1 = true
let myState2 = false
console.log(myState1, typeof myState1, myState2, typeof myState2)

// Null -> valor "vazio" atribuído INTENCIONALMENTE
let address = null
console.log(address, typeof address) // -> null object
// no exemplo acima o endereço começa vazio e será preenchido depois
// ATENÇÃO: typeof null retorna 'object'. É uma peculiaridade
// conhecida da linguagem (null NÃO é um objeto).

// Undefined -> variável declarada mas sem valor atribuído ainda
let color
console.log(color, typeof color) // -> undefined undefined

// Symbol -> valor único, usado geralmente como chave "escondida" de objeto
let id = Symbol('id')
let meuObjeto = {
    [id]: 123456, // os colchetes usam o valor da variável id como chave
    nome: "Jean"
}
console.log(meuObjeto[id]) // -> 123456

// --- Referência ---

// Arrays -> Listas
let numbers = [0, 1, 2, 3, 4]
console.log(numbers, typeof numbers) // -> [0,1,2,3,4] 'object'
// (typeof de array também retorna 'object')

// Funções
function printOi() {
    console.log('Oi')
}
console.log(printOi, typeof printOi) // mostra o código da função e 'function'

// Date -> data e hora
let now = new Date()
console.log(now)

/*
Comportamento na Atribuição e Passagem
- Dados Primitivos: quando você atribui ou passa tipos primitivos,
  é feita uma CÓPIA do valor. Se alterar o valor depois, a cópia
  original não é afetada.
- Dados de Referência: ao atribuir ou passar objetos, arrays ou
  funções, você está passando uma REFERÊNCIA ao objeto original.
  Se modificar o objeto através de uma das referências, todas as
  outras referências verão a mudança.
*/


/* ============================================================
   6. TIPAGEM: Dynamic x Static
   ============================================================ */

// Dynamic -> JavaScript entende o tipo do dado automaticamente
let primeiroNome = 'Jean'
let idade = 31
/* não precisei escrever let primeiroNome(string) -
   a linguagem descobre sozinha que é string */

// Static -> é preciso informar o tipo explicitamente
// Linguagens: C, C++, Java, TypeScript
/* Exemplo em TypeScript:
let ultimoNome: string = 'Bortolon'
*/


/* ============================================================
   7. CONVERSÕES / CASTING
   Convertendo uma string numérica '35.2' para outros tipos.
   Cada bloco abaixo é uma forma diferente de converter - deixei
   comentados porque todos usam a mesma variável "Idade" e o
   professor foi testando um de cada vez.
   (Para testar: descomente UM bloco e comente o Boolean do final.)
   ============================================================ */
let Idade = '35.2'
console.log(Idade, typeof Idade) // -> 35.2 string

// parseInt -> analisa a string e retorna a parte inteira
//Idade = parseInt(Idade)         // -> 35
//console.log(Idade, typeof Idade)

// parseFloat -> analisa a string e retorna o valor fracionário
//Idade = parseFloat(Idade)       // -> 35.2
//console.log(Idade, typeof Idade)

// Operador Unário (+) -> converte pra número (resultado: 35.2)
//Idade = +Idade
//console.log(Idade, typeof Idade)

// Number() -> converte para número (seja int ou float)
//Idade = Number(Idade)           // -> 35.2
//console.log(Idade, typeof Idade)

// Number para String -> método toString()
// ATENÇÃO: aqui o professor usou a variável "age" (que vale 31),
// e não a "Idade" - por isso o resultado seria '31', não '35.2'.
// Idade = age.toString()
// console.log(Idade, typeof Idade)

// Convertendo via construtor String()
//Idade = String(Idade)
//console.log(Idade, typeof Idade)

// Boolean() -> converte um valor para true/false
// Number 0 = false  |  Number diferente de 0 = true
// String vazia '' = false  |  String com qualquer conteúdo = true
// (veja mais em "Truthy e Falsy", no final do arquivo)
Idade = Boolean(Idade)            // '35.2' tem conteúdo -> true
console.log(Idade, typeof Idade)  // -> true boolean


/* ============================================================
   8. OPERADORES ARITMÉTICOS
   Exemplo do professor (deixei comentado pois usa "total",
   "num1" e "num2" que já foram usados acima com outro valor).
   ------------------------------------------------------------
// let total = 5 + 6 // Adição
// total = 6 - 2      // Subtração
// total = 6 * 2      // Multiplicação
// total = 6 / 2      // Divisão
//
// let num1 = 6
// let num2 = 6
// let total = num1 + num2
// console.log(total)
// console.log(num1 + num2)
   ============================================================ */

/* ------------------------------------------------------------
   Operadores Aritméticos complexos
   (também comentado por reutilizar "total")
   ------------------------------------------------------------
// let total = 3 % 3 // Resto da Divisão -> 0
// total = 4 % 3      // Resto da Divisão -> 1
//
// total = 5
// total++ // Incremento de +1 [ vai dar 6 ]
//
// total-- // Decremento de -1
//
// total = 2 ** 3 // exponencial de 2 elevado a 3 -> 8
   ------------------------------------------------------------ */


/* ============================================================
   9. OPERADORES DE ATRIBUIÇÃO
   Atalhos que fazem a conta e já guardam o resultado na
   própria variável (total += 5 equivale a total = total + 5).
   ============================================================ */
let total = 10
total += 5  // soma +5 ao valor anterior -> 15
total -= 5  // subtrai -5 -> 10
total *= 5  // multiplica por 5 -> 50
total /= 5  // divide por 5 -> 10
total %= 4  // resto da divisão por 4 -> 2
total **= 3 // eleva ao cubo -> 8

console.log(total) // -> 8


/* ============================================================
   10. OPERADORES DE COMPARAÇÃO
   Sempre retornam um Boolean (true ou false).
   Dica: prefira === e !== (estritos) para evitar surpresas.
   ============================================================ */

// Igualdade Solta (==) -> compara só o valor, converte tipo se precisar
console.log(3 == 3) // true

// Igualdade Estrita (===) -> compara valor E tipo
console.log(3 === '3') // false, tipos diferentes (number x string)

// Desigualdade Solta (!=) -> compara só o valor
console.log(3 != 3) // false, são iguais em valor

// Desigualdade Estrita (!==) -> compara valor e tipo
console.log(3 !== '3') // true, tipos diferentes

// Maior que
console.log(3 > 5) // false

// Menor que
console.log(3 < 5) // true

// Maior ou Igual
console.log(3 >= 5) // false

// Menor ou Igual
console.log(3 <= 5) // true


/* ============================================================
   11. COERÇÃO DE TIPO (conversão automática do JavaScript)
   O JS converte tipos sozinho, de acordo com o operador usado.
   Exemplo simples do professor, comentado pois reaproveitava "total".
   ------------------------------------------------------------
// let total
// total = 3 + 5
// console.log(total, typeof total) // -> 8 number
//
// total = 3 + '5'
// console.log(total, typeof total)
// // retorna '35' como string: com + e uma string, o JS
// // converte tudo pra string e CONCATENA
   ============================================================ */

total = 3 + Number('5') // convertendo a string pra número antes de somar -> 8

total = '5' - '4' // o operador "-" força conversão pra Number -> 1
total = '5' * '4' // "*" também força conversão pra Number -> 20
total = '5' / '4' // "/" também força conversão pra Number -> 1.25

console.log(total, typeof total) // -> 1.25 number (só mostra o último valor)


/* ============================================================
   12. CONCATENAÇÃO DE STRINGS
   Concatenar = juntar textos usando o operador +
   ============================================================ */
let meuPrimeiroNome = 'Jean'
let meuUltimoNome = 'Bortolon'

let fullName = meuPrimeiroNome + ' ' + meuUltimoNome // ' ' = espaço entre os nomes
console.log(fullName) // -> Jean Bortolon


/* ============================================================
   13. TEMPLATE LITERALS
   ============================================================ */

// Do jeito antigo (concatenação): trabalhoso e fácil de errar
console.log(
   'Olá, meu nome é ' +
   meuPrimeiroNome + ' ' + meuUltimoNome + ' e tenho ' + idade +
   ' anos de idade'
)

/* Devido à complexidade acima, podemos utilizar template literals,
introduzidos no ES6. Obtemos o mesmo conteúdo de cima, porém com
mais facilidade na escrita.
- usam crase (`) em vez de aspas
- variáveis entram dentro de ${ } */

console.log(`Olá, meu nome é ${meuPrimeiroNome} ${meuUltimoNome} e tenho ${idade} anos de idade `)


/* ============================================================
   14. STRING METHODS ou MÉTODOS EM STRINGS
   Métodos = funções que pertencem a um tipo de dado.
   Para acessar: nome da variável + ponto + método().
   Strings são imutáveis: os métodos devolvem um NOVO valor e
   não alteram a variável original.
   ============================================================ */
let texto = 'Estou aprendendo JavaScript'
let texto2 = ' Jean Bortolon  '
console.log(texto)

// charAt -> o índice começa em 0 (E=0, s=1, t=2, o=3, u=4)
texto.charAt(4) // retorna 'u', mas como não está em console.log, nada aparece

console.log(texto.charAt(0))                // -> E
console.log(texto.includes('JavaScript'))   // verifica se existe a palavra no texto -> true
console.log(texto.indexOf('aprendendo'))    // posição onde a palavra começa -> 6
console.log(texto.slice(0,5))               // extrai uma parte da string entre os índices (o último não entra) e retorna uma nova, sem modificar a original -> Estou
console.log(texto.toUpperCase())            // converte pra maiúsculo
console.log(texto.toLowerCase())            // converte pra minúsculo
console.log(texto2.trim())                  // remove espaços em branco no início e fim da string -> 'Jean Bortolon'
console.log(texto.repeat(5))                // repete o texto pelo número de vezes
console.log(texto.replace('Estou', 'Eu estou')) // troca uma palavra por outra -> Eu estou aprendendo JavaScript


/* ============================================================
   15. MÉTODOS EM NÚMEROS ou NUMBER METHODS
   ============================================================ */

let num3 = 3.3785
console.log(num3)
console.log(num3.toFixed(1)) // define a quantidade de dígitos após o ponto decimal e arredonda -> '3.4' (retorna uma STRING)
console.log(num3.toString(2)) // converte número pra string e ainda posso passar a base; ex: 2 = binário


/* ============================================================
   16. MÉTODOS MATEMÁTICOS (Math)
   ============================================================ */
let num20 = 2.5

console.log(Math.round(num20)) // arredonda para o inteiro mais próximo -> 3
console.log(Math.ceil(num20))  // ceil sempre arredonda pra cima -> 3
console.log(Math.floor(num20)) // floor sempre arredonda pra baixo -> 2
console.log(Math.sqrt(4))      // raiz quadrada -> 2
console.log(Math.pow(num20,3)) // número elevado a uma potência -> 15.625
console.log(Math.abs(-2))      // valor absoluto (tira o sinal negativo) -> 2
console.log(Math.random())     // gera um número aleatório entre 0 (inclusive) e 1 (exclusivo)
console.log(Math.random() *10 + 1) // gera um decimal aleatório entre 1 e 11 (exclusivo)
// ATENÇÃO: para um número INTEIRO de 1 a 10, o correto é:
// Math.floor(Math.random() * 10) + 1


/* ============================================================
   17. OBJETOS ( MÚLTIPLOS VALORES )
   Objeto = guarda vários valores relacionados, cada um com uma
   chave (nome) e um valor: { chave: valor, ... }
   (veja mais detalhes na seção 24)
   ============================================================ */
let carro = {
   carName: 'Cybertruck',
   carRange: 340,
   carMaxSpeed: 112,
   carHorsePower: 600
}

console.log(carro)


/* ============================================================
   18. DATA E HORA ( MÉTODOS DO DATE )
   ============================================================ */
let agora = new Date() // cria o objeto de data e hora atual
console.log(agora)

// Ordem dos argumentos: ano, mês, dia, hora, minuto, segundo
let dataEspecifica = new Date(2024,0,20,10,35,0) // janeiro é mês 0 (os meses vão de 0 a 11)
console.log(dataEspecifica)

let dataStr = new Date('2026/09/29 10:35:00')
console.log(dataStr) // Data e hora a partir de uma string

let data = new Date()
console.log(data.getDate())        // dia do mês (1 a 31)
console.log(data.getDay())         // dia da semana (0 = domingo até 6 = sábado)
console.log(data.getMonth())       // mês, de 0 a 11 (0 = janeiro)
console.log(data.getUTCFullYear()) // traz o ano (4 dígitos), no fuso UTC
//data.setDate()     // configura uma data alterando a original
//data.setMonth()
//data.setFullYear()

/* Criando um contador de dias para uma data específica.
Início, Fim, e a diferença de dias entre essas datas. */

let data_inicio = new Date('2023/10/15')
let data_fim = new Date('2023/11/15')
let totalDias = data_fim - data_inicio // subtrair duas datas resulta em MILISSEGUNDOS
console.log(totalDias) // -> 2678400000
// 1000 = ms -> segundos | 3600 = segundos -> horas | 24 = horas -> dias
console.log(totalDias / (1000 * 3600 * 24)) // -> 31 dias

// Formatando a data de acordo com a localização (idioma/país)
// Brasil: DD/MM/AAAA   |   EUA: MM/DD/AAAA
// Os códigos de idioma ('pt-BR', 'en-US'...) seguem a ISO Language Code Table

let data10
// data10 está undefined, então o format() usa a data/hora atual
data10 = Intl.DateTimeFormat('pt-BR').format(data10) // formata a data conforme o local escolhido
console.log(data10) // -> ex: 08/10/2026


/* ============================================================
   19. ARRAYS (Listas)
   Guardam vários valores em ordem. O índice começa em 0.
   ============================================================ */
let carrinhoDeCompras = ['Agua', 'Arroz', 'Carne', 'Feijão'] // índice começa em 0
console.log(carrinhoDeCompras)
console.log(carrinhoDeCompras[2]) // -> Carne
console.log(carrinhoDeCompras[0]) // -> Agua
console.log(`A minha comida favorita é ${carrinhoDeCompras[1]} e ${carrinhoDeCompras[3]}`)

let cart = ['Agua', 'Arroz', 'Carne']
let myNumbers = [10, 20, 33, 40, 5, 13, true, false] // uma array pode misturar tipos
console.log(myNumbers[3])  // -> 40
console.log(myNumbers)
console.log(myNumbers[0] + myNumbers[2]) // operações com números da lista -> 43
console.log(cart)
cart[1] = 'Laranja' // alterando o valor de um índice da lista
console.log(cart)   // -> ['Agua', 'Laranja', 'Carne']


/* Desafio: criar uma solução que concatena o terceiro item da lista
logo abaixo ao texto no console */

let petShop = ['Dogs', 'Cats', 'Birds', 'Hamsters']

// prints 'In the second cage we have: Birds'
console.log(`In the second cage we have: ${petShop[2]}`)
// ATENÇÃO: no console.log abaixo existe um console.log DENTRO do outro.
// O de dentro imprime o texto; como ele não retorna nada, o de fora
// imprime "undefined". Foi só um teste, o normal é um console.log só.
console.log(console.log('In the second cage we have: ' + petShop[2])
)

// --- Arrays -> Métodos ---

let carrinho = [ 'Agua', 'Arroz', 'Carne', 'Feijão']
let numeros = [10, 20, 33, 40, 5, 13, true]
//cart[4] = 'Suco'
console.log(cart.length) // traz o tamanho da array (quantidade de itens) -> 3

// Acompanhe como o "carrinho" muda a cada linha:
carrinho.push('Suco')     // adiciona ao final da lista   -> Agua, Arroz, Carne, Feijão, Suco
carrinho.pop()            // remove o último item da lista -> Agua, Arroz, Carne, Feijão
carrinho.shift()          // remove o primeiro item da array -> Arroz, Carne, Feijão
carrinho.unshift('Suco')  // adiciona o item no início da lista -> Suco, Arroz, Carne, Feijão
carrinho.sort()           // organiza em ordem alfabética a lista -> Arroz, Carne, Feijão, Suco
console.log(carrinho)

let y, y1, y2, y3, y4, y5, y6
y = carrinho.includes('Agua') // verifica se existe o elemento na lista e retorna true ou false
console.log(y)                // -> false (o 'Agua' foi removido pelo shift() acima)

y1 = carrinho.indexOf('Feijão') // retorna o índice do elemento -> 2 (retorna -1 se não existir)

// slice(início, fim) -> COPIA um pedaço da array; o índice final NÃO entra e a original NÃO muda
y2 = carrinho.slice(1,3) // -> ['Carne', 'Feijão']

// splice(início, quantidade) -> REMOVE itens da própria array e devolve os removidos
// ATENÇÃO: diferente do slice, o splice ALTERA a array original!
y3 = carrinho.splice(1,2) // y3 = ['Carne', 'Feijão'] | carrinho agora = ['Arroz', 'Suco']

// Chains com métodos: método + método + método (cada um age sobre o resultado do anterior)

// Como o splice acima já alterou o carrinho (['Arroz','Suco']),
// slice(1,3) pega só ['Suco']; sort e reverse não mudam nada com 1 item.
y4 = carrinho.slice(1,3).sort().reverse() // fatia, ordena e inverte criando a chain
console.log(y4) // -> ['Suco']

// --- Aninhamento de arrays (Nesting): uma array dentro de outra ---

let carrinho2 = [ 'Agua', 'Arroz', 'Carne', 'Feijão']
let numeros2 = [10, 20, 33, 40, 5, 13, true]
let carrinho3 = [ 'Agua', 'Arroz', 'Carne', 'Feijão']
carrinho2.push(numeros2) // adiciona a lista numeros2 como UM item do carrinho2
console.log(carrinho2)   // a segunda lista fica em um índice próprio [4]

y5 = carrinho2[4][1] // [4] = a lista de números, [1] = segundo item dela -> 20
console.log(y5)

// Outra maneira de aninhamento ou Nesting

let carrinhoNumeros = [ carrinho3, numeros2]
console.log(carrinhoNumeros) // agora a lista tem índices 0 e 1, que são as duas listas, e cada elemento delas tem seu próprio índice
console.log(carrinhoNumeros[0][1]) // -> Arroz

// --- Arrays (Concatenate) ---
// Não quero uma array dentro da outra (Nesting), quero tudo em uma lista só.
// Para isso uso concat.

let concatCartNumbers
concatCartNumbers = carrinho3.concat(numeros2) // junta carrinho3 + numeros2 em UMA array nova
console.log(concatCartNumbers)

// --- Métodos Estáticos da Array (Static Methods) ---
// São chamados direto em "Array." e não em uma variável

let num11 = 10
let num12 = 20
let num13 = 30
let allNumbers = Array.of(num11, num12, num13) // cria uma array a partir dos valores passados -> [10, 20, 30]
console.log(allNumbers)

let novoArray
novoArray = Array.from('122') // cria uma array a partir do conteúdo passado: '122' vira ['1','2','2']
console.log(novoArray)

// --- Nested Arrays (array dentro de outra) e flat ---
let numbers2 = [10,11,12,[20,21,22],30,31,32,[40,41,42]]
console.log(numbers2)

// flat -> "achata" a array, colocando todos os itens em uma lista só
let novoY
novoY = numbers2.flat() // -> [10,11,12,20,21,22,30,31,32,40,41,42]
console.log(novoY)

/* ORGANIZANDO ARRAYS: criar uma solução onde as listas num14 e num15
são mescladas, corrigidas (sem repetidos) e organizadas */

let num14 = [10,20,30,40,50]
let num15 = [90,80,70,60,50]
//Resultado -> print [10,20,30,40,50,60,70,80,90]

// 1) concat junta as listas  2) sort ordena  3) new Set remove repetidos
// 4) [...] (spread) transforma o Set de volta em uma array
// Complemento: o sort() padrão ordena como TEXTO. Aqui funciona porque todos
// os números têm 2 dígitos; com [5, 10, 1] daria [1, 10, 5].
let num16 =[...new Set(num14.concat(num15).sort())]
console.log(num16) // -> [10,20,30,40,50,60,70,80,90]


/* ============================================================
   20. IF e ELSE e ELSE IF (Se, Senão) - Fluxo do código
   O código decide qual caminho seguir conforme uma condição.
   ============================================================ */

/*if (condição_1){
   // Vai executar se a condição for verdadeira
} else if (condição_2){
   // Vai executar se a condição1 for false e a 2 verdadeira
 } else {
   // Vai executar se todas anteriores forem false
}*/

let hour = 19
if (hour <= 12){
   console.log('Bom dia')
} else if (hour <= 18){
   console.log('Boa tarde')
} else {
   console.log('Boa noite') // -> executa este, pois 19 não é <= 12 nem <= 18
}
// Executa apenas a primeira condição verdadeira; as demais são ignoradas.

/*
Chaves dentro do IF ELSE não são obrigatórias quando há só
uma instrução. Podemos utilizar Shorthand if.
if (hour <= 12) console.log('Bom dia')
else if (hour <= 18) console.log('Boa tarde')
else console.log('Boa noite')
*/

/*
Desafio: se a pontuação for 90 ou mais, será exibido
"Excelente!". Se for 75 ou mais (mas menos que 90),
será "Muito bom!". Para pontuações inferiores
a 75, será "Você pode melhorar."
*/

let nota = 90

if (nota >= 90) {
   console.log('Excelente!') // -> executa este
}
else if (nota >= 75) {
   console.log('Muito bom!')
}
else {
   console.log('Você pode melhorar')
}


/* ============================================================
   21. IF e ELSE com Operadores Lógicos (AND (&&) e OR (||))
   &&  (E)  -> só é true se TODAS as condições forem true
   ||  (OU) -> é true se PELO MENOS UMA condição for true
   ============================================================ */

// Criar um site de evento online. Idade mínima 18, registro = true

let idadeParticipante = 25
let registroOnline = true

if (idadeParticipante >= 18 && registroOnline) // as DUAS precisam ser verdadeiras
   {
     console.log('Bem vindo ao evento')
   }
else
   {
     console.log('Você precisa ter no min 18 anos e estar registrado')
   }

/* App onde o candidato vai receber um desconto se
for estudante ou tiver um cupom de desconto */

let estudante = false
let cupom = true

if (estudante || cupom) // basta UMA ser verdadeira (cupom é true)
   {
      console.log('Você tem acesso a promoção')
   }
else
   {
      console.log('Você precisa ser estudante ou ter um cupom para a promoção')
   }

/* App de restaurante que oferece desconto para famílias
maiores que 4 e venham para almoçar na terça e quarta.
*/

let membrosFamilia = 3
let diaDaSemana = 'ter'

// CORRIGIDO: na aula estava escrito sem parênteses:
//   membrosFamilia >= 4 && diaDaSemana === 'ter' || diaDaSemana === 'qua'
// Como o && tem PRECEDÊNCIA sobre o ||, o JavaScript lia assim:
//   (membrosFamilia >= 4 && diaDaSemana === 'ter') || diaDaSemana === 'qua'
// Ou seja: se o dia fosse 'qua', ganhava desconto MESMO com família pequena.
// Os parênteses abaixo garantem "família >= 4 E (terça OU quarta)".
// (veja a seção de Precedência dos Operadores logo adiante)
if (membrosFamilia >= 4 && (diaDaSemana === 'ter' || diaDaSemana === 'qua'))
{
   console.log('Parabéns ! A sua familia ganhou um desconto especial')
}
else{
   console.log('Desculpe, a oferta não se aplica a sua familia') // -> executa este
}

// --- Nesting com IF e ELSE (aninhamento: if dentro de if) ---

/* App Análise de jogo
nivel = true
>= 90 - Pontuação Ouro
>= 75 - Pontuação Prata
< 75 - Pontuação Bronze
nivel = false
   "Você tem que terminar o nivel primeiro"
*/

let nivelCompleto = false
let pontuacaoJogador = 70

if (nivelCompleto) {
   // este bloco só é avaliado se o nível estiver completo
   if (pontuacaoJogador >= 90){
      console.log('Medalha de Ouro')
   }
   else if (pontuacaoJogador >= 75){
      console.log('Medalha de Prata')
   }
   else{
      console.log('Medalha de Bronze')
   }
}
else{
   console.log('Você precisa finalizar o nível') // -> executa este (nivelCompleto = false)
   }

/*
Desafio: criar um sistema de autenticação
que verifica várias condições antes de
permitir acesso.

let usuarioValido
let senhaCorreta
let temPermissao

Mensagens:
Acesso permitido !
Acesso negado. Usuário sem permissão.
Senha incorreta. Tente novamente.
Usuário não encontrado.
*/

let usuarioValido = true
let senhaCorreta = true
let temPermissao = true

// Ordem lógica: 1º existe o usuário? 2º a senha está certa? 3º tem permissão?
if (usuarioValido){
   if (senhaCorreta){
      if (temPermissao){
         console.log('Acesso permitido!') // -> executa este
      } else{
         console.log('Usuário sem permissão')
      }
   } else {
      console.log('Senha incorreta. Tente novamente')
   }
} else {
   console.log('Usuário não encontrado.')
}

// --- IF ELSE com o NOT Operator (!) ---
// O ! inverte o valor: !true = false e !false = true

let num21 = -10

if (!(num21>0)){ // num21>0 é false; o ! inverte pra true
   console.log('Favor digitar um numero positivo')
}

let usuarioLogado = false

if (!usuarioLogado){ // !false = true
    console.log('Você precisa estar logado')
}

let listaProdutos = []

// array vazia tem length 0; 0 é falsy, e !0 vira true
if (!listaProdutos.length) {
   console.log('A Lista está vazia')
}

/* Desafio: cria uma solução que verifica se o
usuário escolheu a cor 'Azul'. Caso seja
outra cor, utilize o NOT para retornar a
mensagem: "Não temos essa cor!" */

let corProduto = 'Vermelho'

// !== é o "NOT" aplicado à igualdade estrita: "diferente de"
if (corProduto !== 'Azul'){
   console.log('Não temos essa cor!')
}


/* ============================================================
   22. PRECEDÊNCIA DOS OPERADORES
   Define qual operação o JavaScript resolve primeiro.
   Para consultar a tabela completa: pesquisar
   "javascript operator precedence" (MDN Web Docs).
   Em caso de dúvida, use parênteses ( ) para deixar explícito.
   ============================================================ */
let resultado = 3 + 4 * 5 // multiplicação primeiro: 3 + (4*5) = 23
console.log(resultado)

let num5 = 5

// && é resolvido antes do || (aqui os parênteses só deixam isso explícito)
if (num5 == 5 || (num5 === 3 && num5 > 8))
{
   console.log('Resultado correto') // -> executa este
} else {
   console.log('Errado')
}


/* ============================================================
   23. SWITCH E CASE
   Alternativa ao if/else if quando comparamos UMA variável com
   vários valores possíveis.
   - break: encerra o switch (sem ele o código "cai" para o
            próximo case e continua executando)
   - default: executa se nenhum case combinar (equivale ao else)
   ============================================================ */
// Dia 1 Domingo
   let weekDay = 7

// CORRIGIDO: antes o case 4 estava 'Ter' (repetido do case 3), o que
// deslocava os dias seguintes (o dia 7 imprimia 'Sex' em vez de 'Sab').
// Sequência correta: 1 Domingo, 2 Seg, 3 Ter, 4 Qua, 5 Qui, 6 Sex, 7 Sab.
switch (weekDay){
      case 1:
         console.log('Domingo')
         break
      case 2:
         console.log('Seg')
         break
      case 3:
         console.log('Ter')
         break
      case 4:
         console.log('Qua')
         break
      case 5:
         console.log('Qui')
         break
      case 6:
         console.log('Sex')
         break
      case 7:
         console.log('Sab')
         break
      default:
         console.log('Número inválido')
}

/* Nível do usuário no nosso sistema*/

let nivelUsuário = 'convidado' // opções: admin, editor, convidado

switch (nivelUsuário){
   case 'admin':
      console.log('Acesso Total')
      break
   case 'editor':
      console.log('Acesso de edição'
      )
      break
   case 'convidado':
      console.log('Acesso limitado') // -> executa este
      break
   default:
      console.log('Usuário desconhecido')
}

/* Desafio: criar uma solução com o "Switch" que retorne:
hora <12 : Bom dia
hora <18 : Boa tarde
hora >= 18: Boa noite
A hora deve ser coletada do sistema local.
*/

let currentDate = new Date()
let currentHour = currentDate.getHours() // hora atual do computador (0 a 23)

// switch(true): cada case é uma condição; executa o primeiro que der true
switch(true){
   case currentHour < 12:
      console.log('Bom dia')
   break

   case currentHour < 18:
      console.log('Boa tarde')
   break

   default:
      console.log('Boa noite')
}


/* ============================================================
   24. OBJECTS AND KEY PAIRS ( DICIONÁRIOS )
   Estrutura chave: valor. As chaves nomeiam cada informação.
   ============================================================ */
let dadosSono = {
   "totalSleep": 7.5,
   "timeInBed": 9.7,
   "sleepEfficiency": 86,
   "restingHeartRate": 59,
   "sleepScore": 84,
}

console.log('Qualidade do Sono:', dadosSono)
console.log(dadosSono.sleepEfficiency) // acessando pela chave com . (dot notation) -> 86
console.log(dadosSono['totalSleep'])   // acessando pelo nome da chave entre colchetes e aspas -> 7.5

// Adicionando/alterando dados no dicionário

dadosSono.remSleep = '2h15m' // adiciona a chave remSleep (ela não existia)
dadosSono['sleepScore'] = 90 // escreve um novo valor na chave sleepScore (já existia)
dadosSono.sleepScore++       // incrementa mais um no sleepScore -> 91
console.log(dadosSono)

// Objetos aninhados: dicionários que contêm dicionários

let dadosSono2 = {
   "totalSleep": 7.5,
   "timeInBed": 9.7,
   "sleepEfficiency": 86,
   "restingHeartRate": {'maxHeartRate': 81,'minHeartRate': 59},
   "sleepScore": 84,
}

console.log(dadosSono2)

// acessando elementos específicos de duas formas diferentes
console.log(dadosSono2.restingHeartRate.maxHeartRate)         // -> 81
console.log(dadosSono2['restingHeartRate']['minHeartRate'])   // -> 59

// Adicionando listas nos objetos

let dadosSono3 = {
   "totalSleep": 7.5,
   "timeInBed": 9.7,
   "sleepEfficiency": 86,
   "restingHeartRate": {'maxHeartRate': 81,'minHeartRate': 59},
   "sleepScore": 84,
   "notes":['Coffe','30 minutes reading'],
}
console.log(dadosSono3)

// Acessando dados da lista de anotações - notes

console.log(dadosSono3.notes[0]) // primeiro item da lista -> 'Coffe' (exatamente como foi escrito)

/* Desafio - Objetos, Nested, Arrays */

/* Criando o dicionário de biblioteca de livros que
contém listas de objetos por categorias, como por
exemplo ficção científica */

let biblioteca = {
   ficcaoCientifica:[ // cada categoria é uma array de objetos (um objeto por livro)
      {
         titulo: 'Duna',
         autor: 'Frank Herbet',
         anoPublicacao: 1965,
      },
      {
         titulo: 'Fundação',
         autor: 'Isaac Asimov',
         anoPublicacao: 1951,
      } ],
      fantasia:[
      {
         titulo: 'O Senhor dos Anéis',
         autor: 'J.R.R. Tolkien',
         anoPublicacao: 1954,
      },
      {
         titulo: 'Harry Potter',
         autor: 'J.K Rowling',
         anoPublicacao: 1997,
      },
   ]
}

console.log(biblioteca)
// Para acessar um dado específico, encadeia-se chave e índice, ex:
// biblioteca.fantasia[0].titulo  ->  'O Senhor dos Anéis'


/* ============================================================
   25. FUNÇÕES ! - Organização do código em blocos reutilizáveis
   Função = bloco de código com nome, que só executa quando é
   "chamada" (invocada). Evita repetir o mesmo código.
   ============================================================ */
               // Parâmetros = "variáveis" que a função recebe
function mySum(num1,num2){
      console.log(num1+num2) // conteúdo da função
   }
// Chamando ou Invoking a function
mySum(10,4) // os valores passados são os argumentos -> 14

function mySub(num1,num2){ // posso repetir o nome dos parâmetros
   console.log(num1-num2)  // sem interferir em outras funções
}                          // os parâmetros fazem parte desse bloco específico
mySub(5,2) // -> 3

function myMult(num1,num2){
   return num1 * num2 // return devolve o valor para quem chamou a função
   // nada é executado após o return, ele deve ser o último
}

let multResult = myMult(2,5) // atribui o valor retornado da função na variável
console.log(multResult)      // -> 10
// diferença: mySum só MOSTRA o resultado; myMult DEVOLVE o resultado
// (e por isso ele pode ser guardado em uma variável).

// --- Functions - Parâmetros Padrão (Default Parameters) ---
// Define um desconto fixo como parâmetro padrão, para não quebrar
// o cálculo caso o valor não seja passado na chamada
function calcularTotal(preco,desconto = 0.1){
   let valorDesconto = preco * desconto
   let totalCompra = preco - valorDesconto
   return totalCompra
}

console.log(calcularTotal(100,0.1)) // -> 90
// calcularTotal(100) também daria 90, pois usaria o desconto padrão (0.1)

// --- Functions - Parâmetros Rest (...) ---
// Representa uma quantidade indefinida de argumentos, reunidos em uma array

function listaCompras(...itens){
   console.log(itens) // -> ['Pao', 'Carne', 'Milho']
   console.log('Itens da minha lista: ' + itens) // a array vira texto separado por vírgula
}

listaCompras('Pao','Carne','Milho')

// --- Functions - Nested (função dentro de função) ---
// A função interna (mensagem) enxerga o parâmetro da externa (nome)

function saudacao(nome){
   function mensagem(){
      console.log('Olá ' + nome)
   }
   return mensagem()
}

saudacao('Jean') // -> Olá Jean

// Exemplo 2
// Criar um APP para gerar os 6 números da Mega-Sena

// CORRIGIDO: antes o "+1" estava FORA do console.log (depois do parêntese),
// então não afetava o número exibido: saíam valores de 0 a 59.
// Agora o +1 está dentro: Math.floor(Math.random()*60) dá 0 a 59, e o +1 leva para 1 a 60.
// Obs: os 6 números podem repetir; este exemplo não impede isso.
function gerarNumero(){
   console.log(Math.floor(Math.random()*60) + 1)
}

// rodarSorteio chama gerarNumero 6 vezes
function rodarSorteio(){
gerarNumero()
gerarNumero()
gerarNumero()
gerarNumero()
gerarNumero()
gerarNumero()
}
rodarSorteio()

// --- Formas de criar funções ---

// Function Declaration (associa o nome)
// Complemento: pode ser chamada ANTES de ser declarada no arquivo (hoisting).
function somar(num1, num2){
   return num1 + num2
}
console.log(somar(10,20)) // -> 30

// Function Expression (função guardada em uma variável)
// Complemento: só pode ser chamada DEPOIS da linha em que foi criada.
const subtrair = function(num1,num2){
   return num1 - num2
}
console.log(subtrair(20,10)) // -> 10

// Arrow Function - não preciso escrever "function"; entre os parâmetros
// e o corpo vai a flecha (=>), e depois dela o que será retornado

const myMult2 = (num1,num2) => num1 * num2 // Implicit Return (sem chaves e sem a palavra return)
console.log(myMult2(3,5)) // -> 15

// Arrow Function sem o implicit return (com chaves, o return é obrigatório)

const myMult3 = (num1,num2) =>{
   console.log('Valor da Multiplicação abaixo:')
   return num1*num2
}
console.log(myMult3(4,2)) // -> imprime a frase e depois 8


/* ============================================================
   26. TRUTHY e FALSY
   Em um if, o JavaScript converte qualquer valor para
   true (Truthy) ou false (Falsy).
   ============================================================ */

let texto3 = 'Jean' // Truthy - existe um valor
// let texto = '' // Falsy - não existe um valor

// CORRIGIDO: antes o if testava "texto" (da seção 14), e não a "texto3"
// criada acima. O resultado era o mesmo, mas agora testa a variável certa.
if (texto3){
   console.log('Existe um texto')
} else{
   console.log('Não existe um texto')
}

// Falsy: 0, null, undefined, NaN e '' (string vazia)
// Complemento: false também é falsy, claro.
// Qualquer outro valor é Truthy, inclusive uma string com só um espaço.


/* ============================================================
   27. OPERADOR TERNÁRIO (IF ELSE de 1 linha)
   Sintaxe: condição ? valor_se_true : valor_se_false
   ============================================================ */

let myAge = 31

if (myAge <18){
   console.log('Menor de idade')
} else{
   console.log('Maior de idade')
}

// Fazendo a mesma coisa de cima com operador ternário
// ? faz o papel do if  e  : faz o papel do else
// leitura: "idade menor que 18 ? então Menor, senão Maior"
let MaiorOuMenor = myAge < 18 ? 'Menor' : 'Maior'
console.log(MaiorOuMenor) // -> Maior

// Reduzindo mais ainda e jogando direto no console.log

myAge < 18 ? console.log('Menor de Idade') : console.log('Maior de Idade')

// Desafio Operador Ternário
// Transformar o if/else if/else abaixo em um ternário só

let nota2 = 30
let avaliacao

if (nota2 >= 90){
   avaliacao = 'Excelente'
} else if (nota2 >= 70){
   avaliacao = 'Bom'
} else if (nota2 >= 50){
   avaliacao = 'Satisfatório'
} else{
   avaliacao = 'Insatisfatório'
}
console.log(avaliacao) // -> 'Insatisfatório' (nota2 = 30; com 70 a 89 seria 'Bom')

// Ternários encadeados: cada ":" abre uma nova condição (como o else if)
// CORRIGIDO: antes avaliacao2 era usada sem let/const. O JS aceitava (criava
// uma variável global), mas é má prática, então agora é declarada com let.
let avaliacao2 = nota2 >= 90 ? 'Excelente': nota2 >= 70 ? 'Bom': nota2 >= 50 ? 'Satisfatório' : 'Insatisfatório'
console.log(avaliacao2) // -> 'Insatisfatório'
