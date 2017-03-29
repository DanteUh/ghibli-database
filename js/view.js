var updateView = (function() {
    
    function filmsHTML(data) {
        const dataRow = $('#film-data-row');
        dataRow.empty();
        for(let i = 0; i < data.length; i++){
            let dataElements = `
                <section class="film-section col-lg-3 col-md-4 col-sm-6 mb-4">
                    <img src="images/jpg/${data[i].id}.jpg" class="img-fluid mb-2" alt="Thumbnail">
                    <div class="text-section">
                        <h5>${data[i].title}</h5>
                        <ul class="list-group">
                            <li class="list-group-item">Director: ${data[i].director}</li>
                            <li class="list-group-item">Release Date: ${data[i].release_date}</li>
                            <li class="list-group-item">Score: ${data[i].rt_score}</li>
                        </ul>
                    </div>
                </section>`;
            
            dataRow.append(dataElements);
        }
    }
    function peopleHTML(data){
        const dataTable = $('#people-table-body');
        dataTable.empty();
        let x = 1;
        for(let i = 0; i < data.length; i++){
            let dataElmenets = `
                    <tr>
                      <th scope="row">${x + i}</th>
                      <td>${data[i].name}</td>
                      <td>${data[i].age}</td>
                      <td>${data[i].eye_color}</td>
                      <td>${data[i].hair_color}</td>
                    </tr>`;
            
            dataTable.append(dataElmenets);
        }
    }
    function locationsHTML(data){
        const dataTable = $('#location-table-body');
        dataTable.empty();
        let x = 1;
        for(let i = 0; i < data.length; i++){
            let dataElmenets = `
                    <tr>
                      <th scope="row">${x + i}</th>
                      <td>${data[i].name}</td>
                      <td>${data[i].climate}</td>
                      <td>${data[i].terrain}</td>
                      <td>${data[i].surface_water}</td>
                    </tr>`;
            
            dataTable.append(dataElmenets);
        }
    }
    function speciesHTML(data){
        const dataTable = $('#species-table-body');
        dataTable.empty();
        let x = 1;
        for(let i = 0; i < data.length; i++){
            let dataElmenets = `
                    <tr>
                      <th scope="row">${x + i}</th>
                      <td>${data[i].name}</td>
                      <td>${data[i].classification}</td>
                      <td>${data[i].eye_colors}</td>
                      <td>${data[i].hair_colors}</td>
                    </tr>`;
            
            dataTable.append(dataElmenets);
        }
    }
    function vehiclesHTML(data){
        const dataTable = $('#vehicle-table-body');
        dataTable.empty();
        let x = 1;
        for(let i = 0; i < data.length; i++){
            let dataElmenets = `
                    <tr>
                      <th scope="row">${x + i}</th>
                      <td>${data[i].name}</td>
                      <td>${data[i].vehicle_class}</td>
                      <td>${data[i].description}</td>
                      <td>${data[i].length}</td>
                    </tr>`;
            
            dataTable.append(dataElmenets);
        }
    }
    return {
        filmsHTML: filmsHTML,
        peopleHTML: peopleHTML,
        locationsHTML: locationsHTML,
        speciesHTML: speciesHTML,
        vehiclesHTML: vehiclesHTML
    }
})();

/*updateView.filmsHTML();*/
/*$('#get-html-btn').on('click', getHTML.addHTML);*/
