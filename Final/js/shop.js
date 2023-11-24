const animeItems = [
    {
        name: "Naruto",
        price: 25,
        imgSrc: "../img/img1.jpg",
        description: "The Village Hidden in the Leaves is home to the stealthiest ninja. But twelve years earlier, a fearsome Nine-tailed Fox terrorized the village before it was subdued and its spirit sealed within the body of a baby boy."
    },
    {
        name: "Bleach",
        price: 30,
        imgSrc: "../img/img2.jpg",
        description: "Ichigo Kurosaki has always been able to see ghosts, but this ability doesn't change his life nearly as much as his close encounter with Rukia Kuchiki, a Soul Reaper and member of the mysterious Soul Society.-it's Ichigo's job to protect the innocent from Hollows and help the spirits themselves find peace."
    },
    {
        name: "One Piece",
        price: 35,
        imgSrc: "../img/img3.jpg",
        description: "As a child, Monkey D. Luffy was inspired to become a pirate by listening to the tales of the buccaneer \"Red-Haired\" Shanks. But Luffy's life changed when he accidentally ate the Gum-Gum Devil Fruit and gained the power to stretch like rubber ... .one guy alone in a rowboat, in search of the legendary \"One Piece,\" said to be the greatest treasure in the world..."
    },
    {
        name: "One Punch Man",
        price: 40,
        imgSrc: "../img/img4.jpg",
        description: "Saitama is a hero who started his career from nothing to do. After three years of special training, he has become so strong that he can defeat enemies with a single blow. Now Saitama, along with his cyborg apprentice Genos, is ready to officially work as a hero for the Hero Association."
    },
    {
        name: "Tokyo Ghoul",
        price: 45,
        imgSrc: "../img/img5.jpg",
        description: "Shy Ken Kaneki is thrilled to go on a date with the beautiful Rize. But it turns out that she’s only interested in his body?eating it, that is. When a morally questionable rescue transforms him into the first half-human half-Ghoul hybrid, Ken is drawn into the dark and violent world of Ghouls, which exists alongside our own."
    },
    {
        name: "Attack on Titan",
        price: 50,
        imgSrc: "../img/img6.jpg",
        description: "The human world has fallen to the crushing might of the Titans. Having sacrificed their freedom, mankind took refuge in high-walled cities, hoping to keep the survivors safe. But one terrible day, a colossal Titan appeared, exceeding the size of even the city walls. And fragile hope was crushed to dust. Once again, the desperate battle for survival began."
    }
    // Add other anime items similarly
];
function renderAnimeItems(items) {
    const container = $("#animeItems");
    container.empty();

    items.forEach(item => {
        const card = `
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div class="card">
    <img src="${item.imgSrc}" class="card-img-top" alt="Anime Item">
    <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p>Price: $${item.price}</p>
<p>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#${item.name}" aria-expanded="false" aria-controls="collapseWidthExample">
Some Info
</button>
</p>
<div style="min-height: 10px;">
<div class="collapse width" id="${item.name}">
<div class="card card-body" style="width: 320px;">
${item.description}
</div>
</div>
</div>
<button class="btn btn-primary" onclick="addToCart('${item.name}')">Add to cart</button>
</div>
</div>
</div>
`;

        container.append(card);
    });
}

function addToCart(itemName) {
    alert(`You bought ${itemName}`);
}

// Initial rendering
renderAnimeItems(animeItems);

// Function to sort items by price in ascending order
function sortByAscendingPrice() {
    animeItems.sort((a, b) => a.price - b.price);
    renderAnimeItems(animeItems);
}

// Function to sort items by price in descending order
function sortByDescendingPrice() {
    animeItems.sort((a, b) => b.price - a.price);
    renderAnimeItems(animeItems);
}

// Function to sort items alphabetically by name
function sortAlphabetically() {
    animeItems.sort((a, b) => a.name.localeCompare(b.name));
    renderAnimeItems(animeItems);
}
