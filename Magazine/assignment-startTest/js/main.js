window.addEventListener('load', init);

const apiUrl = 'http://localhost/Magazine/assignment-startTest/webservice';
let cars = [];

//Init
function init() {
    getCars();

    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    if (window.localStorage.getItem("favorites") === null) {
        addToLocalStorage("favorites", []);
    }

    console.log(getFromLocalStorage("favorites"));
}

//Get Cars
function getCars() {
    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(function (data) {
            cars = data;
            cars.forEach(function(car){
                let div = document.createElement("div");
                div.innerHTML = renderCard(car);
                document.getElementById('container').appendChild(div);
            })
        })
        .catch(function (data) {
            console.error(data)
        });
}

//Get Car
function getCar(id) {
    return fetch(apiUrl + `?id=${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(function (data) {
            document.getElementById('info').classList = 'info';
            document.getElementById('info').innerHTML = renderInfo(data);
        })
        .catch(function (data) {
            console.error(data)
        });
}

//Generate Cards
function renderCard(car) {
    let card = `<div class="showcase-form card">`;
    card += `<h2>${car.brand} ${car.type}</h2>`;
    card += `<img alt="" src="https://source.unsplash.com/1600x900/?${car.brand}+${car.type}" >`;

    if (isFavorite(car.id)) {
        card += `<button id="${car.id}" onclick="removeFromFavorites(this.id), document.location.reload(true)" class="favorited">Remove from Favorites</button>`;
    }
    else {
        card += `<button id="${car.id}" onclick="addToFavorites(this.id), document.location.reload(true)" class="btn">Add to Favorites</button>`;
    }

    card += `<button id="${car.id}" onclick="getCar(this.id)" class="btn">More Info</button>`;
    card += `</div>`;

    return card;
}

function renderInfo(car) {
    console.log(car);
    let info = `<div>`;
    info += 'Info'
    info += ' Car: ' + car.brand + ' ' ;
    info += car.type + ', ';
    info += 'Top Speed = '+car.top_speed + ', ';
    info += 'Released in: ' + car.release_date;
    info += `</div>`;

    return info;
}

//Local Storage
function addToLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

// Add, Remove, Check Favorites
function addToFavorites(id) {
    let array = getFromLocalStorage("favorites");
    array.push(id);
    addToLocalStorage("favorites", array);
}

function removeFromFavorites(id) {
    let index = getFromLocalStorage("favorites").indexOf(id);
    if (index > -1) {
        let array = getFromLocalStorage("favorites")
        array.splice(index, 1)
        addToLocalStorage("favorites", array)
    }
}

function isFavorite(id) {
    return window.localStorage.getItem("favorites").includes(id);
}