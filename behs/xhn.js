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
var step=false;
var num1;
var num2;
pb.setup = function (p) {
  /* this == pb.p5 == p */
  /* P5Behavior already calls createCanvas for us */
  // setup here...
  
  s = 1;
}
 

pb.draw = function (floor,p) {
this.textSize(40);
var j = 0;

while (!step) {
this.clear();
while(j<10) {
	
var s = Math.random()*99;
var yy = Math.random()*576;
var xx = Math.random()*576;
this.text(s.toFixed(), yy.toFixed(), xx.toFixed());
this.fill(256, 256, 256);
j++;
}
step = true;
}
for(var i = new Sensor.Index(); i; i = i.incr()){
    if (floor.sensors.get(i)){
        console.log('This sensor is enabled');
		console.log(i.x*8,i.y*8);
		step = false;
		
    }
}


};

export const behavior = {
  title: "xhn",
  init: pb.init.bind(pb),
  frameRate: 'sensor',
  render: pb.render.bind(pb),
  numGhosts: 1
};
export default behavior;
