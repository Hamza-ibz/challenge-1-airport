class Airport {

    maxCapacity;

    constructor(maxCapacity = 10) {
        if (maxCapacity > 0) {
            this.maxCapacity = maxCapacity;
        } else { return this.maxCapacity = 0 }
    }

    getMaxCapacity() {
        return this.maxCapacity;
    }


}
export default Airport;