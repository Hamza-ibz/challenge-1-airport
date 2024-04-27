import Plane from "../src/plane.js";
class Airport {

    maxCapacity = 10;
    landedPlanes = [];

    constructor(maxCapacity = 10) {
        if (maxCapacity >= 0 && Number.isInteger(maxCapacity)) {
            this.maxCapacity = maxCapacity;
            return `Airport has maximum capacity of ${this.maxCapacity}`;
        } else {
            return `Incorrect value given, please check data`
        }
    }

    getMaxCapacity() {
        return this.maxCapacity;
    }

    setMaxCapacity(maxCapacity) {
        if (maxCapacity >= 0 && Number.isInteger(maxCapacity)) {
            this.maxCapacity = maxCapacity;
            return `Airport changed maximum capacity to ${this.maxCapacity}`;
        } else {
            return `Incorrect value given, please check data`
        }
    }

    capacityFull() {
        return this.landedPlanes.length === this.getMaxCapacity();
    }

    landPlane(plane) {
        if (plane instanceof Plane && !this.capacityFull() && !this.landedPlanes.includes(plane)) {
            this.landedPlanes.push(plane);
            return `Plane has landed`
        } else {
            return `Error with landing please check data`
        }
    };

    planeTakeOff(plane) {

        if (this.landedPlanes.includes(plane)) {
            const index = this.landedPlanes.indexOf(plane);
            this.landedPlanes.splice(index, 1);

            return `Plane has taken off`
        } else {
            return `Error with take-off please check data`
        }
    }


}
export default Airport;