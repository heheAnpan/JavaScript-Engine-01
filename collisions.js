import {Circle} from './circle.js';

export class Collisions {
	constructor() 
    {
		//class collision will detect all objects and if they detect collision, they will add it to the list
        this.collisions = [];
	}

    //we want to start with an empty list of collisions every frame
    clearCollisions() {
        this.collisions = [];
    }

    //check only objects that are close enough that may be colliding
    //need an input since we're checking circles
    narrowPhazeDetection(objects) 
    {
        for (let i=0; i<objects.length; i++) 
        {
            for (let j=0; j<objects.length; j++) 
            {
                if(j>i)
                {
                    //detect collisions
                    //circle collisions
                    if(objects[i].shape instanceof Circle && objects[j].shape instanceof Circle) 
                    {
                        this.detectCollisionCircleCircle(objects[i],objects[j]);
                    }
                    //rectangle collisions
                }
            }
        }
    }

    //math part; detect if there's an overlap
    //o1 and o2 are rigidbodies
    //if there's an overlap, push them apart
    //distance when the circles are barely touching - r1 + r2, less than r1+r2 - touching
    detectCollisionCircleCircle(o1, o2) {
        const s1 = o1.shape;
        const s2 = o2.shape;
        const dist = s1.position.distanceTo(s2.position);
        if (dist < s1.radius + s2.radius) { //the circles collide
            const overlap = s1.radius + s2.radius - dist;
            // just calculate w/o changing the position
            // clone() - position remains unchanged
            
            // normal is a unit vector (only info it stores is direction)
            const normal = s2.position.clone().subtract(s1.position).normalize();
            //to normalize the vector means to make it a "unit" vector, i.e a vector with length = 1. 
            //This is used when you just need the direction, and want to later multiply the direction times a scalar

            console.log(normal);  //this helps you find the origin of the bug - normal was undefined because normalize() did not return a vector  
            
            this.collisions.push({
                collidedPair: [o1,o2], 
                overlap: overlap,
                normal: normal //unit vector from s1 to s2
            });
        }
    }


    pushOffObjects(o1,o2,overlap,normal)
    {
        //move each obj in normal direction by 0.5 of the overlap
        o1.shape.position.subtract(normal.clone().multiply(overlap/2)); //now you are multiplying the normalized vector times a scalar(equal to half the overlap)
        o2.shape.position.add(normal.clone().multiply(overlap/2));
    }

    // push them aparth? bounce them?
    resolveCollisions()
    {
        let collidedPair, overlap, normal, o1, o2;
        for (let i=0; i<this.collisions.length;i++)
        {
            ({collidedPair, overlap, normal} = this.collisions[i]);
            [o1, o2] = collidedPair;
            this.pushOffObjects(o1,o2,overlap,normal);
        }
    }
}