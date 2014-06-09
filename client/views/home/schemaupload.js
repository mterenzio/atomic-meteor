
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
});

Template.schemaList.events({
  'click .removeCollection': function(events) {
    var collection = CollectionData.findOne({_id: this._id}).collectionName;
    CollectionData.remove({_id: this._id});
    // MyCollections[collection]
    // console.log(CollectionData.findOne({_id: this._id}).collectionName);
    // var collections = CollectionData.findOne({_id: this._id});
    // console.log(collections);
    // console.log(this._id);
  }
})