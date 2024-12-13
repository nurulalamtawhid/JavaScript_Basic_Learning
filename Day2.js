/* DATA Types */

/* 
Js has 2 types of Data

    Js case-sensitive

1. Primitive Type- is defined by JS .(js owned datatype)
        => Numbers(0,1,1.5,2.9,-9)
        =>Strings('hurrah')
        =>Boolean(True & False)
        =>Null(sometimes we have to store at least something we use null as a something
                Its a special type of data used as a absence of an object )
        =>Undefined(A variable which is declared but not stored gives us undefined)
2.Object Type(Non primitive type)- user defined data type creates from primitive data type
        => Array
        =>Object
        => Function
*/
var Nomber = 23.4;

const name = 'Tawhid';

let x= true;
let y = false;
let c = null;
let d;/* gives undefined result */
console.log(x)

/* Data Type conversion */

/*
    If you wannna convert any kind of data type to others
    just use that data type before then wrap it with the ones which 
    will converted


*/

var a = 10;
var b = 0x7234;// 0x use for declaring hexadecimal numbers
let u = 0o756; //0o use for octal
console.log(String(a));//this is a way by using constructor 
console.log(a.toString());
console.log(Boolean(a));
console.log(Boolean(Infinity));
console.log(u);

/*If js - convert a infintiy to Bollean its return true 
 Bcz js compiler imagine that infinity is a number .
 For somecases js compiler compile some conversion by its own, but sometimes we have to 
 change the default conversion for our needs.
 from heres come the idea of truthy &  falsey value

 the list of falsey valuees are - empty string,zero,null,nan,undefined.
 Rest are the truthy values which compiles.
*/