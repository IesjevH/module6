var crashCounter = 0;

for (let boomaantallen = 0; boomaantallen < 5 ; boomaantallen++) {
    var img = document.createElement('img');
    img.src = 'assets/img/tree.jpg';
    img.className = 'tree';
    img.style.left = Math.random(80) * 80 + '%';
    img.style.top = Math.random(80) * 80 + '%';
    document.getElementById('container').appendChild(img);
}

var car = document.getElementById("car");
car.style.left = 100 + 'px';
car.style.top = 50 + 'px';

document.body.onkeydown = function (event) {
    var keycode = event.keyCode;

    switch (keycode) {
        case 40: //beneden
            car.style.transform = 'rotate(90deg)';
            car.style.top = parseInt(car.style.top) + 5 + 'px';
            if (crash() == true) {
                car.style.top = parseInt(car.style.top) - 5 + 'px';
            }
            break;

        case 37: //links
            car.style.transform = 'rotate(180deg)';
            car.style.left = parseInt(car.style.left) - 5 + 'px';
            if (crash() == true) {
                car.style.top = parseInt(car.style.top) + 5 + 'px';
            }
            break;

        case 39: // rechts
            car.style.transform = 'rotate(0deg)';
            car.style.left = parseInt(car.style.left) + 5 + 'px';
            if (crash() == true) {  
                car.style.top = parseInt(car.style.top) - 5 + 'px';
            }
            break;

        case 38: //boven
            car.style.transform = 'rotate(-90deg)';
            car.style.top = parseInt(car.style.top) - 5 + 'px';
            if (crash() == true) {
                car.style.top = parseInt(car.style.top) + 5 + 'px';
            }
            break;

        default: console.log('een andere toets is ingedrukt:    ' + keycode);
    }
}

function crash() {
    var trees = document.getElementsByClassName('tree');
    var overlap = false;

    for (let boomaantallen = 0; boomaantallen < trees.length; boomaantallen++) {
        overlap = !(
            car.getBoundingClientRect().right < trees[boomaantallen].getBoundingClientRect().left ||
            car.getBoundingClientRect().left > trees[boomaantallen].getBoundingClientRect().right ||
            car.getBoundingClientRect().bottom < trees[boomaantallen].getBoundingClientRect().top ||
            car.getBoundingClientRect().top > trees[boomaantallen].getBoundingClientRect().bottom
        );

        if (overlap) {
            crashCounter += 1;
            console.log("boem");
            return true;
        }
    }

    return false;
}
