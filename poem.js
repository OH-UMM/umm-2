var Poem = (function() {

  'use strict';

  var current = 0;

  var lines = [
    'There once was a maintainer on GitHub',
    'So many pull requests she did snub',
    'So I forked the repo',
    'Now they all send <em>me</em> changes, d\'oh!',
    'Said the maintainer, "Welcome to the club!"'
  ];

  var advance = function(element) {
    element.innerHTML = lines[current % lines.length];
    current++;
  };

  return {
    advance: advance
  };

})();
