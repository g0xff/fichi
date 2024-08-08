var f = (y) => a*y;
const eb = 1000000000;

console.time('var for time')
{
     // var в этом случае работает в 10 раз медленей чем let.
     // потомучто учитывается глобальное обращение к функции f(), где используется a
     // Скорей всего идет заранее просчет, и если потом эту функцию вызывать, то возможно это будет быстрее
    var a = 0;
    for(var j = 0; j < eb; j++){
        a = j**2 * 0.1;
    }
}
console.timeEnd('var for time');
console.time('let for time')
{
    let a = 0;
    for(let j = 0; j < eb; j++){
        a = j**2 * 0.1;
    }
}
console.timeEnd('let for time');
