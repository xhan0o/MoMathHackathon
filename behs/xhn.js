/* MoMath Math Square Behavior
 *
 *        Title: Simple Math
 *  Description: Sum Solution
 * Scheduler ID: xx
 *    Framework: none
 *       Author: xhn & bob
 *      Created: 2017-08-05
 *       Status: dev
 */
 
 
import P5Behavior from 'p5beh';
const pb = new P5Behavior();
import * as Sensor from 'sensors';

var problem
var s
pb.setup = function (p) {
  /* this == pb.p5 == p */
  /* P5Behavior already calls createCanvas for us */
  // setup here...
  
  s = 1;
}
 
pb.draw = function (floor,p) {
this.clear();
this.textSize(32);
this.text(s, 150, 30);
this.fill(256, 256, 256);

for(var i = new Sensor.Index(); i; i = i.incr()){
    if (floor.sensors.get(i)){
        console.log('This sensor is enabled');
		console.log(i);
    }
}

/*
for (let u of floor.users) {
	pb.drawUser(u);
	console.log(u)
}

  this.fill(128, 128, 128, 128);
  this.noStroke();
  pb.drawSensors(floor.sensors);
*/
};

export const behavior = {
  title: "xhn",
  init: pb.init.bind(pb),
  frameRate: 'sensor',
  render: pb.render.bind(pb),
  numGhosts: 1
};
export default behavior;
