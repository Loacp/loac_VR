AFRAME.registerComponent('switch', {
  init: function () {
    var el = this.el;
    var change = 0;
    var vitesse = 0.2
    var save = 0;

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;};

    el.addEventListener('animation-finished', () => {

      save = change;

      change = getRandomInt(1,5);

      while (change == save) {

        change = getRandomInt(1,5);

      }



      console.log(change);


      switch(change)
      {
        case 1: el.setAttribute("animation-mixer" , "clip: pas-01-d");
        break;
        case 2: el.setAttribute("animation-mixer" , "clip: pas-02-f");
        break;
        case 3: el.setAttribute("animation-mixer" , "clip: pas-03-f");
        break;
        case 4: el.setAttribute("animation-mixer" , "clip: pas-04-f");
        break;
        case 5: el.setAttribute("animation-mixer" , "clip: pas-05-f");
        break;
        default : el.setAttribute("animation-mixer" , "clip: pas-01-d");
        break;


      };


      });
    }
});
