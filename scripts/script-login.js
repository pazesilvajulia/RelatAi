function RecebeDados() {

    var nome = document.getElementById("nameid");

    if (name.value != "") {
        alert('Obrigado sr(a) ' + name.value + ' os seus dados foram encaminhados com sucesso');
    }

}

/* ------ animação slider ---------*/

let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});