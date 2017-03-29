var utilities = (function() {
    function getDataHTML(check, element, dataFunction, heading) {
        if($(check)[0].checked){
            $(heading).show();
            $(element).show();
            dataFunction;
        } else {
            $(heading).hide();
            $(element).hide();
        }
    }
    return {
        getDataHTML: getDataHTML
    }
})();