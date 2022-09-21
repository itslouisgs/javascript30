const spacingInput = document.getElementById("spacing");
const blurInput = document.getElementById("blur");
const baseColorInput = document.getElementById("base");

const changeProperty = element =>{
    document.documentElement.style.setProperty(`--${element.id}`, `${element.value}${element.dataset.sizing ? element.dataset.sizing : ""}`);
}

window.onload = ()=>{
    document.querySelectorAll("input").forEach(element => {
        changeProperty(element);
        element.oninput = ()=> changeProperty(element);
    });
};