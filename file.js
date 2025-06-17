
    var start = new Date().getTime();
        function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        }
        function move(){
            //var left;
           // var top;
           // var wh;
            var left =Math.random()*300;
            var top =Math.random()*300;
           var wh = ((Math.random()*400) + 100);
            document.getElementById("box1").style.left = left + "px";
            document.getElementById("box1").style.top = top + "px";
            document.getElementById("box1").style.width = wh + "px";
            document.getElementById("box1").style.height = wh + "px";
            document.getElementById("box1").style.display = "block";
            document.getElementById("box1").style.backgroundColor = getRandomColor();
            start = new Date().getTime();
}
        move();

        document.getElementById("box1").onclick = function(){
           // document.getElementById("box1").style.display = "center";
            var end = new Date().getTime();
            var takenTime = ((end-start)/1000).toFixed(2);
            alert(takenTime);
            move();
}