var utilities = (function() {
    function getDataHTML(check, heading, table, dataFunction) {
        if($(check)[0].checked){
            $(heading).show();
            $(table).show();
            dataFunction;
        } else {
            $(heading).hide();
            $(table).hide();
        }
    }
    return {
        getDataHTML: getDataHTML
    }
})();