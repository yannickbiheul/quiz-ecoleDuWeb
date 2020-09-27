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
    })
}

// QUESTION 2
let reponse1q2 = document.getElementById("q2r1");
let reponse2q2 = document.getElementById("q2r2");
let reponse3q2 = document.getElementById("q2r3");
let reponse4q2 = document.getElementById("q2r4");
let reponsesQ2 = [reponse1q2, reponse2q2, reponse3q2, reponse4q2];
let bonneReponse1q2 = "q2r4";
let userReponse2 = "";

for (let i = 0; i < reponsesQ2.length; i++) {
    reponsesQ2[i].addEventListener("click", function () {
        userReponse2 = reponsesQ2[i].value;
        console.log(userReponse2);
    })
}

// QUESTION 3
let reponse1q3 = document.getElementById("q3r1");
let reponse2q3 = document.getElementById("q3r2");
let reponse3q3 = document.getElementById("q3r3");
let reponse4q3 = document.getElementById("q3r4");
let reponsesQ3 = [reponse1q3, reponse2q3, reponse3q3, reponse4q3];
let bonneReponse1q3 = "q3r3";
let userReponse3 = "";

for (let i = 0; i < reponsesQ3.length; i++) {
    reponsesQ3[i].addEventListener("click", function () {
        userReponse3 = reponsesQ3[i].value;
        console.log(userReponse3);
    })
}