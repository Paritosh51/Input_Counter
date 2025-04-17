const input = document.querySelector("input");
const p=document.querySelector("p");
input.addEventListener("keyup", () => {
    p.innerHTML=input.value.length;
})