
Template.schemas.events({
  'submit': function(events) {

    events.preventDefault();
    var formData = $("#schemaForm").serialize().split("&");
    var obj = {};
    for (var i = 0; i < formData.length; i ++) {
      var data = formData[i].split("=");
      obj[data[0]] = data[1];
    }
    Meteor.call("insertCollectionData", Session.get("collectionName"), obj, function (error, result) {
      
    });

  }
})