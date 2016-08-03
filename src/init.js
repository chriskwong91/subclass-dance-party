$(document).ready(function() {
  window.dancers = [];
  var danceFloors = 
    ['black',
    'url("http://cdn1.wallpaperus.org/wallpapers/set1/139/2122577689-football-field.jpg")',
    'url("http://2.bp.blogspot.com/-eMPF4tBvHF4/UVn1yAOCABI/AAAAAAAAATY/rEsZe7UB_10/s1600/DSC09729.JPG")',
    'url("http://wallpaper.zone/img/1838642.jpg")',
    'url("http://static3.techinsider.io/image/5761785e910584716f8c8fa0-1200/even-if-you-dont-know-the-local-name-of-these-giant-stone-heads-youve-probably-seen-them-or-a-plastic-version-of-them-on-tv-or-at-a-friends-vaguely-tropical-cocktail-party.jpg")',
    'url("http://blogs-images.forbes.com/brucedorminey/files/2015/08/the-martian3-1940x1015.jpg")',
    ];
  var counter = 0;
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  // line up button --> loop through window.dancers and invoke this.lineUp() on each
  $('.lineUp').on('click', function() {
    makeDancer.prototype.lineUp();
  });

  $('.danceFloor').on('click', function() {
    counter++;
    if (counter >= danceFloors.length) {
      counter = 0;
    }
    $('body').css({'background': danceFloors[counter],
                   'background-size': '100% 100%',
                   'background-repeat': 'no-repeat'});
  });

  $('#leaves').on('change', function() {
    PolarBall.prototype.k = $(this).val();
  });
  $('#size').on('change', function() {
    var val = $(this).val() * 20;
    PolarBall.prototype.a = val;
  });
  $('#width').on('change', function() {
    var val = $(this).val() * 30;
    PolarBall.prototype.b = val;
  });
});

// growing/shrinking
// bouncing
// exploding
// flying around
// changing colors
// leaving a trail of ghost balls