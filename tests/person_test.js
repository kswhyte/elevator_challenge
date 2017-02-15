const assert = require('chai').assert
const Elevator = require('../elevator').default
const Person = require('../person').default

describe('Person', function() {
  const elevator = new Elevator()
  const alex = new Person("Alex", 2)

  afterEach(function() {
    elevator.reset();
  });

  it('should move up', () => {
    
  })

  it('should move down', () => {

  })
