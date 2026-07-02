/* ==========================
   INTRO SCREEN
========================== */

window.onload = function () {

    setTimeout(() => {

        document.getElementById("intro").style.display = "none";

    },3000);

};


/* ==========================
   PAGE SLIDE
========================== */

const pages = document.querySelectorAll(".page");

function showPage(id){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}


/* ==========================
   TYPING EFFECT
========================== */

const text="Creative Web Developer";

let i=0;

function typing(){

const title=document.querySelector("#home h3");

if(title){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,100);

}

}

}

window.addEventListener("load",typing);


/* ==========================
   CARD HOVER EFFECT
========================== */

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

let x=e.offsetX;

let y=e.offsetY;

card.style.transform=
`rotateY(${(x-150)/20}deg)
 rotateX(${-(y-80)/20}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});


/* ==========================
   BUTTON CLICK EFFECT
========================== */

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},150);

});

});
/* ==========================
   CUSTOM GLOW CURSOR
========================== */

const cursor = document.createElement("div");
cursor.className = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/* ==========================
   SCROLL TO TOP
========================== */

const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ==========================
   FADE ANIMATION
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

});

document.querySelectorAll(".page").forEach(page => {

    observer.observe(page);

});

/* ==========================
   LIVE CLOCK
========================== */

const clock = document.createElement("div");

clock.id = "clock";

document.body.appendChild(clock);

setInterval(() => {

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();

},1000);

/* ==========================
   RANDOM GLOW
========================== */

setInterval(()=>{

document.querySelectorAll(".card").forEach(card=>{

card.style.boxShadow=

`0 0 ${20+Math.random()*30}px cyan`;

});

},1500);
document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("formSuccess").style.display = "none";

    if (name === "") {
        document.getElementById("nameError").textContent = "Please enter your name.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Please enter your email.";
        isValid = false;
    }

    if (phone === "") {
        document.getElementById("phoneError").textContent = "Please enter your phone number.";
        isValid = false;
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Please enter your message.";
        isValid = false;
    }

    // ❌ Validation fail ஆனால் இங்கேயே நிறுத்து
    if (!isValid) {
        return;
    }

    // ✅ எல்லாம் சரி இருந்தா மட்டும் Success
    document.getElementById("formSuccess").textContent =
        "🎉 Thank you! Your message has been sent successfully.";
    document.getElementById("formSuccess").style.display = "block";

    document.getElementById("contactForm").reset();

});