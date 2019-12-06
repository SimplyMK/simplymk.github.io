// Sound player
const soundContainers = document.querySelectorAll('.sound-container');

soundContainers.forEach(element => {
  element.addEventListener('click', function() {
    element.classList.add('pushed');
    var arrayOfSounds = element.querySelectorAll('audio');
    var rand = arrayOfSounds[Math.floor(Math.random() * arrayOfSounds.length)];
    rand.play();
    setTimeout(function(){
      element.classList.remove('pushed');
    }, 500);
  });
});


var options = {
  strings: [
    'Sors ton Bambou et expose ton SWAG de poulet !',
    'Ici tout est une affaire de gros bambou!',
    'Ben alors tu attends quoi, clique sur ce fichu lien!',
    "Deux cerveaux valent mieux qu'un"
  ],
  typeSpeed: 40,
  backSpeed: 10,
  shuffle: true,
  showCursor: false
};

// random sentences
var typed = new Typed('.random-sentences', options);


// clipboard.js
var clipboard = new ClipboardJS('.uk-card');

// clipboard.on('success', function(e) {
//     console.info('Action:', e.action);
//     console.info('Text:', e.text);
//     console.info('Trigger:', e.trigger);

//     e.clearSelection();
// });