const readlineSync = require('readline-sync');

// Game Initialization
function startGame() {
    const playerName = readlineSync.question("Enter your name, brave adventurer: ");
    let health = 100;
    let gold = 50;
    let inventory = ["sword"];
    let activeEffects = [];

    console.log(`\nWelcome, ${playerName}! Your adventure begins.\n`);

    //  Main Game Loop 
    while (health > 0) {
        const event = ["monster", "chest", "nothing"][Math.floor(Math.random() * 3)];

        if (event == "monster") {
            ({ health, gold, activeEffects } = battleMonster(health, gold, activeEffects));
        } else if (event == "chest") {
            inventory = openChest(inventory);
        } else {
            console.log("The room is empty.\n");
        }

        console.log(`Status => Health: ${health}, Gold: ${gold}, Inventory: [${inventory}], Active Effects: [${activeEffects}]\n`);

        const choice = readlineSync.question("Do you want to [continue], [use item], or [quit]? ").toLowerCase();

        if (choice == "use item") {
            ({ health, activeEffects, inventory } = useItem(health, activeEffects, inventory));
        } else if (choice == "quit") {
            console.log("You leave the dungeon with your loot. Farewell!");
            break;
        }
    }

    if (health <= 0) {
        console.log("You have fallen in battle. Game Over.");
    }
}

// Monster Battle 
function battleMonster(health, gold, activeEffects) {
    const monsters = ["Goblin", "Skeleton", "Orc"];
    const monster = monsters[Math.floor(Math.random() * monsters.length)];
    let monsterHealth = Math.floor(Math.random() * 21) + 20; // 20–40

    console.log(`A wild ${monster} appears with ${monsterHealth} HP!\n`);

    while (monsterHealth > 0 && health > 0) {
        const action = readlineSync.question("Do you want to [attack] or [run]? ").toLowerCase();

        if (action == "attack") {
            let damage = Math.floor(Math.random() * 11) + 5; // 5–15
            if (activeEffects.includes("amulet")) {
                damage += 5;
                activeEffects = activeEffects.filter(e => e !== "amulet");
                console.log("Your amulet glows, adding +5 damage!");
            }
            monsterHealth -= damage;
            console.log(`You hit the ${monster} for ${damage} damage!`);

            if (monsterHealth > 0) {
                let monsterDamage = Math.floor(Math.random() * 8) + 5; // 5–12
                if (activeEffects.includes("shield")) {
                    monsterDamage = Math.floor(monsterDamage / 2);
                    activeEffects = activeEffects.filter(e => e !== "shield");
                    console.log("Your shield absorbs part of the damage!");
                }
                health -= monsterDamage;
                console.log(`${monster} hits you for ${monsterDamage} damage!`);
            }
        } else if (action === "run") {
            console.log("You run away safely!");
            return { health, gold, activeEffects };
        }
    }

    if (health > 0) {
        const reward = Math.floor(Math.random() * 21) + 10; // 10–30 gold
        gold += reward;
        console.log(`You defeated the ${monster}! You earn ${reward} gold.\n`);
    }

    return { health, gold, activeEffects };
}

// Chest 
function openChest(inventory) {
    const items = ["potion", "shield", "amulet"];
    const item = items[Math.floor(Math.random() * items.length)];
    inventory.push(item);
    console.log(`You found a ${item} in the chest!\n`);
    return inventory;
}

// Use Item 
function useItem(health, activeEffects, inventory) {
    if (inventory.length === 0) {
        console.log("No items to use!\n");
        return { health, activeEffects, inventory };
    }

    console.log(`Inventory: [${inventory}]`);
    const item = readlineSync.question("Which item do you want to use? ").toLowerCase();

    if (!inventory.includes(item)) {
        console.log("You don't have that item!\n");
        return { health, activeEffects, inventory };
    }

    if (item === "potion") {
        health += 20;
        console.log("You use a potion and regain 20 health!\n");
    } else if (item === "shield") {
        activeEffects.push("shield");
        console.log("You equip the shield. It will block part of the next attack!\n");
    } else if (item === "amulet") {
        activeEffects.push("amulet");
        console.log("You activate the amulet. Your next attack is stronger!\n");
    }

    inventory = inventory.filter(i => i !== item);
    return { health, activeEffects, inventory };
}

//  Start the Game 
startGame();
