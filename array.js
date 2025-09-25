var times = ['São Paulo', 'Corinthians', 'Palmeiras', 'Santos'];

console.log(times.length); // 4
console.log(times[0]); // São Paulo
console.table(times);
times[1] = 'Grêmio';

console.table(times);


var myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
var myArray = myData.split(','); // transforma string em array
myArray; // ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle']

myArray.length;
myArray[0]; // Manchester
myArray[1]; // London
myArray[myArray.length - 1]; // Carlisle

console.log("-------------------");


var arr = ["este é o primeiro elemento", "este é o segundo elemento"];
console.log(arr[0]); // exibe 'este é o primeiro elemento'
console.log(arr[1]); // exibe 'este é o segundo elemento'
console.log(arr[arr.length - 1]); // exibe 'este é o segundo elemento'

let myBox = ['hello', 1, 2, 3, true, 'hi'];

/*toString()
 método toString() em JavaScript converte um array em uma string separada por vírgulas.*/

let cores = ['verde', 'amarelo', 'azul'];
console.log(cores.toString()); // verde,amarelo,azul

/*join()
O método join() em JavaScript combina todos os elementos do array em uma string.
Ele é semelhante ao método toString(), mas, aqui, você pode especificar o separador em vez da vírgula padrão.*/

let cores2 = ['verde', 'amarelo', 'azul'];
console.log(cores.join('-')); // verde-amarelo-azul

/*concat
Este método combina dois arrays ou adiciona mais itens a um array e depois retorna um novo array.*/

let numerosIniciais = [1, 2, 3];
let numerosFinais = [4, 5, 6];
let unidos = numerosIniciais.concat(numerosFinais);
console.log(unidos); // [1, 2, 3, 4, 5, 6]

/*push()
Este método adiciona itens ao final de um array e altera o array original.*/

let navegadores = ['chrome', 'firefox', 'edge'];
navegadores.push('safari', 'opera mini');
console.log(navegadores); 
// ["chrome", "firefox", "edge", "safari", "opera mini"]

/*pop()
Este método remove o último item de um array e o retorna.*/

let navegadores2 = ['chrome', 'firefox', 'edge'];
navegadores.pop(); // "edge"
console.log(navegadores); // ["chrome", "firefox"]

/*shift()
Este método remove o primeiro item de um array e o retorna.*/

let navegadore3 = ['chrome', 'firefox', 'edge'];
navegadores.shift(); // "chrome"
console.log(navegadores); // ["firefox", "edge"]

/*unshift()
Este método adiciona um ou vários itens ao início de um array e altera o array original.*/

let navegadores4 = ['chrome', 'firefox', 'edge'];
navegadores.unshift('safari');
console.log(navegadores); //  ["safari", "chrome", "firefox", "edge"]

/*splice()
Este método altera um array, adicionando, removendo e inserindo elementos.
- indice aqui é o ponto inicial de remoção de elementos do array
- contagemDeExclusao é o número de elementos a serem excluídos do array a partir do índice
- elemento1, ..., elementoN são os elementos a serem adicionados*/

let linguagens = ['C', 'Java', 'Python', 'JavaScript'];
linguagens.splice(0, 1, 'C#', 'Ruby'); 
console.log(linguagens); 
// ["C#", "Ruby", "Java", "Python", "JavaScript"]