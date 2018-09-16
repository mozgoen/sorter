class Sorter {
    constructor() {
        this.arrayOfElems = [];
        this.comparator = null;
    }

    add(element) {
        this.arrayOfElems.push(element);
    }

    at(index) {
        return this.arrayOfElems[index];
    }

    get length() {
        return this.arrayOfElems.length;
    }

    toArray() {
        return this.arrayOfElems;
    }

    sort(indices) {
        if (indices.length === 1) {
           return;
        }

        indices.sort();

        for (let i = 0; i < indices.length - 1; i++) {
            for (let j = 0; j < indices.length - 1; j++) {
                this.swap(indices[j], indices[j + 1]);
            }
        }
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
    swap(index0, index1) {
        if (this.comparator) {
            if (this.comparator(this.arrayOfElems[index0], this.arrayOfElems[index1]) > 0) {
                let swap = this.arrayOfElems[index0];
                this.arrayOfElems[index0] = this.arrayOfElems[index1];
                this.arrayOfElems[index1] = swap;
            }
        } else {
            if (this.arrayOfElems[index0] > this.arrayOfElems[index1]) {
                let swap = this.arrayOfElems[index0];
                this.arrayOfElems[index0] = this.arrayOfElems[index1];
                this.arrayOfElems[index1] = swap;
            }
        }

    }
}
module.exports = Sorter;