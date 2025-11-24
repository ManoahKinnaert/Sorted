let insertion_btn = document.getElementById("insertion_btn")
let selection_btn = document.getElementById("selection_btn")
let quick_btn = document.getElementById("quick_btn")
let merge_btn = document.getElementById("merge_btn")

let reset_btn = document.getElementById("reset_btn")
let sort_btn = document.getElementById("sort_btn")

insertion_btn.onclick(() => {select_insertion_sort()})
selection_btn.onclick(() => {select_selection_sort()})
quick_btn.onclick(() => {select_quick_sort()})
merge_btn.onclick(() => {select_merge_sort()})
sort_btn.onclick(() => {do_sort()})

window.onload(() => {
    sort_btn.disabled = true 
})

function select_insertion_sort() {
}

function select_selection_sort() {
}

function select_quick_sort() {
}

function select_merge_sort() {
}

function do_sort() {
}