const itemContainer = document.getElementById("item-container");
const itemCounters = document.getElementById("item-counters");
const rarityIndex = document.getElementById("rarity-index");

async function sendWebhookMessage(webhookUrl, message) {
    const data = {
        content: message,
    };

    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        console.error("Failed to send webhook message:", response.statusText);
    }
}

// you can mod this game if you want just give me credit k thx byee

const items = [
    { name: "Moon Core", rarity: 0.85 },
    { name: "Snowglobe", rarity: 0.0000005},
    { name: "Legacy Poiseon", rarity: 0.0000003 },
    { name: "Legacy Halcyon Emission", rarity: 2.941176471e-07 },
    { name: "Christmasalis", rarity: 0.00000023255812},
    { name: "Noctilucite", rarity: 0.00000012987013},
    { name: "Festivian", rarity: 0.000000074074073},
    { name: "Legacy Malachite", rarity: 8.695652174e-08 },
    { name: "Legacy Astatine", rarity: 7.142857143e-08 },
    { name: "Vaporwave Pulsar", rarity: 5.128205128e-08},
    { name: "North Star", rarity: 4.549590537e-08},
    { name: "Behemoth Snowflake", rarity: 3.333333333e-08},
    { name: "Orb of Discontent", rarity: 4e-08},
    { name: "Σ", rarity: 0.000000025},
    { name: "Dynafrost", rarity: 2.38095238e-8},
    { name: "Legacy Quasar V", rarity: 1.910584639e-08},
    { name: "Noxilenciosa", rarity: 1.818181818e-08},
    { name: "Legacy Aether", rarity: 1.72413793e-8},
    { name: "The North Pole", rarity: 1.109446941e-08},
    { name: "Aurora Polaris", rarity: 0.00000001},
    { name: "Frostblossom", rarity: 5.445436724e-09},
    { name: "Legacy Quasar 618", rarity: 0.000000001618122977},
    { name: "Epinephrine", rarity: 0.000000001000000001}
];

let itemCounts = {};

// Add a flag to indicate whether a rare item has been found
let rareItemFound = false;

items.forEach((item) => {
    itemCounts[item.name] = 0;
});

function getRandomItem() {
    const randomValue = Math.random();
    const cumulativeProbabilities = [];
    let cumulativeProbability = 0;

    for (const item of items) {
        cumulativeProbability += item.rarity;
        cumulativeProbabilities.push(cumulativeProbability);
    }

    for (let i = 0; i < cumulativeProbabilities.length; i++) {
        if (randomValue <= cumulativeProbabilities[i]) {
            return items[i];
        }
    }

    return items[0]; // Default to the first item if nothing is selected
}

// Add this code to update the game state and save it when collecting items
function collectItem() {
    const item = getRandomItem();
    itemCounts[item.name]++;

    updateItemDisplay();
    saveGameState(); // Save the game state after collecting items

    // Check if a rare item has been found
    if (item.rarity < 0.000001 && item.rarity > 0.00000011) {
        rareItemFound = true;
        const rarityValueFormatted = formatNumberWithCommas(Math.round(1 / item.rarity));

        // Create a message to send to Discord
        const webhookUrl = "https://discord.com/api/webhooks/1156031812636774482/COhSzDROD_iK3qIswEqD1F-G-ssFA5i7KpIt44hoJXZhfyNgsKT_vtY5oCleWAxaP6sU"; // Replace with your actual Discord webhook URL
        const message = `COOL THINGY FOUND 😱😱😱⁉️⁉️🙏🙏😹💯🙅‍♂️💯💯🔥🔥😱👍👍💀🙏🙏🙅‍♂️💯⁉️: ${item.name}: 1/${formatNumberWithCommas(rarityValueFormatted)}`;
    
        // Send the message to Discord
        sendWebhookMessage(webhookUrl, message);
    }
    if (item.rarity < 0.0000001 && item.rarity > 0.000000015) {
        rareItemFound = true;
        const rarityValueFormatted = formatNumberWithCommas(Math.round(1 / item.rarity));

        // Create a message to send to Discord
        const webhookUrl = "https://discord.com/api/webhooks/1156031812636774482/COhSzDROD_iK3qIswEqD1F-G-ssFA5i7KpIt44hoJXZhfyNgsKT_vtY5oCleWAxaP6sU"; // Replace with your actual Discord webhook URL
        const message = `SUPER COOL THINGY FOUND 🙅‍♂️🙅‍♂️🙅‍♂️🪨🪨🪨🪨😭😭💀🙏🙏😹😱😱⁉️: ${item.name}: 1/${formatNumberWithCommas(rarityValueFormatted)}`;

        // Send the message to Discord
        sendWebhookMessage(webhookUrl, message);
    }
    if (item.rarity < 0.000000015) {
        rareItemFound = true;
        const rarityValueFormatted = formatNumberWithCommas(Math.round(1 / item.rarity));

        // Create a message to send to Discord
        const webhookUrl = "https://discord.com/api/webhooks/1156031812636774482/COhSzDROD_iK3qIswEqD1F-G-ssFA5i7KpIt44hoJXZhfyNgsKT_vtY5oCleWAxaP6sU"; // Replace with your actual Discord webhook URL
        const message = `SUPER DUPER COOL THINGY FOUND 🗣️🗣️🪨🪨🪨🗿🗿🍷🍷💯🙏😝😭😀😭🔥🔛🔝: ${item.name}: 1/${formatNumberWithCommas(rarityValueFormatted)}`;

        // Send the message to Discord
        sendWebhookMessage(webhookUrl, message);
    }
}

function saveGameState() {
    try {
        localStorage.setItem("itemCounts", JSON.stringify(itemCounts));
    } catch (error) {
    }
}

function loadGameState() {
    try {
        const savedItemCounts = localStorage.getItem("itemCounts");

        if (savedItemCounts) {
            itemCounts = JSON.parse(savedItemCounts); // Assign the parsed game state to itemCounts
            updateItemDisplay();
        } else {
        }
    } catch (error) {
    }
}

function updateItemDisplay() {
    itemCounters.innerHTML = "";

    items.forEach((item) => {
        if (itemCounts[item.name] > 0) {
            const itemCounter = document.createElement("p");
            itemCounter.textContent = `${item.name}: ${formatNumberWithCommas(itemCounts[item.name])}`;
            itemCounters.appendChild(itemCounter);
        }
    });
}

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateRarityIndex() {
    rarityIndex.innerHTML = "<h2>Rarity Index</h2>";

    items.forEach((item) => {
        const rarityEntry = document.createElement("p");
        const rarityValueFormatted = formatNumberWithCommas(Math.round(1 / item.rarity));
        rarityEntry.textContent = `${item.name}: 1/${rarityValueFormatted}`;
        rarityIndex.appendChild(rarityEntry);
    });
}

// Set up a timer to automatically collect items every half-second
setInterval(collectItem, 1);
setInterval(collectItem, 1);
setInterval(collectItem, 1);
setInterval(collectItem, 1);
setInterval(collectItem, 1);

// Initialize the rarity index
updateRarityIndex();

// Load the game state
loadGameState();