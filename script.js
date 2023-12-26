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
    { name: "germ", rarity: 0.3 },
    { name: "dust", rarity: 0.2 },
    { name: "dirt", rarity: 0.15 },
    { name: "pebbles", rarity: 0.1 },
    { name: "UGLY DOG", rarity: 0.1 },
    { name: "a bug", rarity: 0.05 },
    { name: "grass 😱", rarity: 0.01 },
    { name: "Wood (SO BASIC 🥱)", rarity: 0.004 },
    { name: "flower", rarity: 0.002 },
    { name: "Stick", rarity: 0.002 },
    { name: "UNWANTED WEED", rarity: 0.001 },
    { name: "Fossil", rarity: 0.001 },
    { name: "ant hill", rarity: 0.0004 },
    { name: "Rare Wood (Less basic 🙂)", rarity: 0.0004 },
    { name: "a fruit (you probably dont want to eat this)", rarity: 0.0003 },
    { name: "a tree (SO COL)", rarity: 0.0002 },
    { name: "a bush (SUPER DUPER COL)", rarity: 0.000134 },
    { name: "Water Droplet", rarity: 0.00013333 },
    { name: "Stone", rarity: 0.0001 },
    { name: "Slightly less ugly dog", rarity: 0.0001 },
    { name: "Coal", rarity: 0.0001 },
    { name: "the ULTIMATE leaf", rarity: 0.00008 },
    { name: "a measly ant (NOT col)", rarity: 0.00006 },
    { name: "a stinky fart (EWWW)", rarity: 0.00004 },
    { name: "Even Rarer Wood (Not Basic 🎉)", rarity: 0.00004 },
    { name: "Iron", rarity: 0.00004 },
    { name: "solid bar of dirt (kinda col?)", rarity: 0.000032 },
    { name: "magnetic dirt (epic!)", rarity: 0.000021 },
    { name: "Silver", rarity: 0.00002 },
    { name: "Lets go golfing", rarity: 0.0000199995 },
    { name: "Metal", rarity: 0.0000133333 },
    { name: "Steel", rarity: 0.0000133333 },
    { name: "slightly rarer grass 😱 (tastes like salt)", rarity: 0.0000132 },
    { name: "what do i name this", rarity: 0.000012 },
    { name: "salt (tastes like slightly rarer grass)", rarity: 0.00001 },
    { name: "Pepper (Feels like Slightly rarer grass)", rarity: 0.00001 },
    { name: "Tinted slightly purple void (IT STINGS!!!)", rarity: 0.00001 },
    { name: "Call me asparagus", rarity: 0.0000099998 },
    { name: "the skibidi toiliet or creepear", rarity: 0.0000067 },
    { name: "Avocado", rarity: 0.000005 },
    { name: "Dust Jr", rarity: 0.000005 },
    { name: "Cinnamon toast crunch", rarity: 0.0000049999 },
    { name: "Fruity dog 0.01% power", rarity: 0.0000045 },
    { name: "Extremely Rare Wood (VERY COOL 😀)", rarity: 0.000004 },
    { name: "Guava Juice (Irrelevent but yummy)", rarity: 0.00000333333 },
    { name: "mr. dust", rarity: 0.0000025 },
    { name: "Ms. dust", rarity: 0.00000249997 },
    { name: "And perhaps what is this?", rarity: 0.00000249995 },
    { name: "WANTED WEED??? (why is it wanted?)", rarity: 0.000002 },
    { name: "Dirt V2", rarity: 0.000002 },
    { name: ":GoodFriday:", rarity: 0.000001500001 },
    { name: "OMG SCARY DOG", rarity: 0.000001500001 },
    { name: "Water Bottle", rarity: 0.000001333333 },
    { name: "Uncle dust", rarity: 0.00000125 },
    { name: "Tell em to bring out the whole ocean!", rarity: 0.000001249975 },
    { name: "I know what to name this", rarity: 0.0000012 },
    { name: "turtle v1", rarity: 0.000001000001 },
    { name: "Pickaxe with super scary gems on it (AHHHHHH)", rarity: 0.000001000001 },
    { name: "Gold", rarity: 0.00000100000000000000001 },
    { name: "rare crystal v0.001", rarity: 0.000001 },
    { name: "Almost not ugly dog?", rarity: 0.000001 },
    { name: "Blue chickenite", rarity: 0.000000769231 },
    { name: "Tell em to bring out the yacht!", rarity: 0.0000006249875 },
    { name: "Boulder ", rarity: 0.0000004 },
    { name: "EXTREMELY EVEN RARER WOOD (OMG VERY EPIC 👍)", rarity: 0.0000004 },
    { name: "Mclovin's drivers license", rarity: 0.0000004 },
    { name: "Together Wwe're stronger!", rarity: 0.00000031249375 },
    { name: "Together we're stronger!", rarity: 0.00000031249375 },
    { name: "👽", rarity: 0.0000003333333 },
    { name: "😡", rarity: 0.0000003333332 },
    { name: "👍", rarity: 0.0000003333331 },
    { name: "👏", rarity: 0.0000003333330 },
    { name: "🙂", rarity: 0.0000003333329 },
    { name: "🎉", rarity: 0.0000003333328 },
    { name: "PART", rarity: 0.0000002623096 },
    { name: "Spinning Stone (how is it spinning??)", rarity: 0.0000002 },
    { name: "Purple sauce", rarity: 0.00000014285715 },
    { name: "What is that name again?", rarity: 0.00000012048193 },
    { name: "Tomato man (why is he purple??)", rarity: 0.000000125 },
    { name: "kevin (kevin (kevin (kevin)))", rarity: 0.0000001 },
    { name: "Diamond", rarity: 0.0000001 },
    { name: "Rare Crystal v0.01", rarity: 0.0000001 },
    { name: "Little buddy was sick 🤒 took all his bands", rarity: 0.0000001 },
    { name: "Green orb?? (I think it's a lore reference)", rarity: 0.0000001 },
    { name: "19$ Fortnite card", rarity: 0.00000005263158 },
    { name: "no more cardboard eating in general", rarity: 0.00000005 },
    { name: "0.0001% ugly dog", rarity: 0.00000005 },
    { name: "Angelite", rarity: 0.000000045 },
    { name: "Fruity dog 0.1% power", rarity: 0.000000045 },
    { name: "Polychromatic Light", rarity: 0.00000003081689 },
    { name: "Khaled soul", rarity: 0.00000002 },
    { name: "VERY SCARY DOG AHHHHHHHHHHH!!!!!", rarity: 0.0000000150000001 },
    { name: "Protogenium", rarity: 0.0000000150000001 },
    { name: "Non innocent oceanic creature 1/???", rarity: 0.0000000131925999 },
    { name: "EL GATO V0.001", rarity: 0.0000000100000001 },
    { name: "Heart attack dog", rarity: 0.0000000100000001 },
    { name: "John (OMG JOHN PULSAR REFERENCE??!??!?!)", rarity: 0.00000001 },
    { name: "Shine bright like a diamond (but the other diamond didn’t shine bright)", rarity: 0.00000001 },
    { name: "Rare Crystal v0.1", rarity: 0.00000001 },
    { name: "Cheese slice full of hourglasses (how is it full of hourglasses!!)", rarity: 0.00000000600000001 },
    { name: "True Angelite", rarity: 0.0000000045 },
    { name: "FRUITY DOG", rarity: 0.0000000045 },
    { name: "Non ugly dog", rarity: 0.00000000333333333 },
    { name: "Hourglass full of cheese slices (why is it full of cheese??)", rarity: 0.000000003 },
    { name: "REAL PART", rarity: 0.00000000262268109 },
    { name: "funny germ (he dont bite)", rarity: 0.000000002 },
    { name: "Death 💀 ☠️", rarity: 0.000000001500000001 },
    { name: "deciduous_germ", rarity: 0.000000001304811684 },
    { name: "STUPID BABY V0.000000001", rarity: 0.000000001000000001 },
    { name: "Doomstone", rarity: 0.000000001000000001 },
    { name: "Rare Crystal v1", rarity: 0.000000001 },
    { name: "bacteria (he bites)", rarity: 0.000000001 },
    { name: "roundcat", rarity: 0.000000000747551768 },
    { name: "Ultimate stew (Yummers!)", rarity: 0.0000000005 },
    { name: "Water bottle filled with ultimate stew?? (ULTIMATE YUMMERS!!!!)", rarity: 0.00000000045 },
    { name: "True fruity dog 101% power", rarity: 0.00000000045 },
    { name: "CHICKEN 0.00000001% POWER", rarity: 0.0000000001 },
    { name: "TRUE RARE CRYSTAL", rarity: 0.0000000001 },
    { name: "CAT", rarity: 0.000000000001000000000001 },
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