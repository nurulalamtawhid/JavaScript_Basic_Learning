//Ternary operator how it works


/*ternary operator is a short form of if else condition.

   var x = condition ? 'expressionIfTrue' : 'expressionIfFalse'
   


   js uses Lexicographic system to compare to string,
   In that cases small 'z' is bigger than captial 'Z'.
   & the less powerful letter is 'A'.


*/

let number = 5;
const result =  number%2===0? 'even': 'Odd';/* if(number%2===0){console.log('even')}else{console.log('odd')} */
console.log(result);

let sum =0;
for(let i =0;i<=100;i++){
    if(i%2===0){
       let result = (sum+i);
       // console.log(sum + '+' + i + '='+ result);
        sum+=i;
    }
}

//nested loops

let n = 5;

for(i=1;i<=n;i++){
    let keep = '';
    for(j=1;j<=i;j++){
        keep+=j;

    }
    console.log(keep);
}
let star = 5;
 for(i =1;i<=star;i++){
    let str ='';
    for(j=0;j<=star-1-i;j++){
        str+= ' ' ;
    }
    for(k=0;k<i;k++){
        str+= '*';
    }
    
    console.log(str)

 }

 let rows = 5;
 for (let i = 0; i < rows; i++) { //row selection loop (outer loop)
    let output = '';
    for (let j =0; j < rows - i; j++) //col
        {output += ' ';}
    for (let k = 0; k <= i; k++) {
        output += '* '};
    console.log(output);  
} 

/// string

let str = 'kopa samsu';
let length = 0;
while(true){
    if(str.charAt(length)=== '')
    {
          break;
    }
    else{
        length++;
    }     
}

console.log(length)