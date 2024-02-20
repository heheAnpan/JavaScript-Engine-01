export class Collisions {
	constructor() {
		this.collisions = [];
	}

    clearCollisions() {
        this.collisions = [];
    }

    narrowPhazeDetection(objects) {
        for(let i=0; i<objects.length; i++) { 
            for(let j=0; i<objects.length; j++) {
                if(j>i) {
                    //detect collisions
                    //circle collisions
                    if(objects[i].shape instanceof Circle &&
                        objects[j].shape instanceof Circle) {
                        this.detectCollisionCircleCircle(objects[i], objects[j]);    
                    }
                    //rectangle collisions
                }
            } 
        }
    }

    detectCollisionCircleCircle(o1, o2) {
        
    }
}