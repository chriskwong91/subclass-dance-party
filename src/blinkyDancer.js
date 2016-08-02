var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  var randomSize = String(Math.random() * 60) + 'px';
  this.$node.css({'border-width': randomSize,
                  'border-radius': randomSize
                });
  this.$node.toggle();
};