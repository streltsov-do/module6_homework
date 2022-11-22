// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// Используйте Arrow Function синтаксис.

const powerFORi = (x,n) => {
    let outV = 1;
    if (n>0) {
        for (let i=0; i<n; i++) {
            outV = outV*x;
        }
    } else if (n===0){
        outV=1;
    } else {
        // let nPos=-1*n;
        let nPos=Math.abs(n);
        for (let i=0; i<nPos; i++) {
            outV = outV*x;
        }
        outV = 1/outV;
    }
    console.log(`FORi: ${x}^${n} = ${outV}`);
}

const powerMATH = (x,n) => {
    console.log(`Math: ${x}^${n} = ${Math.pow(x,n)}`);
    console.log(`----------------------------------`);
}

powerFORi(1,2);
powerMATH(1,2);
powerFORi(2,3);
powerMATH(2,3);
powerFORi(2,4);
powerMATH(2,4);
powerFORi(2,-1);
powerMATH(2,-1);
powerFORi(2,-2);
powerMATH(2,-2);
powerFORi(3,0);
powerMATH(3,0);
powerFORi(3,-1);
powerMATH(3,-1);
powerFORi(3,2);
powerMATH(3,2);
powerFORi(3,3);
powerMATH(3,3);
powerFORi(3,4);
powerMATH(3,4);
powerFORi(5,-1);
powerMATH(5,-1);
powerFORi(5,3);
powerMATH(5,3);