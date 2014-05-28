uploadFiles = function(event) {
    FS.Utility.eachFile(event, function(file) {
        var newFile = new FS.File(file);
        newFile.metadata = {
            date: utcTime()
        }
        Uploads.insert(newFile, function(err, fileObj) {
            if (err) {
                console.log(err)
            }
        });
    })
}

Template.upload.events({
    'change #files': function(event, template) {
        console.log("uploading files")
        uploadFiles(event)
    },
    'dropped #dropzone': function(event, template) {
        console.log('files dropped');
        uploadFiles(event)
    }
})

Template.uploadsList.uploads = function() {
    return Uploads.find({}, {
        sort: {
            'metadata.date': -1
        }
    })
}