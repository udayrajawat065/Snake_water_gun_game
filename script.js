const game = () => {
    let name1 = prompt("Enter your good name PLAYER-1:");
    let person1 = prompt(`Hi ${name1}! Enter your Selection: [snake, water, gun]`);
    
    if (person1 === "snake" || person1 === "water" || person1 === "gun") {
        let confirm1 = confirm("Your selection is: " + person1);
        if (!confirm1) return game();  
    } else {
        alert(" PLEASE ENTER A CORRECT SELECTION 💀");
        let tryAgain1 = confirm("Do you want to select again? 🤔");
        if (tryAgain1) return game();
        else return;
    }

    let name2 = prompt("Enter your good name PLAYER-2:");
    let person2 = prompt(`Hi ${name2}! Enter your Selection: [snake, water, gun]`);
    
    if (person2 === "snake" || person2 === "water" || person2 === "gun") {
        let confirm2 = confirm("Your selection is: " + person2);
        if (!confirm2) return game();  
    } else {
        alert(" PLEASE ENTER A CORRECT SELECTION 💀");
        let tryAgain2 = confirm("Do you want to select again? 🤔");
        if (tryAgain2) return game();
        else return;
    }

    
    if (person1 === person2) {
        alert(" It's a draw!");
    } else if (
        (person1 === "snake" && person2 === "water") ||
        (person1 === "water" && person2 === "gun") ||
        (person1 === "gun" && person2 === "snake")
    ) {
        alert(` Congratulations! ${name1} won the game`);
    } else {
        alert(` Congratulations! ${name2} won the game`);
    }
};

game();
