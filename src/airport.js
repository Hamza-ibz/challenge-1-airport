class Airport {

    maxCapacity;

    constructor(maxCapacity = 10) {
        if (maxCapacity > 0) {
            this.maxCapacity = maxCapacity;
        } else { this.maxCapacity = 0 }
    }

    getMaxCapacity() {
        return this.maxCapacity;
    }
    setMaxCapacity(maxCapacity) {
        if (maxCapacity > 0) {
            this.maxCapacity = maxCapacity;
        } else {
            this.maxCapacity = 0
        }
    }


}
export default Airport;