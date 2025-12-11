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
        await values.setElement(temp, i)
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

async function partition(values, start, to) {
    let pivot = values.getElement(start)
    let i = start - 1
    let j = to + 1 
    while (i < j) {
        i++
        while (values.getElement(i) < pivot) {
            i++
        }
        j--
        while (values.getElement(j) > pivot) {
            j--
        }
        if (i < j) {
            let temp = values.getElement(i)
            await values.setElement(values.getElement(j), i)
            await values.setElement(temp, j)
        }
    }
    return j
}

async function quickSort(values, start, to) {
    if (start >= to) {return}
    let p = await partition(values, start, to)
    quickSort(values, start, p)
    quickSort(values, p + 1, to)
}

async function mergeLists(first, second, values) {
    let i_first = 0
    let i_second = 0
    let j = 0

    while (i_first < first.getLength() && i_second < second.getLength()) {
        if (first.getElement(i_first) < second.getElement(i_second)) {
            await values.setElement(first.getElement(i_first), j)
            i_first ++
        } else {
            await values.setElement(second.getElement(i_second), j)
            i_second ++
        }
        j ++
    }

    while (i_first < first.getLength()) {
        await values.setElement(first.getEement(i_first), j)
        i_first ++
        j ++
    }

    while (i_second < second.getLength()) {
        await values.setElement(second.getElement(i_second), j)
        i_second ++ 
        j ++
    }
}

async function mergeSort(values) {
    let length = values.getLength()
    if (length <= 1) return 
    let mid = Math.floor(length / 2)
    let first = values.getSlice(0, mid - 1)
    let second = values.getSlice(mid, length - 1)
    await mergeSort(first)
    await mergeSort(second)
    await mergeLists(first, second, values)
}

export {selectionSort, insertionSort, quickSort, mergeSort}