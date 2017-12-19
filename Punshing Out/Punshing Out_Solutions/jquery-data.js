let punshes = {
    0: {
        name: "Punsh - The American Pie",
        type: "Strong",
        contents: "Some Apple Pie, Whiskey, Vodka, Orange Juice and some other things...",
        description: "By original recipe from the American Pie franchise, this punsh includes everything you would want in a college/university party."
    },
    1: {
        name: "Brendy Punsh",
        type: "Medium",
        contents: "Brendy, Apple Juice, Ice, Avocado Juice, some other strange fruits...",
        description: "The casual Brendy Punsh, quite expensive, nothing interesting here..."
    },
    2: {
        name: "Just Punsh it",
        type: "Sweet",
        contents: "Very Little Vodka, Orange Juice, Apple Juice, Banana Juice, Ice.",
        description: "A very comfortable taste for the lovers of weakly alchoholic drinks. The Just Pinsh It punsh is a sweet multi-vitamol drink, which cannot drunk you."
    }
};

renderAllPunshesInHTML(punshes);
//renderSinglePunshInHTML(punshes, "Punsh - The American Pie");


function renderAllPunshesInHTML(punshes) {
    let navbarItemsDiv=$('<div class="navbar-items">');
    for (let key in punshes)
    {
        let punsh=punshes[key];
        navbarItemsDiv
            .append('<div class="navbar-item"><h4>' + punsh['name'] + '</h4></div>');

    }
    $('.navbar').append(navbarItemsDiv);
    attachPunshesEvents(punshes);
}

function renderSinglePunshInHTML(punshes, punshName) {
    let contentHeaderDiv=$('<div class="content-header">');
    let punshDataDiv=$('<div class="punsh-data">');

    for(let key in punshes)
    {
        let punsh=punshes[key];
        if(punsh['name']===punshName)
        {
            contentHeaderDiv
                .append('<div class="content-heading">' + punsh['name'] + '</div>').css( 'cursor', 'pointer' );

            punshDataDiv
                .append('<div class="punsh-type"><label>Type: </label><h6>' + punsh['type']+ '</h6></div>')
                .append('<div class="punsh-contents"><label>Contents: </label><p>'+punsh['contents']+'</p></div>')
                .append('<div class="punsh-description"><label>Description: </label><p>'+punsh['description']+'</p></div>');
        }
    }

    $('.content')
        .append(contentHeaderDiv)
        .append(punshDataDiv);
}