const DefaultController = {

    homepage: function(req, res) {
        res.sendFile('../../dist/html/homepage.html')
    }
}


module.exports = DefaultController;