// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    return cats.push('Ralph')
}
function destructivelyPrependCat(){
    return cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(){
   let newCat;
    return newCat = [...cats,'Broom'];
      
}

function prependCat(){
         let copyCat;
         return copyCat= ['Arnold', ...cats];
}
function removeFirstCat(){
    
    return cats.slice(1);
}
function removeLastCat(){
   return cats.slice(0,2);
}