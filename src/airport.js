import Plane from "../src/plane.js";
class Airport {

    maxCapacity = 10;
    landedPlanes = [];

    constructor(maxCapacity = 10) {
        if (maxCapacity >= 0 && Number.isInteger(maxCapacity)) {
            this.maxCapacity = maxCapacity;
        }
    }

    getMaxCapacity() {
        return this.maxCapacity;
    }

    setMaxCapacity(maxCapacity) {
        if (maxCapacity >= 0 && Number.isInteger(maxCapacity)) {
            this.maxCapacity = maxCapacity;
        }
    }

    capacityFull() {
        return this.landedPlanes.length === this.getMaxCapacity();
    }

    landPlane(plane) {
        if (plane instanceof Plane && !this.capacityFull() && !this.landedPlanes.includes(plane)) {
            this.landedPlanes.push(plane);
        }
    };

    planeTakeOff(plane) {

        if (this.landedPlanes.includes(plane)) {
            const index = this.landedPlanes.indexOf(plane);
            this.landedPlanes.splice(index, 1);
        }
    }


}
export default Airport;