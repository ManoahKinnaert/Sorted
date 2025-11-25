function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class DataArray {
    constructor (size) {
        this.size = size
        this.values = []

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
        await sleep(200)
        document.getElementById(`${index}`).style.height = `${this.values[index] * 10}px`
    }

    getElement(index) {
        return this.values[index]
    }
}

export {DataArray}