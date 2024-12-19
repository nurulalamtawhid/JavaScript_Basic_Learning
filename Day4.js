let rows = 5;
 for (let i = 0; i < rows; i++) { //row selection loop (outer loop)
    let output ='';
    for (let j =0; j < rows - i; j++) //col
        {output +=' ';}
    for (let k = 0; k <(2*i-1); k++) {
        output += '*'};
    console.log(output);  
} 