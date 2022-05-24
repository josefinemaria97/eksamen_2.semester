const quizData = [
    {
        question:" Kan beskidt pap genanvendes? ",
        a: " Ja, hvis det kun er en smule beskidt ",
        b: " Nej, pappet skal være helt tørt og rent ",
        c:" Ja, det er lige meget. Pap er pap ",
        correct: "a",
    },

    {
        question:" Hvordan tester du om affald skal skylles? ",
        a:" Affaldet skal altid være helt rent før det kan sorteres ",
        b:" Hvis du har lyst til at vende bunden i vejret over dit hoved, så er den ren nok ",
        c:" Det gør ikke noget at affaldet er beskidt, det bliver alligevel brændt ",
        correct:  "b",
    },

    {
        question:" Kan beskidt glas genanvendes? ",
        a:" Alle glas skal være helt rene og skyllet før de må smides i glascontaineren ",
        b:" I de fleste kommuner acceptere de et skrabet glas. Men ellers gælder tommelfingerreglen også her ",
        c:" Dine glas må gerne være fyldt med syltetøj ",
       
        correct:  "b",
    },

    {
        question:" Hvad sker der med det affald vi sortere? ",
        a:" Det bliver genanvendt til nyt ",
        b:" Det nytter ikke at sortere, det hele bliver alligevel blandet sammen i skraldebilen ",
        c:" ingen ide, det ligemeget at sortere vores affald, det gør intet godt ",
        correct:  "a",
    },

    {
        question:"Er det lige meget hvor meget vand man bruger til at skylle med? ",
        a:" Ja, vand kommer fra en utømmelig ønskebrønd. Så det behøver vi ikke spare på ",
        b:" Nej, brug så lidt vand som muligt. På den måde passer vi på klodens ressourcer ",
        c:" Så længe det rent vand, kan vi bare bruge løs ",
       
        correct:  "b",
    },

    {
        question:" Kan man bruge beskidt opvaskevand til at skylle efter med? ",
        a:" Sagtens, vent evt. med at skylle dit affald til du har taget opvasken ",
        b:" Nej, så er affaldet jo ikke blevet rent ",
        c:" Nej, det skal smides ud med det samme ",
        correct:  "a",
    },

    {
        question:" Kan man nøjes med at skrabe glasset inden det kommer i containeren? ",
        a:" I de fleste kommuner JA. Men tjek evt. din kommunes affaldsservice ",
        b:" Uanset hvor beskidt glasset er, kan det smides direkte af glascontaineren ",
        c:" Glasset skal altid være helt rent.",
        correct:  "a",
    },

    {
        question:" Skal man skille pap og plastik fra hinanden hvis det er en del af samme emballage? ",
        a:" Nej, ikke når det er den del af samme emballage ",
        b:" Ja, hvis emballagen både indeholder pap og plastik skal det skilles fra hinanden ",
        c:" Nej, det ligemeget, det bliver sortereet ",
        correct:  "b",
    }

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){  

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}



function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)

}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',() => {
    const answer =  getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        }  else{

 //) det er her problemet er
            quiz.innerHTML=  `
            <h2> Du svarede  ${score}/${quizData.length} Spørgsmål korrekt </h2>
            
            <button onclick="location.reload()">Reload</button
            `

                  
        }
    }

})



