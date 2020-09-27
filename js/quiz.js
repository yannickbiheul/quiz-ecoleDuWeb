// BLOCS QUESTIONS
let questions = document.getElementsByClassName("questions");
let userReponses = [];

// QUESTION 1
let reponse1q1 = document.getElementById("q1r1");
let reponse2q1 = document.getElementById("q1r2");
let reponse3q1 = document.getElementById("q1r3");
let reponse4q1 = document.getElementById("q1r4");
let reponsesQ1 = [reponse1q1, reponse2q1, reponse3q1, reponse4q1];
let bonneReponseq1 = "q1r3";
let userReponse1 = "";
let validReponse1 = false;

for (let i = 0; i < reponsesQ1.length; i++) {
    reponsesQ1[i].addEventListener("click", function() {
        if (reponsesQ1[i].value) {
            userReponse1 = reponsesQ1[i].value;
        }
        if (userReponse1 == bonneReponseq1) {
            userReponses.push(userReponse1);
            validReponse1 = true;
        } else {
            userReponses.push(userReponse1);
            validReponse1 = true;
        }
    })
}

// QUESTION 2
let reponse1q2 = document.getElementById("q2r1");
let reponse2q2 = document.getElementById("q2r2");
let reponse3q2 = document.getElementById("q2r3");
let reponse4q2 = document.getElementById("q2r4");
let reponsesQ2 = [reponse1q2, reponse2q2, reponse3q2, reponse4q2];
let bonneReponseq2 = "q2r4";
let userReponse2 = "";
let validReponse2 = false;

for (let i = 0; i < reponsesQ2.length; i++) {
    reponsesQ2[i].addEventListener("click", function () {
        if (reponsesQ1[i].value) {
            userReponse2 = reponsesQ2[i].value;
        }
        if (userReponse2 == bonneReponseq2) {
            userReponses.push(userReponse2);
            validReponse2 = true;
        } else {
            userReponses.push(userReponse2);
            validReponse2 = true;
        }
    })
}

// QUESTION 3
let reponse1q3 = document.getElementById("q3r1");
let reponse2q3 = document.getElementById("q3r2");
let reponse3q3 = document.getElementById("q3r3");
let reponse4q3 = document.getElementById("q3r4");
let reponsesQ3 = [reponse1q3, reponse2q3, reponse3q3, reponse4q3];
let bonneReponseq3 = "q3r3";
let userReponse3 = "";
let validReponse3 = false;

for (let i = 0; i < reponsesQ3.length; i++) {
    reponsesQ3[i].addEventListener("click", function () {
        if (reponsesQ3[i].value) {
            userReponse3 = reponsesQ3[i].value;
        }
        if (userReponse3 == bonneReponseq3) {
            userReponses.push(userReponse3);
            validReponse3 = true;
        } else {
            userReponses.push(userReponse3);
            validReponse3 = true;
        }
    })
}

// QUESTION 4
let reponse1q4 = document.getElementById("q4r1");
let reponse2q4 = document.getElementById("q4r2");
let reponse3q4 = document.getElementById("q4r3");
let reponse4q4 = document.getElementById("q4r4");
let reponsesQ4 = [reponse1q4, reponse2q4, reponse3q4, reponse4q4];
let bonneReponseq4 = "q4r3";
let userReponse4 = "";
let validReponse4 = false;

for (let i = 0; i < reponsesQ4.length; i++) {
    reponsesQ4[i].addEventListener("click", function () {
        if (reponsesQ4[i].value) {
            userReponse4 = reponsesQ4[i].value;
        }
        if (userReponse4 == bonneReponseq4) {
            userReponses.push(userReponse4);
            validReponse4 = true;
        } else {
            userReponses.push(userReponse4);
            validReponse4 = true;
        }
    })
}

// QUESTION 5
let reponse1q5 = document.getElementById("q5r1");
let reponse2q5 = document.getElementById("q5r2");
let reponse3q5 = document.getElementById("q5r3");
let reponse4q5 = document.getElementById("q5r4");
let reponsesQ5 = [reponse1q5, reponse2q5, reponse3q5, reponse4q5];
let bonneReponseq5 = "q5r2";
let userReponse5 = "";
let validReponse5 = false;

for (let i = 0; i < reponsesQ5.length; i++) {
    reponsesQ5[i].addEventListener("click", function () {
        if (reponsesQ5[i].value) {
            userReponse5 = reponsesQ5[i].value;
        }
        if (userReponse5 == bonneReponseq5) {
            userReponses.push(userReponse5);
            validReponse5 = true;
        } else {
            userReponses.push(userReponse5);
            validReponse5 = true;
        }
    })
}

// VALIDATION
let validButton = document.querySelector(".valider");
let bonnesReponses = [bonneReponseq1, bonneReponseq2, bonneReponseq3, bonneReponseq4, bonneReponseq5];
let resultat = document.querySelector(".resultat");
let scoreUser = 0;

function valider(e) {
    e.preventDefault();
    if (validReponse1 && validReponse2 && validReponse3 && validReponse4 && validReponse5) {
        validButton.textContent = "Recommencer";
        validButton.removeEventListener("click", valider);
        validButton.addEventListener("click", reStart);
        for (let i = 0; i < questions.length; i++) {
            if (userReponses[i] == bonnesReponses[i]) {
                questions[i].style.backgroundColor = "var(--green)";
                scoreUser++;
            } else {
                questions[i].style.backgroundColor = "var(--red)";
            }
            resultat.style.color = "var(--green)";
            resultat.textContent = "Vous avez obtenu la note de " + scoreUser + " sur 5 !";
        }
    } else {
        resultat.style.color = "var(--red)";
        resultat.textContent = "Il me manque des réponses !";
        console.log(userReponse1);
        console.log(userReponse2);
        console.log(userReponse3);
        console.log(userReponse4);
        console.log(userReponse5);
    }
}

function reStart(e) {
    e.preventDefault();
    let adresseActuelle = window.location.href;
    window.location = adresseActuelle;
}

validButton.addEventListener("click", valider);