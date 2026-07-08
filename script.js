// Days Counter
const startDate = new Date("July 7, 2026 00:00:00");

function updateCounter() {
    const today = new Date();

    const diff = today - startDate;

    if (diff < 0) {
        document.getElementById("days").innerHTML =
        "Our journey begins on ❤️ 7 July 2026";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("days").innerHTML =
    days + " Beautiful Days Together ❤️";
}

updateCounter();


// Floating Hearts
const container = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (15 + Math.random()*25) + "px";

    heart.style.animationDuration = (5 + Math.random()*5) + "s";

    container.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,300);


// Fade Animation
const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([
{opacity:0,transform:"translateY(60px)"},
{opacity:1,transform:"translateY(0px)"}
],{
duration:1000,
fill:"forwards"
});

}

});

});

sections.forEach(section=>{
observer.observe(section);
});
