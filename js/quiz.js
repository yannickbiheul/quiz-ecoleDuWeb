// BLOCS QUESTIONS
let question = document.getElementsByClassName("question");

// QUESTION 1
let reponse1q1 = document.getElementById("q1r1");
let reponse2q1 = document.getElementById("q1r2");
let reponse3q1 = document.getElementById("q1r3");
let reponse4q1 = document.getElementById("q1r4");
let reponsesQ1 = [reponse1q1, reponse2q1, reponse3q1, reponse4q1];
let bonneReponse1q1 = "q1r3";
let userReponse1 = "";

for (let i = 0; i < reponsesQ1.length; i++) {
    reponsesQ1[i].addEventListener("click", function() {
        userReponse1 = reponsesQ1[i].value;
        console.log(userReponse1);
        if (userReponse1 == bonneReponse1q1) {
            question[0].style.backgroundColor = "var(--green)";
        } else {
            question[0].style.backgroundColor = "var(--red)";
        }
    })
}

