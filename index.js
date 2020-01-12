document.addEventListener("DOMContentLoaded",() => {
    //let inputValue = document.querySelector("input").value
    let button = document.querySelector("button")

    button.addEventListener('click',async(e) => {
        e.preventDefault()
        let ul = document.querySelector("ul")
        let li = document.createElement('li')
        let inputValue = document.querySelector("input")
        res = await axios.get(`http://localhost:3000/animal/${inputValue.value}`)
        let data = res.data
        debugger
        li.innerHTML = ""
        li.innerText = data.status
      //let h1 = document.querySelector('h1')
      ul.appendChild(li)
       })
//question 2:
let random = document.querySelector("button")
random.addEventListener('click', (e) => {
    e.preventDefault()
    let input1 = document.querySelector("#num1").value
    let input2 = document.querySelector("#num2").value
    res = await axios.get('http://localhost:3000/random')
    let data = res.data
    debugger

})



})