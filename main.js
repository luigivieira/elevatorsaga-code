function init(elevators, floors) {
    console.log(`Starting new elevator saga game with ${elevators.length} elevators and ${floors.length} floors`);

    // Just a dummy placeholder code for now...
    const topFloor = Math.max(floors.length - 1, 0);
    elevators.forEach(elevator => {
        elevator.on("idle", () => {
            elevator.goToFloor(topFloor);
        });
    });    
}

function update(dt, elevators, floors) {
}

window.init = init;
window.update = update;