function myCalc() {
    
    let again = true;
    
    while( again === true){
        let x,y,oper,result;
        x=prompt("Введите первое числое", '');
        oper=prompt("Введите операцию ' + ' либо ' - ' либо ' * ' либо ' / ' ", '');
        y=prompt("Введите второе число", '');

        if (oper==="+"){
            result=Number(x)+Number(y);
        }
        else if (oper==="-"){
            result=Number(x)-Number(y);
        }
        else if (oper==="*"){
            result=Number(x)*Number(y);
        }
        else if (oper==="/"){
        result=Number(x)/Number(y);
        }
        
        alert ('Результат :' + ' ' + result);

        again = confirm('Посчитать еще?');
    }
}

myCalc();