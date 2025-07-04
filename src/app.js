import "bootstrap";
import "./style.css";



let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
// let hacks = ['com', 'net','us', 'io'];


// for(let i=0; i<pronoun.length;i++){
//   for(let j=0; i<adj.length;j++){
//     for(let k=0; i<noun.length; k++){
//       let domainConcatenado=pronoun[i]+adj[j]+noun[k];
//       console.log()
//     }
//   }
// }


window.onload = function () {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domainConcatenado = pronoun[i] + adj[j] + noun[k]+".com";
        console.log(domainConcatenado)
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
