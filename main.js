function createDice(num) {
    const dotPositions = {
        /* Gives us all dice dots positions */
        /* Used as matrices */
        1: [
            [50,50]
        ],
        2: [
            [20,20],
            [80,80]
        ],
        3: [
            [20,20],
            [50,50],
            [80,80]
        ],
        4: [
            [20,20],
            [20,80],
            [80,20],
            [80,80]
        ],
        5: [
            [20,20],
            [20,80],
            [50,50],
            [80,20],
            [80,80],
        ],
        6: [
            [20,20],
            [50,20],
            [80,20],
            [20,80],
            [50,80],
            [80,80]
        ]
    };
    const dice = document.createElement("div");
    dice.classList.add("dice");

    for (const dotPosition of dotPositions[num]) {
        const dot = document.createElement("div");

        dot.classList.add("dice-dots");
        dot.style.setProperty("--top", dotPosition[0] + "%");
        dot.style.setProperty("--left", dotPosition[0] + "%");
        dice.appendChild(dot);
    }

    return dice;

}
const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document.querySelector(".btn-roll-dice");

diceContainer.appendChild(createDice(6));