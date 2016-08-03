describe('runawayBalls', function() {

  var runawayBalls, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    runawayBalls = new RunawayBalls(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(runawayBalls.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node run from the mouse', function() {
    sinon.spy(runawayBalls.$node, 'animate');
    runawayBalls.run();
    expect(runawayBalls.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(runawayBalls, 'step');
      expect(runawayBalls.step.callCount).to.be.equal(0);
    // = makerunawayBalls(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(runawayBalls.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(runawayBalls.step.callCount).to.be.equal(2);
    });
  });
});
