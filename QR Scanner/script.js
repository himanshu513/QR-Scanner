const qrcode = document.querySelector("#qr-code");
const code_img = document.querySelector("#code-img");
const loader = document.querySelector("#loading");

qrcode.addEventListener("click",()=>{
    loader.style.display ="block";

    code_img.onload =function(){
        loader.style.display = "none";
    }

    let input = document.querySelector("#input").ariaValueMax;
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
    code_img.src = api;
});