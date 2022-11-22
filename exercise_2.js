/*
Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
определяет, является ли оно простым, и выводит простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. 
Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.
*/

function isNumberSimple(num){
    if ((num>1000) || (isNaN(num)) || (typeof(num)!=="number")) {
        return `Данные неверны`;
    }
    else {
        if ((num==0) || (num==1)) {
            return `Число ${num} не простое`;
        }
        else {
            for (i=2;i<num;i++){
                if (num % i === 0){
                    return `Число ${num} не простое`;
                }
            }
        }
        return `Число ${num} простое`;
    }

}

console.log(isNumberSimple(1)       );
console.log(isNumberSimple(2)       );
console.log(isNumberSimple(4)       );
console.log(isNumberSimple("a")     );
console.log(isNumberSimple(1000)    );
console.log(isNumberSimple(1001)    );
console.log(isNumberSimple(NaN)     );