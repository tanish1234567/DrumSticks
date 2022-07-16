let len = document.querySelectorAll(".box").length;
for (let index = 0; index < len; index++) {
    document.querySelectorAll(".box")[index].addEventListener("click", () => {
        createASound(document.querySelectorAll(".box")[index].lastElementChild.innerHTML);
    })
}
document.addEventListener("keypress", (event) => {
    createASound(event.key);
})
function createASound(key)
{
    switch (key) {
        case 'z':
            let z = new Audio("sounds/tom-1.mp3");
            z.play();
            break;
        case 'x':
            let x = new Audio("sounds/tom-2.mp3");
            x.play();
            break;
        case 'c':
            let c = new Audio("sounds/tom-3.mp3");
            c.play();
            break;
        case 'v':
            let v = new Audio("sounds/tom-4.mp3");
            v.play();
            break;
        case 'b':
            let b = new Audio("sounds/snare.mp3");
            b.play();
            break;
        case 'n':
            let n = new Audio("sounds/kick-bass.mp3");
            n.play();
            break;
        case 'm':
            let m = new Audio("sounds/crash.mp3");
            m.play();
            break;
        default:
            break;
    }
}