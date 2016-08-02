var GrowBalls = function(top, left, time) {
  makeDancer.apply(this, arguments);
  var colors = ['purple', 'red', 'blue', 'pink', 'green', 'orange', 'white'];
  var index = Math.floor( Math.random() * colors.length);
  var color = colors[index];

  this.$node.css({'border-color': color});
};

GrowBalls.prototype = Object.create(makeDancer.prototype);
GrowBalls.prototype.constructor = GrowBalls;

GrowBalls.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var randomPx = String(Math.floor( Math.random() * 100)) + 'px';

  this.$node.animate({'border-width': randomPx,
                      'border-radius': randomPx
                      }, 100);

};