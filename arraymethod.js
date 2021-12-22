let fruits=["Apple","Banana","Grapes"];
console.log(fruits.length);
console.log(fruits);
// fruits.pop();
let i;
for(i in fruits)
{
    console.log(i + " "+fruits[i]);
}

 //fruits.shift();
 fruits.unshift("Peru");
 for(i of fruits)
 {
     console.log(i );
 }
 delete fruits[1];
 for(i of fruits)
 {
     console.log(i );
 }
 fruits[1]="chikoo";
 for(i of fruits)
 {
     console.log(i );
 }
fruits.splice(1,2);
console.log("all fruits: " +fruits );
fruits.splice(2,0,"Orange","cherry");
console.log("all fruits: " +fruits );
let citrusFruits=fruits.splice(2,3);
console.log("**all fruits: " +fruits );
console.log("**citrusFruits: " +citrusFruits );
let num1=[1,3,5];
let num2=[2,4];
let newarr=[1,2];
let result=num1.concat(num2,newarr);
console.log(result);