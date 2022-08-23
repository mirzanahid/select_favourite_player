function createListIteam(playerName) {
    const nameInner = playerName.innerText;
    const li = document.createElement('li');
    li.innerText = nameInner;
    const selectUlList = document.getElementById('selectList');
    selectUlList.appendChild(li);
}

function getDataFromInput(perPlaerCost){
    const inputField = document.getElementById(perPlaerCost)  
    const inputFieldString = inputField.value;
    const inputStringToNumber = parseInt(inputFieldString);
    return inputStringToNumber;
}

function setDataIntoInput(elementId,elementValue){
    const playerExpense = document.getElementById(elementId);
    playerExpense.innerText = elementValue;
}


function checkListIteams(){
    const playerList = document.querySelectorAll('#selectList li');
    const playerListLength = playerList.length
    return playerListLength;
}
