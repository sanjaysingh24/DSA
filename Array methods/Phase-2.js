//looping  & patters(iteration & flow)
// goal master loops, iteration and dry-run thinking
// Topics covered: for, while, nested loops, break/continue, mathematical series
//Target-question 40-50
//level-1 basic looping (introductory)
//1- print numbers from 1 to 10
function printnumber(){
    let i=1;
    while(i<=10){
        console.log(i);
        i++;
    }
}
// printnumber();

//print all the even numbers  between 1 and 100
function allevennumber(){
    let i=1;
    while(i<=100){
        if(i%2==0){
            console.log(i);
        }
        i++
    }
}
// allevennumber();
function alloddunumber(){
    let i=1;
    while(i<=100){
        if(i%2!=0){
            console.log(i)
        }
        i++;
    }
}
// alloddunumber();

//print number  from 10 down to 1
function downnumber(num){
    while(num>0){
        console.log(num);
        num--;
    }

}
// downnumber(10);

function givennumber(n){
    let i=1;
    while(i<=10){
        console.log(`${n} * ${i}   = ${n*i}`);
        i++;
    }
}
// givennumber(2)

//print the sum of first n natural number
function sumofnnumber(n){
    let i;
    let sum=0;
    for(i=1;i<=n;i++){
        sum +=i;
    }
    console.log(sum)

}
//sumofnnumber(5)

//sum of all the even number
function sumofalleven(n){
    let i=0;
    let sum=0;
    while(i<n){
        if(i%2==0){
            sum+=i
        }
        i++;
    }
    console.log(sum)
}
// sumofalleven(5);

function sumofallodd(n){
    let i=0;
    let sum=0;
    while(i<n){
        if(i%2!=0){
            sum+=i
        }
        i++;
    }
    console.log(sum)

}
// sumofallodd(3)

function printfactorial(n){
    
    let fact=1;
    while(n>0){
        fact*=n;
        n--;
    }
    console.log(fact)
}
//printfactorial(3);
// product of the digit number
function productgiven(n){
    let prod=1;
    while(n>0){
        let lastdigit = n%10;
        prod*=lastdigit;
        n = Math.floor(n/10)
        
    }
    console.log(prod);
}
// productgiven(123)

function countnumberindigit(n){
    let count=0;
    while(n>0){
        let lastdigit = n%10;
        count++;
        n=Math.floor(n/10);
    }
    console.log(count);
    
}
countnumberindigit(2343)