module.exports = function (response, paging) {

    if (response.items.length == 0) return response;

    if (!((paging.page * paging.iPP) >= paging.count)) {
        paging.nextPage = paging.page + 1;
    } else {
        paging.nextPage = null;
    }
    if (paging.page != 1) {
        paging.previousPage = paging.page - 1;
    } else {
        paging.previousPage = null;
    }


    response = {...response, paging}


    return response;
}