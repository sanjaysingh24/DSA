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
// countnumberindigit(2343)

function printrevers(n){
    let num=0;
    while(n>0){
          let lastdigit = n%10;
          num = num*10+lastdigit;
          n  = Math.floor(n/10);
    }
    console.log(num) //reverse number
}
// printrevers(1234)

function checknumberpalindrom(n){
    let original=n;
    let num=0;
    while(n>0){
        //reverse process
        let lastdigit = n%10;
        num = num*10+lastdigit;
        n= Math.floor(n/10);
    }
    

    if(num===original){
        return true
    }else{
        return false
    }
}

const result = checknumberpalindrom(4334);
// if(result){
//     console.log("number is palindrome")
// }
// else{
//     console.log("number is not palindrome")
// }


//sum of digit of the number
function sumofdigit(number){
    let num=0;
    while(number>0){
        let lastdigit = number%10;
        num+=lastdigit;
        number = Math.floor(number/10);
    }
  console.log(num);
}

// sumofdigit(1234)
function armstrongnumber(number){
    let l = String(number).length;
    if(l<=1){
        console.log("a single number is already there own armstrong number")
        return true
    }
    let sum =0;
    let orginal = number;
    while(number>0){
        let lastdigit = number%10;
        sum+=lastdigit**l;
        number  = Math.floor(number/10);
    }
    if(orginal===sum){
        return true;
    }
    else{
        return false;
    }
}
// const armresult = armstrongnumber(1)
// if(armresult){
//     console.log("given number is armstrongnumber")
// }
// else{
//     console.log("given number is not a armstrong number")
// }


function findperfectnumber(number){
    if(number<=1)
{
    console.log("number can not be negative")
    return;
}   
 let original = number;
    let sum=0;
    let i=1;
    while(i<number){
        if(number%i===0){
        sum+=i

        }
        i++;
    }
    
    if(original===sum){
        console.log("this is a perfect number")
    }
}
// findperfectnumber(0);

function primenumber(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  let i = 3;
  while (i * i <= number) {
    if (number % i === 0) {
      return false;
    }
    i += 2;
  }
  return true;
}

// const resultprime = primenumber(31);
// console.log(resultprime); // false
//print prime number between 1 and 100
function printallprime(n){
if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
 for(let i=3;i*i<=n;i+=2){
    if(n % i ===0){
        return false
    }
    return true
 }
}
// for(let num=1;num<=100;num++){
//     if(printallprime(num)){
//         console.log(num)
//     }
// }

//fibonacci 
function fibonacci(number){
   let i=0;
   let a=0;
   let b=1;
   let next;
   let sum=0
   while(i<number)
   {
    console.log(a)
    next = a+b;
    a=b
    b=next;
    i++
   }
  
   
}
// fibonacci(25);
function sumfibonacci(n){
    let i=0;
    let a=0;
    let b =1;
    let next;
    let sum=0;
    while(i<n){
        console.log(a);
        sum+=a;
        next = a+b;
        a=b;
        b=next;
        i++;
    }
    console.log(sum);
}
// sumfibonacci(5);

//tommmorow level 3
function squares(n){
    let i=1;
    while(i<=n){
        console.log(i*i);
        i++;
    }
}
// squares(10);

function cubes(n){
    let i=1;
    while(i<n){
        console.log(i*i*i);
        i++
    }
}
// cubes(10);

function printandb(a,b){

    while(a<b){
       if(a%7==0){
        console.log(a);
       }
        a++;
    }

}
// printandb(10,70);
//find hcf  of two number using loops
function hcfofgcd(a,b){
    // let r = a%b;
     //let gcd = a%r
   while(b!=0){
    let r = a%b;
    a=b;
    b=r
   }
   return a;
   console.log(a,"greatest common divisor")

}


// hcfofgcd(48,18);

//find the lcm
function findlcm(a,b){
    return (a*b)/hcfofgcd(a,b);
}
const rr = findlcm(12,18);
// console.log(rr)
//print all factors
function factors(n){
    console.time("myFunc");
    let i=1;
    let sum=0;
    while(i<=n){
        if(n%i===0){
            
            sum+=i;
        }
     i++;
    }
    console.log(sum,'sum of the all numbers');
    console.timeEnd("myFunc");
}
// factors(12);
//strong number factorial ka sum ==number

    function strongnumber(number){
        let i=1;
        let sum=1;
        while(number>0){
            sum*=number;
            number--;
        }
        return sum;

    }


    function strongnum(num){
    
        let original = num;
        let sum=0;
        while(num>0){
            let digit  = num%10;
            sum+=strongnumber(digit);
            num = Math.floor(num/10)
      
        }
      if(sum===original){
        console.log("Strong number")
      }
      else{
        console.log("not a strong number")
      }
    }
    strongnum(145)


//strong number means digit of factorial number + sum ===original number

// what is arithmetic progression(a,d)
//print n terms of arithmetic progression(a,p)
function arithmeticprogreesion(n){
    let a = 2
    let d =3
    let ap = a+(n-1)*d //last term of the n the 
    console.log(ap);// last of ap
    for(let i =0;i<n;i++){
        let term = a+i*d;
        console.log(term)
    }
}
arithmeticprogreesion(10);
