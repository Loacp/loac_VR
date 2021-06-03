AFRAME.registerComponent('bright', {
  init: function () {
    var el = this.el;
    var change = 0;
    var save = 0;

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;};

    el.addEventListener('animation-finished', () => {


      save = change;

      change = getRandomInt(1,3);

      while (change == save) {

        change = getRandomInt(1,3);

      }



      switch(change)
      {
        case 1: el.setAttribute("animation" , "to: #65d2eb");
        break;
        case 2: el.setAttribute("animation" , "to: #ff930f");
        break;
        case 3: el.setAttribute("animation" , "to: #030A24");
        break;
        default : el.setAttribute("animation" , "to: #030A24");
        break;


      };



      });

    }});
