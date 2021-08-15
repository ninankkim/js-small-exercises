
function tipAmount(bill, level) {
    if (level === "bad") {
        bill += bill * .1 
        return "The total amount is" + " " + bill
    }
    else if (level == "good") {
        bill += bill * .15
        return "The total amount is" + " " + bill
    }
    else {
            (level == "excellent") 
            bill += bill * .2;
            return "The total amount is" + " " + bill
    }
}

console.log(tipAmount(389213, "bad"))