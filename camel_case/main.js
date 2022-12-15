
// let phrase = prompt("Entre votre phrase");
 let phrase = "entre rrRRRRotre Phrase";


//  let arr = [];
//   arr.map((el,i) => {
//     if (i === 0) {
//       el.toUpperCase();
//     }else {
//       el.toLowerCase();
//     }
//   })


function firstLetter( str) {
    
    let arr = str.split('');
     console.log(arr);
   let newArr = arr.map((el,i) => {
      if (i === 0) {
        return el.toUpperCase();
      }else {
       return  el.toLowerCase();
      }
    })
     console.log(newArr);

   let text = newArr.join("");
    //  console.log(arr);
    console.log(text);
    return text;
}



console.log(firstLetter(phrase));

function camelCase(str){
  let arr = str.split(' ');
  let newArr = arr.map((el,i) => {
     if (i === 0) {
       return el.toLowerCase();
     }else {
        return firstLetter(el);
        
      
     }
   })
   console.log(newArr);

  let text = newArr.join("");
    console.log(arr);
  // console.log(text);
   return text;
}

console.log(camelCase(phrase));
