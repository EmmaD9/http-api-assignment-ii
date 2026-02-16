const handleGet = (pathname, req, res) => {
    if(pathname = '/getUsers') return getUsersGET(req, res);
    if (pathname = '/notReal') return notRealGET(req, res);
    if (pathname = '/') return htmlResponses.getIndex(req, res);
    if (pathname = '/style.css') return htmlResponses.getCss(req, res);

    return notFoundGET(req, res);
}

const handleHEAD = (pathname, req, res) => {
    if(pathname ===  '/getUsers') return getUsersHEAD(req, res);
    if (pathname === '/notReal') return notRealHEAD(req, res);

    return notFoundHEAD(req, res);
}

const handlePOST = (pathname, req, res) => {
    if(pathname === '/addUser') return addUserPOST(req, res);

    return notFoundGET(req, res);
}