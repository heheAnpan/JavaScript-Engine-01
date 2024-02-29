export class Collisions {
    //parameter: variable in a method definition; what goes inside ()

	constructor() {
        //this: keyword that refers to the current instance (a single occurrence of an object) of the class
		//class collision will detect all objects and if they detect collision, they will add it to the list
        this.collisions = [];
	}

    //we want to start with an empty list of collisions every frame
    clearCollisions() {
        this.collisions = [];
    }

    //check only objects that are close enough that may be colliding
    //need an input since we're checking circles
    //logic part
    narrowPhaseDetection(objects) {
        for (let i=0; i<objects.length(); i++) {
            for (let j=0; j<objects.length(); j++) {
                if(j>i){
                    //detect collisions
                    //circle collisions
                    if(objects[i].shape instanceof Circle && objects[j] instanceof Circle) {
                        this.detectCollisionCircleCircle(objects[i],objects[j])
                        }
                    }
                    //rectangle collisions
                }
            }
        }
    }

    //math part
    detectCollisionCircleCircle(o1, o2) {

    }
}