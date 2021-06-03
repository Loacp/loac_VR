AFRAME.registerComponent('switch', {
  init: function () {
    var i=1;
    var j=0;
    var k=0;
    var el = this.el;
    var change = 0;
    var vitesse = 0.2;
    var save = 0;

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;};

    el.addEventListener('animation-finished', () => {


      if (i<5) {

        el.setAttribute("animation" ,);

        i++
        switch(i)
        {
          case 1: el.setAttribute("animation" , "to: #ff930f");
          break;
          case 2: el.setAttribute("animation-mixer" , "clip: pas_02");
          break;
          case 3: el.setAttribute("animation-mixer" , "clip: pas_03");
          break;
          case 4: el.setAttribute("animation-mixer" , "clip: pas_04");
          break;
          case 5: el.setAttribute("animation-mixer" , "clip: pas_05");
          break;
          default : el.setAttribute("animation-mixer" , "clip: pas_01");
          break;
        };

      } else {

        if (j<5) {

          el.setAttribute("animation-mixer" , "repetitions : 1");

          j++
          switch(j)
          {
            case 1: el.setAttribute("animation-mixer" , "clip: pas_01");
            break;
            case 2: el.setAttribute("animation-mixer" , "clip: pas_02");
            break;
            case 3: el.setAttribute("animation-mixer" , "clip: pas_03");
            break;
            case 4: el.setAttribute("animation-mixer" , "clip: pas_04");
            break;
            case 5: el.setAttribute("animation-mixer" , "clip: pas_05");
            break;
            default : el.setAttribute("animation-mixer" , "clip: pas_01");
            break;
          };

        } else {

      save = change;

      if (k<1){

        change = getRandomInt(1,4);
        k=1;

      } else{

      change = getRandomInt(1,5);

      while (change == save) {

        change = getRandomInt(1,5);

      }
    }




      console.log(change);


      switch(change)
      {
        case 1: el.setAttribute("animation-mixer" , "clip: pas_01");
        break;
        case 2: el.setAttribute("animation-mixer" , "clip: pas_02");
        break;
        case 3: el.setAttribute("animation-mixer" , "clip: pas_03");
        break;
        case 4: el.setAttribute("animation-mixer" , "clip: pas_04");
        break;
        case 5: el.setAttribute("animation-mixer" , "clip: pas_05");
        break;
        default : el.setAttribute("animation-mixer" , "clip: pas_01");
        break;


      };
    }

  }


      });
    }
});
