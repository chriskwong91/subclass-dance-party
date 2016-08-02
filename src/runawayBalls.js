var RunawayBalls = function(top, left, time) {
  makeDancer.apply(this, arguments);
  $(this).on('mouseenter', this.run);
};

RunawayBalls.prototype = Object.create(makeDancer.prototype);
RunawayBalls.prototype.constructor = RunawayBalls;

RunawayBalls.prototype.run = function() {
  
};