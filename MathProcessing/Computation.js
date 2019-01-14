var exports = module.exports = {};


//--- All params in meters and seconds

/*

@params
1st car"s speed;
2nd or 3rd cars" speed;
distance beetwen given cars;
distance from first car to an obstacle;
*/
exports.calculate = function(speed_first, speed_second, distance, obstacle_distance) {

      console.log("=== Inside calculate function ===");
      console.log(speed_first);
      console.log(speed_second);
      console.log(distance);
      console.log(obstacle_distance);


var v;

   //--- var deltav = -(speed_first - speed_second);
   var buffer = 5;
   //--- Length of the modeled road in simulation. We count from 0m to 500m
   var imaginaryRoadLength = 500;

   //--- Calulate for 1st car
   /*
  var delta_t = 2*speed_first/(obstacle_distance - buffer);
  var a = -speed_first/delta_t1;
   */


  //--- Calulate for 2st car
   var delta_t = (obstacle_distance - buffer)/(2*speed_second);
   var a = -speed_second/delta_t;
   var x_0 = imaginaryRoadLength - (distance + obstacle_distance); //500m - length of the road


   //--- Return calulation results for the second given car
   v = {
       "x_0" : x_0,                   //Initial coordinate of 2nd given car
       "speed_0" : speed_second,      //Initial speed of 2nd given car
       "acceleration": a,             //Calculated negative acceleration of 2nd given car
       "delta_t" : delta_t            //Time of velocity change (from the initial speed to a calculated new speed)
    }


    return v;

}
