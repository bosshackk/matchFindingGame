document.addEventListener('DOMContentLoaded',() =>{
    //card options
    const cardArray= [
        {
            name:'taj',
            img:'imagesforapp1/tajmahal.jpg'
        }, 
        {
            name:'itza',
            img:'imagesforapp1/Chichen_Itza.jpg'
        },
        {
            name:'colosseum',
            img:'imagesforapp1/colosseum.jpg'
        },
        {
            name:'wall',
            img:'imagesforapp1/great-wall-of-china.jpg'
        },
        {
            name:'petra',
            img:'imagesforapp1/petra.jpg'
        },
        {
            name:'redeemer',
            img:'imagesforapp1/christ_redeemer.jpg'
        },
        {
            name:'taj',
            img:'imagesforapp1/tajmahal.jpg'
        },
        {
            name:'itza',
            img:'imagesforapp1/Chichen_Itza.jpg'
        },
        {
            name:'colosseum',
            img:'imagesforapp1/colosseum.jpg'
        },
        {
            name:'wall',
            img:'imagesforapp1/great-wall-of-china.jpg'
        },
        {
            name:'petra',
            img:'imagesforapp1/petra.jpg'
        },
        {
            name:'redeemer',
            img:'imagesforapp1/christ_redeemer.jpg'
        }  
    ]
    //get randomised array every time
    cardArray.sort(()=>0.5-Math.random())
    //declarations
    const grid = document.querySelector('.grid')
    const resultDisplay=document.querySelector('#result')
    var cardsChosen=[]
    var cardsChosenId=[]
    var cardsWon=[]
    //create your board
    function createBoard(){
        cardArray.sort(()=>0.5-Math.random())
        for (let i = 0; i < cardArray.length; i++) {
            /* const element = array[i]; */
            var card=document.createElement('img')
            card.style.border="1px solid red"
            card.setAttribute('src','imagesforapp1/green.jpg')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }
    //check for matches
    function checkForMatch(){
        var cards=document.querySelectorAll('img')
        const optionOneId=cardsChosenId[0]
        const optionTwoId=cardsChosenId[1]
        if (cardsChosen[0]===cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src',  'imagesforapp1/white.jpg')
            cards[optionTwoId].setAttribute('src',  'imagesforapp1/white.jpg')
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src',  'imagesforapp1/green.jpg')
            cards[optionTwoId].setAttribute('src',  'imagesforapp1/green.jpg')
            alert('sorry try again')
        }
        cardsChosen=[]
        cardsChosenId=[]
        resultDisplay.textContent=cardsWon.length
        if (cardsWon.length===cardArray.length/2) {
            resultDisplay.textContent='Congratulation! You  found them all'
        }
    }
    //flip your card
    function flipcard(){
        var cardId= this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if (cardsChosen.length==2) {
            setTimeout(checkForMatch,500)
        }
    }
    //
    function clock() {
        var myTimer = setInterval(myClock, 1000);
        var c = 1;
   
        function myClock() {
          document.getElementById("timePassed").innerHTML = c++;
          if (c == 124 ) {
            clearInterval(myTimer);
            alert("Time over");
            window.location.reload();
          }
        }
      }
    createBoard()
    clock()
})