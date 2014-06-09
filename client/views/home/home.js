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
        var data = Uploads.findOne(newFile._id);
    })
}

Template.upload.events({
    'change #files': function(event, template) {
        uploadFiles(event)
    },
    'dropped #dropzone': function(event, template) {
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

Template.media.destroyed = function() {
    Session.set(this.data.url, null)
};

Template.collections.events({
    'click #create': function(event, template) {
      var collectionName = document.getElementById("collectionName").value;

      if (collectionName)
      {
        if($(".selected").length < 1)
        {
          bootbox.alert("Please choose any schema");   
        }
        else
        {
          var schemaID = Uploads.findOne(Session.get("data-id"))._id;
          var url = Uploads.findOne(Session.get("data-id")).url();
          var data = getAsyncFetch(url);
          var schema = createNewSchema(url);
          var data = eval(schema);
          // console.log(data._schemaKeys);
          // console.log(data._schema);
          // console.log(Uploads.findOne(Session.get("data-id")).url());
          // console.log(Collections);
          Meteor.call("insertCollection", collectionName, schemaID, function (error, result) {
            if (!error){
              Router.go("/user");
            }
          });          
          // Meteor.call("createCollection", collectionName, Session.get("data-id"), function (error, result) {
          // });

        }
      }
      else 
      {
        bootbox.alert("Please type the collection name.");
        $("#collectionName").focus();
      }
    },
    'click .hideAction': function (event, template){
      var hideAction = $(".hideAction");
      hideAction.removeClass("btn-primary");
      hideAction.removeClass("hideAction");
      hideAction.html("Show Upload Area");

      hideAction.addClass("showAction");
      hideAction.addClass("btn-warning");
      $(".schemaAre").slideUp('fast');
    },
    'click .showAction': function (event, template){
      var showAction = $(".showAction");
      showAction.removeClass("btn-warning");
      showAction.removeClass("showAction");
      showAction.html("Hide Upload Area");
      
      showAction.addClass("btn-primary");
      showAction.addClass("hideAction");
      $(".schemaAre").slideDown('fast');
    },
    'click .media': function (event, template)
    {
      $(".media").removeClass("selected");
      $("."+this._id).addClass("selected");
      Session.set("data-id", this._id);
    }

})