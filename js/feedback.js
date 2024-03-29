const feedback = document.querySelector(".feedback-form");
const feedback_popup = document.querySelector(".feedback-form form");
const feedback_name = feedback_popup.querySelector("[name=name]");
const feedback_email = feedback_popup.querySelector("[name=email]");
const feedback_message = feedback_popup.querySelector("[name=message]");
const feedback_open = document.querySelector(".map_info .button");
const feedback_close = feedback.querySelector(".feedback-close");
const body_tag = document.querySelector("body");
let name_storage = localStorage.getItem("name");
let email_storage = localStorage.getItem("email");
let check_error = function(input){
    if(!input.value){
        input.classList.add("feedback-error");
    } else{
        input.classList.remove("feedback-error");
    }
}
feedback_open.addEventListener("click", function(evt){
    evt.preventDefault();
    feedback.classList.remove("display-none");
    if(name_storage && email_storage){
        feedback_name.value = name_storage;
        feedback_email.value = email_storage;
        feedback_message.focus();
    } else if(name_storage){
        feedback_name.value = name_storage;
        feedback_email.focus();
    } else{
        feedback_email.value = email_storage;
        feedback_name.focus();
    }
    let back_site_div = document.createElement("a");
    back_site_div.classList.add("back-site");
    back_site_div.href = "#";
    body_tag.appendChild(back_site_div);
    body_tag.style = "overflow: hidden;";

    back_site_div.addEventListener("click", function(evt){
        evt.preventDefault();
        feedback_name.classList.remove("feedback-error");
        feedback_email.classList.remove("feedback-error");
        feedback_message.classList.remove("feedback-error");
        feedback.classList.add("display-none");
        body_tag.style = "overflow: visible;";

        let div_back = document.getElementsByClassName("back-site");
        div_back[0].parentNode.removeChild(div_back[0]);
    });
});

feedback_popup.addEventListener("submit", function(evt){
    if(!feedback_name.value || !feedback_email.value || !feedback_message.value){
        evt.preventDefault();
        check_error(feedback_name);
        check_error(feedback_email);
        check_error(feedback_message);
    } else {
        localStorage.setItem("name",feedback_name.value);
        localStorage.setItem("email",feedback_email.value);
    }
});

feedback_close.addEventListener("click",function(evt){
    evt.preventDefault();
    feedback_name.classList.remove("feedback-error");
    feedback_email.classList.remove("feedback-error");
    feedback_message.classList.remove("feedback-error");
    feedback.classList.add("display-none");
    body_tag.style = "overflow: visible;";

    let div_back = document.getElementsByClassName("back-site");
    div_back[0].parentNode.removeChild(div_back[0]);
});

window.addEventListener("keydown",function(evt){
    if(evt.keyCode === 27){
        if(!feedback.classList.contains("display-none")){
            feedback_name.classList.remove("feedback-error");
            feedback_email.classList.remove("feedback-error");
            feedback_message.classList.remove("feedback-error");
            feedback.classList.add("display-none");
            body_tag.style = "overflow: visible;";

            let div_back = document.getElementsByClassName("back-site");
            div_back[0].parentNode.removeChild(div_back[0]);
        }
    }
});
