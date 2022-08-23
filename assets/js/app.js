const cardButtons = document.getElementsByClassName('selectBtn');
for (const button of cardButtons) {
    button.addEventListener('click', function (event) {
        const name = event.target.previousElementSibling.previousElementSibling;
        const playerListNumber = checkListIteams();
        if (playerListNumber <= 4) {
            createListIteam(name);
            button.classList.add('disabled');
            button.setAttribute('disabled', true)
            if (playerListNumber == 0) {
                const emptyPlayerList = document.getElementById('playerListEmpty');
                emptyPlayerList.style.display = 'none';
            }
        }
        else {
            alert('You can not select more than 5 player')
        }
    });
}

let playerTotalExpense;
const totalPlayerCost = document.getElementById('Calculate').addEventListener('click', function () {
    const perPlayerCost = getDataFromInput('perPlaerCost');
    const playerListNumber = checkListIteams();
    if (playerListNumber === 0) {
        alert('Please Select Atlest One Player to Calculate Player Expenses')
    }
    else if (isNaN(perPlayerCost)) {
        alert('Please enter Per Player Cost to Calculate Player Expenses')
    }
    else if (perPlayerCost < 0) {
        alert('Please enter positive amount')
    }
    else {
        playerTotalExpense = perPlayerCost * playerListNumber;
        setDataIntoInput('playerTotalEx', playerTotalExpense)
    }
})

const totalExpense = document.getElementById('calculateTotal').addEventListener('click', function () {
    const managerCost = getDataFromInput('manageCost');
    const coachCost = getDataFromInput('coachCost');
    const playerListNumber = checkListIteams();
    if (playerListNumber === 0) {
        alert('Please Select Atlest One Player to Calculate Player Expenses')
    }
    else if (playerTotalExpense === undefined) {
        alert('Please enter Per Player Cost ')
    }
    else {
        if (isNaN(managerCost)) {
            alert('Please enter Manager  cost to Calculate Total Expense')
        }
        else if (isNaN(coachCost)) {
            alert('Please enter Coach cost to Calculate Total Expense')
        }
        else {
            const total = playerTotalExpense + managerCost + coachCost;
            setDataIntoInput('totalExpense', total);
        }
    }
});