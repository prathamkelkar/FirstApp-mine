let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
function increment() {
    count += 1
    countEl.innerText = count
}
let string = ""
let i = 1
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
    i+=1
    if(i==2)
    {
        string =count
    }
    else
    {
        string = string + " - "+ count
    }
    saveEl.innerText += " " + string
    countEl.textContent = 0
    count = 0
    string=""
}