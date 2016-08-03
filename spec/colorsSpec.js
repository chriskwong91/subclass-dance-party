describe('colorBalls', function() {

  var colorBall, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    colorBall = new ColorBall(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(colorBall.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node change colors', function() {
    sinon.spy(colorBall.$node, 'css');
    colorBall.step();
    expect(colorBall.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(colorBall, 'step');
      expect(colorBall.step.callCount).to.be.equal(0);
    // = makecolorBall(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(colorBall.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(colorBall.step.callCount).to.be.equal(2);
    });
  });
});
