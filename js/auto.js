let userDistance = 860;

let car = {
    make: 'Peugeot',
    model: '407',
    release: 2008,
    averageSpeed: 80,
}

function showInfoCar () {
    console.log (`${car.make} ${car.model}, ${car.release} year, have average speed ${car.averageSpeed} km/h`)
}

function timeToRoad (distance) {
    let cleanTime = distance / car.averageSpeed;
    
    if (cleanTime > 4) {
        totalTime = cleanTime + (Math.floor(cleanTime / 4));
    } else {
        totalTime = cleanTime;
    }

    console.log (`${userDistance} km this car will drive in ${totalTime} h`);
}

showInfoCar ();
timeToRoad(userDistance);