const handleGet = (pathname, req, res) => {
    if(pathname = '/getUsers') return getUsersGET(req, res);
    if (pathname = '/notReal') return notRealGET(req, res);
    if (pathname = '/') return htmlResponses.getIndex(req, res);
    if (pathname = '/style.css') return htmlResponses.getCss(req, res);
}