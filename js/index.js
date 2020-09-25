window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    let context = document.querySelector('canvas').getContext('2d')

    let imgRoad = new Image();
    imgRoad.src = 'images/road.png';

    let img = new Image();
    imgScale = 200/400;
    img.src = 'https://github.com/ironhack-labs/lab-canvas-race-car/raw/master/images/car.png';
    context.clearRect(0, 0, 1200, 800);
    // context.fillRect(10, 10, 10, 10);

    let car = {
      posX: 215,
      posY: 550
    };

    img.onload = () => {
      context.drawImage(imgRoad, 0, 0, 500, 700);
      context.drawImage(img, car.posX,  car.posY, 120*imgScale, 120);
    };



    document.addEventListener('keydown', event => {
      if (event.keyCode === 37) {
        car.posX -= 5;
      } else if (event.keyCode === 39) {
        car.posX += 5;
      }
      console.log(car.posX)
      context.clearRect(0, 0, 1200, 800);
      context.drawImage(imgRoad, 0, 0, 500, 700);
      context.drawImage(img, car.posX,  car.posY, 120*imgScale, 120);
    });
    
 


  }
};
