const entete = document.querySelector("header");

window.addEventListener("scroll", function () {
  entete.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};


let button =document.getElementById("button");
let form =document.getElementById("form");
let message =document.getElementById("message");
let link =document.getElementById("link");
 let nombreEssaie = 10;
//recuperer la reponse

//gerene un nombre aleatoire compris entre 1 et 100;
let secretNumber = Math.floor(Math.random() * 100) + 1;


function test()
{
   const valeur = document.getElementById("input");
    if(valeur.value != "")
     {
        if(valeur.value < secretNumber)
        {

        message.textContent = "Le nombre entre est plus grand que " + valeur.value +"!";
        message.style.color="#999";
        }else if(valeur.value > secretNumber)
        {
            message.textContent = "Le nombre entre est plus  petit que"  + valeur.value  +"!";
            message.style.color="#999";
        }
       if(nombreEssaie == 0)
       {
        message.textContent = "Vous avez perdu, il fallait trouver"+ secretNumber +"!";
        message.style.color="red";
        form.style.display="none";
        link.style.display="flex";
       }
       nombreEssaie --;

       if(valeur.value == secretNumber)
        {
            message.textContent = "Vous avez gagner , le nombre est  "+ secretNumber +"!";
            message.style.color="green";
          
            form.style.display="none";
            link.style.display="flex";
        }
    }
        else
        {
            message.textContent = "Le champ est vide !";
            message.style.color="red";
        }


}





