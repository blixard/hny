window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var abc = new Image();
    abc.src = "../res/stellar_logo1f.png";
    ctx.drawImage(abc, 10, 10);
  };

  draw();