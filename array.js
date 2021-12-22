let fruits=["Apple","Banana","Grapes"];
console.log(fruits.length);
console.log(fruits);
// fruits.pop();
let i;
for(i in fruits)
{
    console.log(i + " "+fruits[i]);
}
for(i of fruits)
{
    console.log(i );
}
// fruits.shift();
