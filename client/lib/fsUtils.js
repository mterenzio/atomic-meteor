UI.registerHelper('fileFromId', function(id) {
    return Uploads.findOne(id)
});

UI.registerHelper('isText', function() {
    if (this.type() === 'text/plain') {
        return true
    } else {
        return false
    }
})

UI.registerHelper('asyncFetch', function(url) {
    return HTTP.get(url,
        function(error, result) {
            if (!error) {
                Session.set(url, result.content);
            }
        });
})