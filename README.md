# Formação JavaScript Completo 

Anotações e exercícios do curso **Formação JAVASCRIPT Completo Do Zero ao Avançado**, do professor **André Iacono**, na **Udemy**.

**Autor das anotações:** Jean Lucas Spósito Bortolon

O projeto funciona como um caderno de estudos: o arquivo `script.js` reúne, em ordem, os exemplos vistos nas aulas, com comentários explicativos para consulta e revisão futura.

## Estrutura do projeto

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | Página base. Mostra um título e carrega o `script.js` e o `style.css`. |
| `script.js` | Todo o conteúdo do curso, dividido em seções numeradas e comentadas. |
| `style.css` | Estilo mínimo da página (título `h1` em vermelho). |

## Como executar

Não precisa instalar nada.

1. Abra o `index.html` no navegador (clique duplo no arquivo).
2. Clique em **OK** no alerta que aparece.
3. Aperte **F12** e abra a aba **Console** para ver os resultados.

## Conteúdo do `script.js`

1. `alert`
2. `console` (`log`, `error`, `warn`, `group`)
3. Comentários e atalhos úteis do editor
4. Variáveis (`var`, `let`, `const`) e regras de nomes
5. Tipos de dados (primitivos e de referência)
6. Tipagem dinâmica x estática
7. Conversões / casting (`parseInt`, `parseFloat`, `Number`, `String`, `Boolean`, `toString`)
8. Operadores aritméticos
9. Operadores de atribuição
10. Operadores de comparação
11. Coerção de tipo
12. Concatenação de strings
13. Template literals
14. Métodos de string
15. Métodos de número
16. Métodos matemáticos (`Math`)
17. Objetos (introdução)
18. Data e hora (`Date` e `Intl.DateTimeFormat`)
19. Arrays (métodos, aninhamento, `concat`, `Array.of`, `Array.from`, `flat`, `Set`)
20. `if`, `else`, `else if`
21. `if` com operadores lógicos (`&&`, `||`), aninhamento e operador `!`
22. Precedência dos operadores
23. `switch` e `case`
24. Objetos e pares chave/valor (dicionários, objetos aninhados, listas em objetos)
25. Funções (parâmetros, `return`, parâmetros padrão, `rest`, funções aninhadas, declaration, expression e arrow function)
26. Truthy e Falsy
27. Operador ternário

## Como o `script.js` está organizado

- **Código comentado**: quando o professor apagava um exemplo para escrever outro, o exemplo anterior foi mantido comentado, para poder ser revisado e testado de novo.
- **`// -> valor`**: indica o que aparece no console.
- **ATENÇÃO**: marca armadilhas, erros ou detalhes que merecem cuidado.
- **Complemento**: explicação extra que não foi dita na aula, adicionada depois para facilitar o estudo.

## Correções feitas nos exemplos

Cinco trechos tinham erros e foram corrigidos. Cada um tem um comentário **CORRIGIDO** no `script.js` explicando o que era e o que mudou:

- **Seção 21**: a condição do restaurante agora usa parênteses: `familia >= 4 && (terça || quarta)`.
- **Seção 23**: no `switch` dos dias da semana, o `case 4` agora é `'Qua'`, e os dias seguintes foram ajustados (o dia 7 é `'Sab'`).
- **Seção 25**: na Mega-Sena, o `+1` foi para dentro do `console.log`, e os números agora saem de 1 a 60.
- **Seção 26**: o `if` agora testa `texto3`.
- **Seção 27**: `avaliacao2` agora é declarada com `let`.

## Tecnologias

- HTML
- CSS
- JavaScript (executado direto no navegador)
