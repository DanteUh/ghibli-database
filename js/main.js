var getGhibliData = (function() {
    
    function getFilms() {
        $.ajax({
            method: 'GET',
            url: 'https://ghibliapi.herokuapp.com/films',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (response) => {
                updateView.filmsImgHTML(response);
            },
            error: (error) => {alert('There was an error with the Film request')}
        });
    }
    function getFilmsArray() {
        $.ajax({
            method: 'GET',
            url: 'https://ghibliapi.herokuapp.com/films',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (response) => {
                return response;
            },
            error: (error) => {alert('There was an error with the Film request')}
        });
    }
    function getPeople() {
        $.ajax({
            method: 'GET',
            url: 'https://ghibliapi.herokuapp.com/people',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (response) => {
                updateView.peopleHTML(response);
            },
            error: (error) => {alert('There was an error with the People request')}
        });
    }
    function getLocations() {
        $.ajax({
            method: 'GET',
            url: 'https://ghibliapi.herokuapp.com/locations',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (response) => {
                updateView.locationsHTML(response);
            },
            error: (error) => {alert('There was an error with the Location request')}
        });
    }
    function getSpecies() {
        $.ajax({
            method: 'GET',
            url: 'https://ghibliapi.herokuapp.com/species',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (response) => {
                updateView.speciesHTML(response);
            },
            error: (error) => {alert('There was an error with the Species request')}
        });
    }
    function getVehicles() {
        $.ajax({
            method: 'GET',
            url: 'https://ghibliapi.herokuapp.com/vehicles',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (response) => {
                updateView.vehiclesHTML(response);
            },
            error: (error) => {alert('There was an error with the Vehicle request')}
        });
    }
    return {
        getFilms: getFilms,
        getFilmsArray: getFilmsArray,
        getPeople: getPeople,
        getLocations: getLocations,
        getSpecies: getSpecies,
        getVehicles: getVehicles
    }
})();
$('#search-btn').on('click', function(){
    //Films
    utilities.getDataHTML('#film-check', '#film-heading', '#film-table', getGhibliData.getFilms());
    //People
    utilities.getDataHTML('#people-check', '#people-heading', '#people-table', getGhibliData.getPeople());
    //Locations
    utilities.getDataHTML('#location-check', '#location-heading', '#location-table', getGhibliData.getLocations());
    //Species
    utilities.getDataHTML('#species-check', '#species-heading', '#species-table', getGhibliData.getSpecies());
    //Vehicles
    utilities.getDataHTML('#vehicle-check', '#vehicle-heading', '#vehicle-table', getGhibliData.getVehicles());
});