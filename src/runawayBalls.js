var RunawayBalls = function(top, left, time) {
  makeDancer.apply(this, arguments);
  this.$node.on('mouseover', this.run.bind(this));
};

RunawayBalls.prototype = Object.create(makeDancer.prototype);
RunawayBalls.prototype.constructor = RunawayBalls;

RunawayBalls.prototype.run = function() {
  var widthPx = String($('body').width() * Math.random()) + 'px';
  var heightPx = String($('body').height() * Math.random()) + 'px';
  console.log(this);
  this.$node.animate({'top': heightPx,
                      'left': widthPx
                      }, 300);
};
