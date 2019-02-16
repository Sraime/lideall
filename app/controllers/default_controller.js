const path = require('path')

const DefaultController = {

    homepage: function(req, res) {
        res.sendFile(path.join(__dirname, '../../dist/html/homepage.html'));
    }
}


module.exports = DefaultController;