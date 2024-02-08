import {Vec} from './vector.js';

export class Input {
    constructor(canv, win, dt) {
        this.canv = canv;
        this.window = win;
        this.dt = dt;
        this.inputs = {mouse: {position: new Vec(0, 0), velocity: new Vec(0, 0)}, lclick: false, rclick: false, space: false, touches: 0};
        
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.onContextMenu = this.onContextMenu.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.resizeCanvas = this.resizeCanvas.bind(this);
    }

    //in one method, add all listeners
    //(listen for what,)
    //moudown listens for pressing the button 
    //mouse up listens for releasing the button
    addListeners() {
        this.canv.addEventListener("mousedown", this.mouseDown);
        this.canv.addEventListener("mouseup", this.mouseUp);
        this.canv.addEventListener('contextmenu', this.onContextMenu);
        this.canv.addEventListener('mousemove', this.mouseMove);
        this.window.addEventListener('resize', this.resizeCanvas, false);
    }

    mouseDown(e) {
        if (e.button==0) {
            this.inputs.lclick = true;
            
        } else if (e.button==2) {
            this.inputs.rclick = true;
        }
    }

    mouseUp(e) {
        if (e.button==0) {
            this.inputs.lclick = false;
        } else if (e.button==2) {
            this.inputs.rclick = false;
        }
    }
    
    onContextMenu(e) {
        e.preventDefault();
    }

    mouseMove(e) {
        const x = e.pageX - this.canv.offsetLeft; // calculate the position of the mouse
        const y = e.pageY - this.canv.offsetTop;
        this.inputs.mouse.position.x = x; // store the position of the mouse
        this.inputs.mouse.position.y = y;
    }

    resizeCanvas() {
        this.canv.width = this.window.innerWidth;
        this.canv.height = this.window.innerHeight;
    }
}