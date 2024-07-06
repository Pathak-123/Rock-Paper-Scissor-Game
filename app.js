let con = document.querySelectorAll(".con");
let computer= document.querySelectorAll(".computer");
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let winModal=document.querySelector(".win-div");
let winner=document.querySelector(".winner");
let play=document.querySelector(".play");
let userScore=JSON.parse(localStorage.getItem("userScore"));
let userScoreElem=document.getElementById("userScore");
let next_button=document.getElementById("next-id");
let rule_button = document.getElementById("rule-id");
let ringAnimationContainer = document.getElementById("ring-animation-container");
let rule_button_win = document.getElementById("rule-id-win");
if(userScore){
    userScoreElem.innerText=userScore;
}
let computerScore=JSON.parse(localStorage.getItem("computerScore"));
let computerScoreElem=document.getElementById("computerScore");
if(computerScore){
    computerScoreElem.innerText=computerScore;
}
let userCount=0;
let computerCount=0;
let random=Math.floor(Math.random()*3);
con.forEach((element,index) => {
    element.addEventListener("click",()=>{
        user.style.opacity="1";
        con.forEach(item =>{
            item.style.display="none";
        })
        document.getElementById("line_hide").style.display="none";
        element.style.display="block";
        element.classList.add("show");
       
        
        setTimeout(()=>{
            setTimeout(()=>{
                computer[random].style.display="block";
            computer[random].classList.add("right")
            machine.style.opacity="1";

            },1000);
            setTimeout(()=>{
                if(random==index){
                    winModal.style.display="grid";
                    winner.innerText="Tie Up";

                }
                else if(index==1 && random==0 || index==0 && random==2 || index==2 && random==1){
                   winModal.style.display="grid";
                   winner.innerText="You Win";
                   userCount=userScore;
                   userCount++;
                   userScoreElem.innerText=userCount;
                   showRingAnimation(element);
                //    element.appendChild(ringAnimationContainer);
                //    ringAnimationContainer.style.display = "block";
                   localStorage.setItem("userScore",JSON.stringify(userCount));
                   next_button.style.display="block";

                } else{
                    winModal.style.display="grid";
                    winner.innerText="You Loose";
                    computerCount=computerScore;
                   computerCount++;
                   showRingAnimation(computer[random]); 
                   computerScoreElem.innerText=computerCount;
                   localStorage.setItem("computerScore",JSON.stringify(computerCount));

                }
            },1000)

        },500)
       
    })
});
play.addEventListener("click",()=>{
    window.location.reload();
})
document.getElementById('next-id').addEventListener('click', () => {
    const content = document.getElementById('content');
    const winMessage = document.getElementById('winMessage');
    content.classList.add('hidden');
    winMessage.style.display="flex";
    rule_button_win.style.display = "inline-block";
});
document.getElementById("refreshme").addEventListener('click',()=>{
    window.location.reload();
});
document.getElementById('rule-id').addEventListener('click', () => {
    const rulePopup = document.getElementById('rule-popup');
    rulePopup.classList.remove('hidden');
});

document.getElementById('close-rule').addEventListener('click', () => {
    const rulePopup = document.getElementById('rule-popup');
    rulePopup.classList.add('hidden');
});
const winRuleButton = document.getElementById('rule-id-win');
const winRulePopup = document.getElementById('win-rule-popup');

winRuleButton.addEventListener('click', () => {
    winRulePopup.classList.remove('hidden');
});
document.getElementById('close-win-rule').addEventListener('click', () => {
    winRulePopup.classList.add('hidden');
});
function showRingAnimation(element) {
    element.appendChild(ringAnimationContainer);
    ringAnimationContainer.style.display = "block";
}
