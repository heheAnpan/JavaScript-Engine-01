import {Renderer} from './renderer.js';
import {Circle} from './circle.js';

const canv = document.getElementById("canvas");
//ctx helps w/ drawing
const ctx = canv.getContext("2d");

const renderer = new Renderer(canv, ctx);

//MAIN LOOP
function updateAndDraw() {

    //make objects
    const circle = new Circle({x: 50, y: 60}, 10, 0);
    //draw objects
    renderer.clearFrame();
    renderer.drawCircle(circle, "black");
    //draw a rectangle
    ctx.fillRect(80,40,80,20);
    ctx.strokeStyle = "red";
    ctx.strokeRect(80,40,80,20);
}
let renderInterval = setInterval(updateAndDraw, 1000 / 60);