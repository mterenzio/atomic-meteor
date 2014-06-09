var uploadStore = new FS.Store.GridFS("uploads");

Uploads = new FS.Collection("uploads", {
    stores: [uploadStore]
});

CollectionData = new Meteor.Collection("collections");

var collectionData = CollectionData.find();

MyCollections = {};
collectionData.forEach( function (item) {
	MyCollections[item.collectionName] = new Meteor.Collection(item.collectionName);
});
