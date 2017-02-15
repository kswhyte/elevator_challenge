export default class Elevator {
  constructor() {
    this.state = 'idle'; //'moving' or 'broken'
    this.currentFloor = 0;
    this.endingFloor = 0;
    this.floorsTraversed = [];
    this.stops = 0;
    this.currentRiders = [];
    this.requests = [];
  }
  //person makes a request
    //add current rider into currentRiders
    //add dropoff request to requests

  requestFloor(person, dropOffFloor) {
    this.currentRiders.push(person)
    this.requests.push(dropOffFloor)

    this.pickUpPerson(person, dropOffFloor)
  }

  pickUpPerson(person, dropOffFloor) {
    this.state = 'moving'
    this.currentFloor = Math.abs(person.currentFloor - this.currentFloor)
    this.floorsTraversed.push(person.currentFloor - this.currentFloor)

    this.stops()
    this.moveToDropOff(person, dropOffFloor)
  }

  moveToDropOff(person, dropOffFloor) {

    this.currentFloor += Math.abs(dropOffFloor - this.currentFloor)
    this.floorsTraversed.push(dropOffFloor - person.currentFloor)

    this.stops()
    this.dropOffPerson()
  }

  dropOffPerson() {
    this.reset()
  }

  stops() {
    this.state = 'idle'
    this.stops = floorsTraversed.length
    this.floors = this.floorsTraversed.reduce((a, b) => {
      Math.abs(a)
      Math.abs(b)
      a + b
    }, 0)
  }

  reset() {
    this.constructor()
  }
}
