window.onload = function() {
     var canvas  = document.querySelector('#canvas');
     var context = canvas.getContext('2d');

     context.beginPath();
     context.moveTo(131, 119);
     context.bezierCurveTo(131, 126, 126, 131, 119, 131);
     context.lineTo(30, 131);
     context.bezierCurveTo(23, 131, 18, 126, 18, 119);
     context.lineTo(18, 30);
     context.bezierCurveTo(18, 23, 23, 18, 30, 18);
     context.lineTo(119, 18);
     context.bezierCurveTo(126, 18, 131, 23, 131, 30);
     context.lineTo(131, 119);
     context.closePath();
     context.fillStyle = "#f36b21";
     context.fill();

     context.font = "100px Calibri,Geneva,Arial";
     context.fillStyle = "black";
     context.fillText("N", 30, 90);
     context.fillStyle = "white";
     context.fillText("D", 55, 120);
};
