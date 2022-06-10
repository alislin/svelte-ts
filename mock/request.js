// middleware for request
module.exports = (req, res, next) => {
    // convert post to get
    // if (req.method === 'POST') {
    //     req.method = 'GET';
    // }

    // Continue to JSON Server router
    next()
};