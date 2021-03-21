const slider = document.querySelector('.slider');
const body = document.querySelector('body');
const button_1 = slider.querySelector('.slider-button-1');
const button_2 = slider.querySelector('.slider-button-2');
const button_3 = slider.querySelector('.slider-button-3');
const slider_image = slider.querySelector('.slider_image');
const slider_text = slider.querySelector('p');
let buttons = [button_1,button_2,button_3]

let slider_chager = function(button,i){
    button.addEventListener('click',function(){
        let button_selecter = document.querySelector('.slider-radio-selected');
        button_selecter.classList.remove("slider-radio-selected");
        button.classList.add("slider-radio-selected")

        body.className = "page-body slider-"+(i+1);
        slider_image.src = "img/slider_"+(i+1)+".png"

        if(i == 0){
            slider_text.textContent = "Пломбир с помадкой и клубничный щербет"; 
        } 
        if(i == 1){
            slider_text.textContent = "Шоколадный пломбир и лимонный сорбет"; 
        }
        if(i == 2){
            slider_text.textContent = "Крем-брюле и пломбир с малиновым джемом"; 
        }
    })
}
for(let i = 0; i < buttons.length; i++){
    slider_chager(buttons[i],i);
}