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
    'Presse un bouton et accroche ton slip !',
    'Choisis vite mais choisis bien !',
    "Reviens au coeur de l'action en cliquant ce lien !"
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