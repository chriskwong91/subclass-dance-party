describe('ballCrawl', function() {

  var ballCrawl, clock;
  var timeBetweenSteps = 500;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ballCrawl = new BallCrawl(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(ballCrawl.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node move around', function() {
    sinon.spy(ballCrawl.$node, 'animate');
    ballCrawl.step();
    expect(ballCrawl.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(ballCrawl, 'step');
      expect(ballCrawl.step.callCount).to.be.equal(0);
    // = makeballCrawl(10, 20, timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(ballCrawl.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(ballCrawl.step.callCount).to.be.equal(2);
    });
  });
});
