/* ===========================================
   Password Show / Hide
=========================================== */

function togglePassword() {

    const password = document.getElementById("password");
    const eye = document.getElementById("eye");

    if (password.type === "password") {

        password.type = "text";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");

    } else {

        password.type = "password";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");

    }

}

/* ===========================================
   Login Tabs
=========================================== */

const tabs = document.querySelectorAll(".tabs button");

tabs.forEach(tab => {

    tab.addEventListener("click", function () {

        tabs.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

    });

});

/* ===========================================
   Input Focus Effect
=========================================== */

const inputs = document.querySelectorAll(".form-control");

inputs.forEach(input => {

    input.addEventListener("focus", function () {

        this.parentElement.style.boxShadow =
        "0 0 10px rgba(116,45,143,.25)";

    });

    input.addEventListener("blur", function () {

        this.parentElement.style.boxShadow = "none";

    });

});

/* ===========================================
   Login Button Animation
=========================================== */

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("mouseenter", function(){

    this.style.transform="translateY(-3px)";

});

loginBtn.addEventListener("mouseleave", function(){

    this.style.transform="translateY(0px)";

});

/* ===========================================
   Page Fade Animation
=========================================== */

window.addEventListener("load",function(){

    document.querySelector(".login-card").style.opacity="0";

    document.querySelector(".banner").style.opacity="0";

    setTimeout(()=>{

        document.querySelector(".login-card").style.transition=".7s";
        document.querySelector(".banner").style.transition=".7s";

        document.querySelector(".login-card").style.opacity="1";
        document.querySelector(".banner").style.opacity="1";

    },100);

});