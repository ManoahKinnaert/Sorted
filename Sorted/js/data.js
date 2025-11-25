function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class DataArray {
    constructor (size) {
        this.size = size
        this.values = []
        this.animationSpeed = 1.0

    }

    getHtml() {
        let html = ""
        for(let i = 0; i < this.values.length; i++) {
            html += `<td> <div id="${i}" style="width: 20px; height: ${this.values[i] * 10}px;"></div></td>`
        }
        return html
    }

    updateHtml() {
        for (let i=0; i < this.values.length; i++) {
            document.getElementById(`${i}`).style.height= `${this.values[i] * 10}px`
        }
    }

    generateArray(size, low, high) {
        this.values = []
        this.size = size 
        for (let i = 0; i < this.size; i++) {
            this.values.push(Math.floor(Math.random() * (high - low + 1)) + low)
        }
    }

    pushElement(element) {
        this.values.push(element)
    }

    async setElement(element, index) {
        this.values[index] = element 
        document.getElementById(`${index}`).style.backgroundColor = "mediumspringgreen"
        await sleep(100 * this.animationSpeed)
        document.getElementById(`${index}`).style.height = `${this.values[index] * 10}px`
        document.getElementById(`${index}`).style.backgroundColor = "rgb(0, 10, 40)"
    }

    getElement(index) {
        return this.values[index]
    }
}

export {DataArray}