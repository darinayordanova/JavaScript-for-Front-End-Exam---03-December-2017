let punshes = {
    0: {
        name: "One Punsh Man",
        type: "Strong",
        contents: "Very little Vodka, Very little Brendy, Very little Wine, Very little Whiskey, Very little Tequila and a lot of Watermelon Juice.",
        description: "This punsh was discovered in an unknown house party, when there was almost no alcohol left, and the people had to combine a little from every alchohol. One Punsh of this is enough to knock you down for good, hence the name."
    },
    1: {
        name: "Wine Punsh",
        type: "Sweet",
        contents: "Wine, Apple Juice, Ice.",
        description: "Casual Wine Punsh, for the ladies that love wine. It is not very strong, it is actually sweet. Sweet enough to make them sweetly drunk and playful."
    },
    2: {
        name: "Punsh Out",
        type: "Sweet",
        contents: "Champagne, Watermellon Juice, Ice.",
        description: "This is a very sweet, almost non-alchoholic, punsh. Very suitable for ladies, which want to keep their manners but have a little fun at a party."
    }
};

renderAllPunshesInHTML(punshes);

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
    attachBackEvents(punshes);
}

function clearNavbarItems() {
    $('.navbar-items').remove();
    $('.navbar-items').remove();
}
function clearContent() {
    $('.content').empty();
    $('.content').empty();
}

function attachPunshesEvents(punshes) {
    $('.navbar-item').click(function (e) {
        e.preventDefault();

        let punshName=$(this).text();
        clearNavbarItems();
        console.log(punshName);
        renderSinglePunshInHTML(punshes, punshName);
    })
}

function attachBackEvents(punshes) {
    $('.content-heading').click(function (e) {
        e.preventDefault();
        clearContent();
        renderAllPunshesInHTML(punshes);
    })
}