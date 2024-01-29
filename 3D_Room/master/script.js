
const h = document.querySelector("#H");
const b = document.body;

let move = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(90vw)
        rotateX(${ y * 40  + 75}deg)
        rotateZ(${ -x * 440  + 45}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener("pointermove", move);