// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.time = timeBetweenSteps;
 
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  this.step();
  this.setPosition(top, left);

};

makeDancer.prototype.step = function() {
  setTimeout(function() {
    this.step();
  }.bind(this), this.time);

};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function() {
  var mid = ($('body').height() / 2) - 25;
  var middle = String(mid) + 'px';
  var size = Math.min(window.dancers.length, 20);
  // var increment = $('body').width() / size;
  var width = 0;
  window.dancers.forEach(function(dancer) {
    if (width >= $('body').width() - 200) {
      width = 0;
      mid += 150;
      middle = String(mid) + 'px';
    }
    width += Number(dancer.$node.css('border-width').split('px')[0]) + 50;
    var widthString = String(width) + 'px';
    dancer.$node.animate({'top': middle,
                          'left': widthString});
  });
  
};