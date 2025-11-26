import { DataArray } from './data.js'
import {insertionSort, quickSort, selectionSort} from './sorted.js'

let dataArray = new DataArray(null)
let sortType = ""

let sorting_btns = {
    "insertion_btn": document.getElementById("insertion_btn"), 
    "selection_btn": document.getElementById("selection_btn"),
    "quick_btn": document.getElementById("quick_btn"),
    "merge_btn": document.getElementById("merge_btn")
}

let sort_btn = document.getElementById("sort_btn")
let reset_btn = document.getElementById("reset_btn")

sorting_btns["insertion_btn"].onclick = () => {select_sort_type("insertion_btn")}
sorting_btns["selection_btn"].onclick = () => {select_sort_type("selection_btn")}
sorting_btns["quick_btn"].onclick = () => {select_sort_type("quick_btn")}
sorting_btns["merge_btn"].onclick = () => {select_sort_type("merge_btn")}
sort_btn.onclick = () => {do_sort()}
reset_btn.onclick = () => {reset()}

window.onload = () =>  {
    renderTable()
}

function renderTable() {
    
    dataArray.generateArray(40, 10, 40)
    let table = document.getElementById("array-container")
    let html = ""
    html += dataArray.getHtml()

    table.innerHTML = html
}


function select_sort_type(type) {
    sort_btn.disabled = false
    sortType = type

}

function reset() {
   for (const [key, btn] of Object.entries(sorting_btns)) btn.disabled = false
   sort_btn.disabled = true
   renderTable() 
}

function do_sort() {
    console.log("[DEBUG]: Starting sort")
    sort_btn.disabled = true
    reset_btn.disabled = true
    for (const [key, btn] of Object.entries(sorting_btns)) btn.disabled = true
    // TODO: perform the sort
    console.log(sortType)
    if (sortType === "selection_btn") {
        selectionSort(dataArray)
    } else if (sortType === "insertion_btn") {
        insertionSort(dataArray)
    } else if (sortType === "quick_btn") {
        quickSort(dataArray, 0, dataArray.values.length - 1)
    }
    
    reset_btn.disabled = false 
}