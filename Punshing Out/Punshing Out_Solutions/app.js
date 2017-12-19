getAllPunshNames();
function getAllPunshNames() {
    let requestURL='https://punsh-master.firebaseio.com/data/punshes.json';

    $.get(requestURL)
        .then(renderAllPunshesInHTML)
        .catch((err) => console.log(err));

}
function getSinglePunshData(punshName) {

    $.getJSON('https://punsh-master.firebaseio.com/data/punshes.json', function(data) {
        for(let key in data)
        {
            let punsh=data[key];
            if(punsh['name']===punshName)
            {
                renderSinglePunshInHTML(punsh);
            }
        }
    });


}

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

function attachPunshesEvents(punshes) {
    $('.navbar-item').click(function (e) {
        e.preventDefault();
        let punshName=$(this).text();
        getSinglePunshData(punshName);
        //renderSinglePunshInHTML(punshes, punshName);
        clearNavbarItems();

    })
}

function renderSinglePunshInHTML(punsh) {
    let contentHeaderDiv=$('<div class="content-header">');
    let punshDataDiv=$('<div class="punsh-data">');


            contentHeaderDiv
                .append('<div class="content-heading">' + punsh['name'] + '</div>').css( 'cursor', 'pointer' );

            punshDataDiv
                .append('<div class="punsh-type"><label>Type: </label><h6>' + punsh['type']+ '</h6></div>')
                .append('<div class="punsh-contents"><label>Contents: </label><p>'+punsh['contents']+'</p></div>')
                .append('<div class="punsh-description"><label>Description: </label><p>'+punsh['description']+'</p></div>');



    $('.content')
        .append(contentHeaderDiv)
        .append(punshDataDiv);
    attachBackEvents();
}

function clearNavbarItems() {
    $('.navbar-items').remove();
    $('.navbar-items').remove();
}

function clearContent() {
    $('.content').empty();
    $('.content').empty();
}

function attachBackEvents() {
    $('.content-heading').click(function (e) {
        e.preventDefault();
        clearContent();

        let requestURL='https://punsh-master.firebaseio.com/data/punshes.json';

        $.get(requestURL)
            .then(renderAllPunshesInHTML)
            .catch((err) => console.log(err));
    })
}