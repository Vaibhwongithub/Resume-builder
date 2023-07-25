

function addNewWEField(){
    // console.log("ADD");
    let newNode =  document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");
    newNode.setAttribute("rows",3);
    
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
 function addNewAQField(){
    let newNode =  document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");
    newNode.setAttribute("rows",3);
    
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
 }

 function generateCV(){
    let nameFieldO = document.getElementById('nameField').value;
    document.getElementById('nameT1').innerHTML=nameFieldO;
    //direct
    document.getElementById('nameT2').innerHTML=nameFieldO;
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value
    document.getElementById('linkedT').innerHTML = document.getElementById('linkdenField').value
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value

    document.getElementById('objectiveT').innerHTML= document.getElementById('objectiveField').value

   //we
   let wes = document.getElementsByClassName('wefield')
   let str=''

   for(let e of wes){
    str = str+`<li> ${e.value} </li>`;
   }
   document.getElementById('weT').innerHTML =  str;

   let aqs = document.getElementsByClassName('eqfield')
   let str1=''

   for(let e of aqs){
    str1 = str1+`<li> ${e.value} </li>`;
   }
   document.getElementById('aqT').innerHTML =  str;
   
   document.getElementById('cv-form').style.display='none'
   document.getElementById('cv-template').style.display='block'
   document.querySelector('body').style.backgroundColor='#3E6D9C';
   document.classList.add('hrT')

 }

 function printCV(){
    Window.print();
 }

 function openform(){
   
 }
























