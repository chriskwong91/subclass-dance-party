var ColorBall = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  
};

ColorBall.prototype = Object.create(makeDancer.prototype);
ColorBall.prototype.constructor = ColorBall;

ColorBall.prototype.step = function() {
  var colors = ['purple', 'red', 'blue', 'pink', 'green', 'orange', 'white'];
  makeDancer.prototype.step.call(this);
  var i = Math.floor(Math.random() * colors.length);
  var color = colors[i];
  var randomSize = String(Math.random() * 60) + 'px';
  this.$node.css({'border-width': randomSize,
                  'border-radius': randomSize
                });
  this.$node.css('border-color', color);
  // change colors... need to into css
};