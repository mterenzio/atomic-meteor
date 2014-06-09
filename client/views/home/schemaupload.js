
Template.schemas.events({
  'submit': function(events) {
    events.preventDefault();
    // console.log(Session.get("collectionName"));
    // newCollcetion = new Meteor.Collection(Session.get("collectionName"));

    var formData = $("#schemaForm").serialize().split("&");
    var obj = {};
    for (var i = 0; i < formData.length; i ++) {
      var data = formData[i].split("=");
      obj[data[0]] = data[1];
    }

    Meteor.call("insertCollectionData", Session.get("collectionName"), obj);
    // console.log(newCollcetion);
    // newCollcetion.insert(obj);
    // console.log(events);
  }
})