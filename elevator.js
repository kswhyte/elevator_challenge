export default class Elevator {
  constructor(y, maxCapacity, totalFloors) {
    this.floor = 0;
    this.currentFloor = 0;
    this.travelLog = {
      totalFloorsTraveled = 0,
      totalStops = 0
    },
    this.requests = [];
    this.currentRiders = [];
    this.status = 'idle'; //'moving' or 'broken'
  }

  moveUp() {

  }

  reset() {
    this.constructor()
  }
}
