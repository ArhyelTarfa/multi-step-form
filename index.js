const mainForm = document.querySelector(".general-forms")
const help = document.querySelector(".help")//check
const forms = Array.from(document.querySelectorAll(".form"))//check
const nextBtn = document.querySelectorAll(".next-btn")//check
const prevBtn = document.querySelectorAll(".prev-btn")//check
const submitBtn = document.querySelector(".submit")
const inputs =Array.from( document.querySelectorAll("input"))
const btns = document.querySelectorAll(".button")
const addons = document.querySelectorAll(".add-on")
let confirmForm = document.querySelector(".sum") 
const btnContainer  = Array.from(document.querySelectorAll(".btn-container .btn"))//check




// changing text based on season
const arcade = document.querySelector(".arcade-year")
const advanced= document.querySelector(".advanced-year")
const pro = document.querySelector(".pro-year")
const season = document.getElementById("options")

const online = document.querySelector(".online")
const larger = document.querySelector(".larger")
const customise = document.querySelector(".customise")

season.addEventListener("click",function(e){
    const {checked} = e.target
    if(checked === true){
        arcade.textContent = `$${90}/yr`
        advanced.textContent = `$${120}/yr`
        pro.textContent = `$${150}/yr`
        document.querySelectorAll(".pl").forEach(pl=>{
            pl.classList.add("pl-active")
        })
        online.textContent=`$10/yr`
        larger.textContent=`$20/yr`
        customise.textContent=`$20/yr`
    }else{

        arcade.textContent = `$${9}/mo`
        advanced.textContent = `$${12}/mo`
        pro.textContent = `$${15}/mo`
        document.querySelectorAll(".pl").forEach(pl=>{
            pl.classList.remove("pl-active")
        })
        online.textContent=`$1/mo`
        larger.textContent=`$2/mo`
        customise.innerHTML=`$2/mo`
    }
})
// end of changing text based on season

// toggle modes for form
nextBtn.forEach(function(btn){
    btn.addEventListener("click",()=>{
        changeStep("next");
    })
})
prevBtn.forEach(function(btn){
    btn.addEventListener("click",()=>{
        changeStep("prev");
    })
})


function changeStep(step){
    let index = 0;
    let index2 = 0
    const active = document.querySelector(".help .active")
    const btnactive = document.querySelector(".sidebar .active-btn")
    index = forms.indexOf(active)
    index2 = btnContainer.indexOf(btnactive)
    forms[index].classList.remove("active")
    btnContainer[index2].classList.remove("active-btn")
    if(step === "next"){
        index++
    }else if( step === "prev"){
        index--
    }
    forms[index].classList.add("active")   
    btnContainer[index].classList.add("active-btn")
}

// end of toggle mode for forms


// editing content based on user input
// plans
var btnarr =[]
btns.forEach(btn=>{
    const value = btn.children[1].children[1].innerHTML
    console.log(btn)
    btn.addEventListener('click',function(e){
        btn.classList.toggle("plan-active")
        e.target.value = `${value}`
        const name = e.target.name
        if(name){
            btnarr.push({name,value})
        }
    })
})
//end of Plans
//addons
var add =[]
addons.forEach(addon=>{
    const value = addon.children[2].textContent
    addon.addEventListener("click",function(e){
        const input = addon.childNodes[1]
        const checked   = input.checked
        e.target.value =` ${value}`
        const {name} = e.target
       if(name && checked){
        add.push({name,checked,value})
       }
    })
})
//end of addons
//submit

mainForm.addEventListener("submit",function(e){
    e.preventDefault()
    console.log()
    function firsthalf(){
        return `   
        <div class="specifics">
        <div class="specific">
        <h4 >${btnarr[0].name}</h4>
        <a href="#change"><p>change</p></a>
      </div>
      <p class="sm">${btnarr[0].value}</p>
    </div>
    <hr>`
    }
    let prr = firsthalf()
    function secondHalf(){
        let check = add.map(item=>{
            return `
            <div class="specifics">
            <div class="specific">
              <p>${item.name}</p>
            </div>
            <p class="sm">${item.value}</p>
          </div>
            `
        })
      return  check = check.join("")
    }
    let frr = secondHalf()
     confirmForm.innerHTML =   prr + frr
})
