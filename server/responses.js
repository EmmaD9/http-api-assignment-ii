const handleGET = (pathname, request, response) => {
    if(pathname = '/getUsers') return getUsersGET(request, response);
    if (pathname = '/notReal') return notRealGET(request, response);
    if (pathname = '/') return htmlResponses.getIndex(request, response);
    if (pathname = '/style.css') return htmlResponses.getCss(request, response);

    return notFoundGET(request, response);
};

const handleHEAD = (pathname, request, response) => {
    if(pathname ===  '/getUsers') return getUsersHEAD(request, response);
    if (pathname === '/notReal') return notRealHEAD(request, response);

    return notFoundHEAD(request, response);
};

const handlePOST = (pathname, request, response) => {
    if(pathname === '/addUser') return addUserPOST(request, response);

    return notFoundGET(request, response);
};

//user storage:
const users = {};

//GET users JSON
const getUsersGET = (request, response) => {
    const responseJSON = { users };

    response.writeHead(200, {'Content-Type' : 'application/json'});
    response.write(JSON.stringify(responseJSON));
    response.end();
};

//GET users JSON but with no body
const getUsersHEAD = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json'});
    response.end();
};

//get not real for JSON error
const notRealGET = (request, response) => {
    const responseJSON = {
        message: 'The page you are looking for was not found',
        id: 'notFound',   
    };

    response.writeHead(404, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(responseJSON));
    response.end();
};

//head not real
const notRealHEAD = (req, res) =>{
    response.writeHead(404, {'Content-Type': 'application/json'});
    response.end();
}

//TODO: post add user

//GET 404 error page with JSON
const notFoundGET = (request, response) => {
    const responseJSON = {
        message: 'The page you are looking for was not found',
        id: 'notFound',  
    }

    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(responseJSON));
    response.end();
}

//HEAD 404 version with no body
const notFoundHead = (request, response) => {
    response.writeHead(404, {'Content-Type': 'application/json' });
    response.end();
};