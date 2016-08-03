describe('growBalls', function() {

  var growBalls, clock;
  var timeBetweenSteps = 10;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growBalls = new GrowBalls(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(growBalls.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node change size', function() {
    sinon.spy(growBalls.$node, 'animate');
    growBalls.step();
    expect(growBalls.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(growBalls, 'step');
      expect(growBalls.step.callCount).to.be.equal(0);
    // = makegrowBalls(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(growBalls.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(growBalls.step.callCount).to.be.equal(2);
    });
  });
});
