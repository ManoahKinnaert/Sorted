class DataObject {
    constructor (value, index) {
        this.value = value 
        this.index = index 
    }
}

class DataArray {
    constructor (values=null) {
        if (values == null) { this.values = [] }
        else { this.values = values } 
    }

    pushElement(element) {
        this.values.push(element)
    }

    setElement(element, index) {
        this.values[index] = element 
    }

    getElement(index) {
        return this.values[index]
    }
}