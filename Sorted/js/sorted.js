function findMinimumPos(values, start) {
    let minPos = start
    for (let i=start + 1; i < values.size; i++) {
        if (values.getElement(i) < values.getElement(minPos)) {
            minPos = i
        }
    }
    return minPos
}

async function selectionSort(values) {
    for (let i = 0; i < values.size; i++) {
        let minPos = findMinimumPos(values, i)
        // swap the elements
        let temp = values.getElement(minPos)
        await values.setElement(values.getElement(i), minPos)
        values.setElement(temp, i)
    }
}

async function insertionSort(values) {
    for (let i=1; i < values.size; i++) {
        let nextVal = values.getElement(i)
        let j = i 
        while (j > 0 && values.getElement(j - 1) > nextVal) {
            await values.setElement(values.getElement(j - 1), j)
            j -= 1
        }
        values.setElement(nextVal, j)
    }
}
// TODO: to be implemented
function quickSort() {
}

export {selectionSort}