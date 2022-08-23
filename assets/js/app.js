const cardButtons = document.getElementsByClassName('selectBtn');

for (btn of cardButtons) {
     btn.addEventListener('click', function (event) {
        const name = event.target.previousElementSibling.previousElementSibling;
        const playerList = document.querySelectorAll('#selectList li');
        const playerListNumber = playerList.length
        if (playerListNumber <= 4) {
          
            createListIteam(name);
             
        }
        else {
            alert('You can not select more than 5 player')
        }
    });
}


let playerTotalExpense;
 
const totalPlayerCost = document.getElementById('Calculate').addEventListener('click',function(){
        const perPlayerCost = getDataFromInput('perPlaerCost');
        const playerList = document.querySelectorAll('#selectList li');
        const playerListNumber = playerList.length
  
     
   if(playerListNumber === 0){
        alert('please select atlest one player to calculate player cost')
    }
    else if(isNaN(perPlayerCost)){
        alert('Please enter Per Player Cost in number')
    }
    else{
         playerTotalExpense = perPlayerCost * playerListNumber;
        setDataIntoInput('playerTotalEx',playerTotalExpense)

    //   if(playerTotalExpense === 0){
       

    //   }

    }
})

const totalExpense = document.getElementById('calculateTotal').addEventListener('click',function(){
    const managerCost = getDataFromInput('manageCost');
    const coachCost = getDataFromInput('coachCost');
    
    if(playerTotalExpense === undefined){
        alert('Please selec atleast one player to calculate')
    }
 
    else{
        if(isNaN(managerCost,coachCost)){
            alert('Please enter Manger and Coach cost to proceed')
            
           
        }
        else if(isNaN(coachCost)){
            alert('Please enter Manger and Coach cost to proceed')
        }
        else{
            const total = playerTotalExpense + managerCost + coachCost;
          
            setDataIntoInput('totalExpense',total);
        }
    }  
});








// if(playerList.length == 0){
//     const p = document.createElement('p');
//     p.innerText = 'please select player to show'
//     const selectUlList = document.getElementById('selectList');
//     selectUlList.appendChild(p);
     
// }

//   if(btn.hasAttribute('disabled')){
        //        console.log(hi)
        //   }
        //     const button = btn;
        //     button.classList.add('disabled');
        //     button.setAttribute('disabled', true)
        //     button.getAttribute('disabled')
        //     console.log(button);


























