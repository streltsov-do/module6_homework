// Напишите функцию, которая принимает два числа. 
// Каждую секунду необходимо выводить в консоль, 
// начиная от первого и заканчивая вторым. 
// Используйте setInterval.


function logNums(numFirst,numSecond){
    // let idInt;
    if (    
            (isNaN(numFirst))
        ||  (isNaN(numSecond))
        ||  (typeof(numFirst)!=="number")
        ||  (typeof(numSecond)!=="number") 
    ) {
        console.log(`ERROR - [${numFirst}] or [${numSecond}] not number`);
    } else if (numFirst>numSecond){
        console.log("ERROR - numFirst>numSecond");
        console.log(`ERROR - numFirst=[${numFirst}] must be <= numSecond=[${numSecond}]`);
    // + undefined case 
    } else {
        let i=numFirst;
        const idInt = setInterval(
            function(){      
                console.log(i);
                if (i<numSecond){
                    i++;
                } else {
                    clearInterval(idInt);
                //   alert("alo");
                }    
            },
            1000,
            i
        );
    }
}

logNums(1,5);
logNums(2,1);
logNums(2,"a");