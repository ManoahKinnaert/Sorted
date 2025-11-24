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

function select_sort_type(type) {
    sort_btn.disabled = false  
}

function reset() {
   for (const [key, btn] of Object.entries(sorting_btns)) btn.disabled = false
   sort_btn.disabled = true 
}

function do_sort() {
    console.log("[DEBUG]: Starting sort")
    sort_btn.disabled = true
    reset_btn.disabled = true
    for (const [key, btn] of Object.entries(sorting_btns)) btn.disabled = true
    // TODO: perform the sort
    
    reset_btn.disabled = false 
}