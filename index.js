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

})