var x = setTimeout(reveal, 5700);

function show(){
    document.getElementById('choice').style.visibility="visible";
    document.getElementById('accept').style.visibility="hidden";
}

document.addEventListener('click', musicPlay);
        function musicPlay() {
            document.getElementById('bgmusic').play()
        }
function accepted(){
    document.getElementById("bgmusic").src = "rss/hapi.mp3";
    document.getElementById('text').innerHTML ="ILY<3";
    document.getElementById('text').style.visibility="visible";
    document.getElementById('subtext').style.visibility="hidden";
    document.getElementById('cat').style.visibility="visible";
    document.getElementById("cat").src = "rss/jumpcat.gif";
    document.getElementById("img").src = "rss/happypepe.jpg";
    clearTimeout(x);
}

function doSomething(){
    show();

    document.body.classList.add('active');

    document.getElementById("bgmusic").src = "rss/ldr.mp3";

    document.getElementById("img").src = "rss/sadpepe.jpg";
    
    document.getElementById("text").innerHTML = "Miss\nna\nkita";

    document.getElementById("subtext").innerHTML = "Imissyouhoneybunchsugarplumchatkanaplease";
    
    x;
}

function reveal(){
    document.getElementById('text').style.visibility="visible";
}

function doSomethingElse(){
    document.body.classList.remove('active');

    document.getElementById("bgmusic").src = "rss/bgmusic.mp3";

    document.getElementById("img").src = "rss/sadcat.jpg";

    document.getElementById("text").innerHTML = "Why\nnaman\nlods";

    document.getElementById("subtext").innerHTML = "Minsan na nga lang";

}