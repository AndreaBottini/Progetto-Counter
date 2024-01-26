//impostazione counter a 0
let counterNumber = 0;

//selezionare i bottoni e il counter
const count = document.getElementById("count");
console.log(count)
const buttonsToAddAndRemove = document.querySelectorAll(".button-xs");
console.log(buttonsToAddAndRemove);

buttonsToAddAndRemove.forEach(button => {
    button.addEventListener("click", function(e){
        //console.log(button)
        //console.log(e.currentTarget.classList);
        const style = e.currentTarget.classList;
        if(style.contains("minus")){
            counterNumber--;
        } else if(style.contains("plus")) {
            counterNumber++;
        } else {
            counterNumber = 0;
        }

        if(counterNumber > 0) {
            count.style.color = "green";
        } else if (counterNumber < 0) {
            count.style.color = "red";
        } else {
            count.style.color = "white"
        }

        count.textContent = counterNumber; 
    })
});



