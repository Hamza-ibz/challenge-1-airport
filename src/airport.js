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
    landPlane(plane) {
        this.landedPlanes.push(plane);
    };


}
export default Airport;