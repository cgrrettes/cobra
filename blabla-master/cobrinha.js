const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const size = 30;

const cobra = [
    { x: 200, y: 200 },
    { x: 230, y: 200 }
];
let direcao, loop

const desenhocobra = () => {
    ctx.fillStyle = "#aaa";
    cobra.forEach((position, index) => {
        if (index === cobra.length - 1) {
            ctx.fillStyle = "white";
        }
        ctx.fillRect(position.x, position.y, size, size);
    });
};

const movercobra = () => {
    if (!direcao) return;
    const head = cobra[cobra.length - 1];
    cobra.shift();
    if (direcao === "right") {
        cobra.push({ x: head.x + size, y: head.y });
    }
    if (direcao === "left") {
        cobra.push({ x: head.x - size, y: head.y });
    }
    if (direcao === "down") {
        cobra.push({ x: head.x, y: head.y + size });
    }
    if (direcao === "up") {
        cobra.push({ x: head.x, y: head.y - size });
    }
};

const gameLoop = () => {
    ctx.clearRect(loop);
    movercobra();
    desenhocobra();

   
   let loop = setTimeout(() => {
        gameLoop();
    }, 300);
};

gameLoop();
