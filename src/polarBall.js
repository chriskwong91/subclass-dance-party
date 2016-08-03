var PolarBall = function(top, left) {
  makeDancer.apply(this, arguments);
  this.theta = 0;
  this.time = 10;
  this.radius = 0;
  this.lat = $('body').height() / 2;
  this.lng = $('body').width() / 2;
  this.$node.css({'top': String(this.lat) + 'px',
                  'left': String(this.lng) + 'px'
  });
};

PolarBall.prototype = Object.create(makeDancer.prototype);
PolarBall.prototype.constructor = PolarBall;

PolarBall.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.radius = this.a * Math.sin(this.k * this.theta) + this.b;
  var x = this.radius * Math.cos(this.theta);
  var y = this.radius * Math.sin(this.theta);
  this.changeColor(this.k);
  this.$node.animate({'top': String(this.lat - y) + 'px',
                      'left': String(this.lng + x) + 'px'
                      }, 5);
  if (this.theta > 2 * Math.PI) {
    this.theta = 0;
  }

  this.theta += Math.PI / this.increment;
};

PolarBall.prototype.changeColor = function(k) {
  var colors = ['purple', 'aqua', 'red', 'green', 'orange', 'pink', 'blue', 'white', 'darkcyan', 'peru' ];
  if (k <= 1) {
    k = 4;
  }
  var gap = 2 * Math.PI / k;
  var count = 0;

  while (count < k) {
    if (this.theta % (2 * Math.PI) > count * gap && this.theta % (2 * Math.PI) < (count + 1) * gap) {
      this.$node.css('border-color', colors[count]);
    }
    count++;
  }
};

PolarBall.prototype.a = 80;
PolarBall.prototype.k = 5;
PolarBall.prototype.b = 150;
PolarBall.prototype.increment = 125;