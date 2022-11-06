const input = document.querySelector("#price");
const btnConf = document.querySelector(".count");
const people = document.querySelector("#people")
const procent = document.querySelector("#tip")
const option = document.querySelectorAll("option")
const cost_info = document.querySelector(".cost-info")
const cost = document.querySelector(".cost")
const error = document.querySelector(".error")

const test = () => {
    for(let i = 0; option.length > i; i++){

        if (procent.value == option[i].value ){
            const a = parseFloat(procent.value);
            const b = parseFloat(option[i].value);
            const sum = a * input.value
            const inpu = parseInt(input.value)
            const peopleInt = parseInt(people.value)
            const result = (inpu + sum) / peopleInt ;
            cost.textContent = result
            cost_info.style.display = "block"      
        }

        if(input.value == "" || procent.value =="" || people.value ==""){
            error.textContent = "All fields must be completed"
            cost_info.style.display = "none"  
        }
        else {
            error.textContent = ""
        }
    }  
}

btnConf.addEventListener("click", test)