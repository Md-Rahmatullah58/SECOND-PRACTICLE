// WAP to input three number and find greater among three:
const prompt = require("prompt-sync")({sigint: true}); 


let p = 500, q = 300, r = 800;

if(p>q){
    if(p>r){
        console.log(p,"is  greatest among",p," ,",q,"&",r);
    }
    else{
        console.log(r,"is  greatest among",p," ,",q,"&",r);
    }
}
else{
    if(p>r){
        console.log(p,"is  greatest among",p," ,",q,"&",r);
    }
    else{
        console.log(r,"is  greatest among",p," ,",q,"&",r);
    }
}