function getFirstSelector(selector) {
  const el = document.querySelector(selector);
  return el;
}

function nestedTarget() {
  const el= document.querySelector('#nested .target');
  return el;
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  
}
}

  
function deepestChild(){
let node=document.getElementById('grand-node');  
let nextnode=node.children[0];
while (nextnode) {
node=nextnode;
nextnode=node.children[0]; 
}
return node;
}
