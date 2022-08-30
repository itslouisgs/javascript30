const canvas = document.getElementById("draw");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let last = {x: 0, y: 0};
let hue = 0;
let isLineWidthIncreasing = true;

const draw = (e) => {
    if (!isDrawing) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // move canvas' cursor into
    ctx.moveTo(last.x, last.y);
    // make a line to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [last.x, last.y] = [e.offsetX, e.offsetY];

    hue >= 360 ? hue = 0 : hue++;

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        isLineWidthIncreasing = !isLineWidthIncreasing;
    }

    isLineWidthIncreasing ? ctx.lineWidth++ : ctx.lineWidth--; 
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [last.x, last.y] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);