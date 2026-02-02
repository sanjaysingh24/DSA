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
sumofnnumber(5)
