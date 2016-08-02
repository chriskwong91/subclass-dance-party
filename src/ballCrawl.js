var BallCrawl = function(top, left, time) {
  makeDancer.apply(this, arguments);
  this.time = Math.max(this.time, 401);
};

BallCrawl.prototype = Object.create(makeDancer.prototype);
BallCrawl.prototype.constructor = BallCrawl;

BallCrawl.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  if (this.time > 400) {
    var widthPx = String($('body').width() * Math.random()) + 'px';
    var heightPx = String($('body').height() * Math.random()) + 'px';
    this.$node.animate({'top': heightPx,
                        'left': widthPx
                        }, 400);
  }
};