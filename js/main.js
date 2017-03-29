var getGhibliData = (function() {
    
    function getFilms() {
        $.ajax({
            method: 'GET',
            url: 'https://ghibliapi.herokuapp.com/films',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (response) => {
                updateView.filmsHTML(response);
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
        getPeople: getPeople,
        getLocations: getLocations,
        getSpecies: getSpecies,
        getVehicles: getVehicles
    }
})();
$('#search-btn').on('click', function(){
    //Films
    utilities.getDataHTML('#film-check', '#film-data-row', getGhibliData.getFilms());
    //People
    utilities.getDataHTML('#people-check', '#people-table', getGhibliData.getPeople(), '#people-heading');
    //Locations
    utilities.getDataHTML('#location-check', '#location-table', getGhibliData.getLocations(), '#location-heading');
    //Species
    utilities.getDataHTML('#species-check', '#species-table', getGhibliData.getSpecies(), '#species-heading');
    //Vehicles
    utilities.getDataHTML('#vehicle-check', '#vehicle-table', getGhibliData.getVehicles(), '#vehicle-heading');
});