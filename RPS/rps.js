
const REQUESTPLAY = document.querySelector('#requestPlay');
const ACTUALPLAY = document.querySelector('#actualPlay');

const FORMANS = document.forms['frmUsrAns'];
// const FORMANS2 = REQUESTPLAY.querySelector('#frmUsrAns');

const FORMPLAY = document.forms['frmUsrPlay'];

const USERMSG = document.querySelector('#dispMsg');
var msgWinner;


FORMANS.addEventListener('submit',function(e){
    e.preventDefault(); //clicking add button refreshes the page rn
    const USERANS = FORMANS.querySelector('input[type="text"]');   
    var lUserAns = USERANS.value.toLowerCase();

    if(! (lUserAns === 'n' || lUserAns ==='y')){
        alert(' Enter y or n ');
        USERANS.focus();
    } else if(lUserAns === 'n'){
        //show msg
        USERMSG.innerHTML = '<p> Too bad you don\'t want to play. Have a nice day! </p>';
    }else{
        this.style.display = 'none';
        USERMSG.innerHTML = '';
        USERMSG.style.display = 'none';
        ACTUALPLAY.style.display = 'block';
        FORMPLAY.addEventListener('submit',evaluatePlay);

    }
});

function evaluatePlay(e){
    e.preventDefault();
    var usrChoice = FORMPLAY.usrChoice.value;

    if (usrChoice === ''){
        alert('Please enter rock, paper, or scissor');
        FORMPLAY.focus();
    }else{
        //generate computer choice
        var compChoice = Math.floor(Math.random()*3);
            if (compChoice === 0){
                compChoice = 'rock';
            } else if(compChoice === 1){
                compChoice = 'paper';
            } else { 
                compChoice = 'scissor';
            }

        //calculate winner
        var msgWinner;
        if (usrChoice === compChoice){
            msgWinner = 'There is a tie on '+ compChoice + '. Lets try again.';
        } else if(usrChoice === 'rock' && compChoice === 'paper'){
            msgWinner = 'You chose '+usrChoice+'. Computer chose '+compChoice+ '. Paper covers rock. You lose';
        } else if(usrChoice === 'rock' && compChoice === 'scissor'){
            msgWinner = 'You chose '+usrChoice+'. Computer chose '+compChoice+ '. Rock destroys scissor. You win';
        }else if(usrChoice === 'paper' && compChoice === 'rock'){
                msgWinner = 'You chose '+usrChoice+'. Computer chose '+compChoice+ '. Paper covers rock. You win';
        }else if(usrChoice === 'paper' && compChoice === 'scissor'){
                msgWinner = 'You chose '+usrChoice+'. Computer chose '+compChoice+ '. Scissor cuts paper. You lose';
        }else if(usrChoice === 'scissor' && compChoice === 'rock'){
                msgWinner = 'You chose '+usrChoice+'. Computer chose '+compChoice+ '. Rock destroys scissor. You lose';
        }else if(usrChoice === 'scissor' && compChoice === 'paper'){
                msgWinner = 'You chose '+usrChoice+'. Computer chose '+compChoice+ '. Scissor cuts paper. You win';     
        }                           

        var el = ACTUALPLAY.querySelector('#winner');
        console.log(el);
        if( !(el == null)){
            console.log('delete previous game result');
            // ACTUALPLAY.remove(el);
            // ACTUALPLAY.getElementbyId('winner').remove();
            el.remove();
        }
        var elChoice = document.createElement('p');
        elChoice.append(msgWinner);
        elChoice.setAttribute('id','winner');
        ACTUALPLAY.appendChild(elChoice);
    }
};





