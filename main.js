const canvas = document.getElementById("myCanvas");

canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9)
const car = new Car(road.getLaneCenter(1),100,30,50, "AI");

const traffic = [
    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2)
]



animate();

//animation
function animate(){

    for (let i = 0; i < traffic.length; i++) {
        const carTraffic = traffic[i];
        carTraffic.update(road.borders, []);
        
    }

    //console.table(road.borders)
    car.update(road.borders, traffic);
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7);


    road.draw(ctx);

    for (let i = 0; i < traffic.length; i++) {
        const carTreff = traffic[i];
        carTreff.draw(ctx, "red");   
    }

    car.draw(ctx, "blue");

    ctx.restore();
    requestAnimationFrame(animate);
}