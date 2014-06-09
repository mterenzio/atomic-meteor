Meteor.startup(function() {
		Meteor.methods({
		    createCollection: function (collectionName) {
				var newCollection = new Meteor.Collection(collectionName);
		    },
		    insertCollection: function (collectionName, schemaID) {
		    	return CollectionData.insert({"collectionName": collectionName, "schemaID": schemaID});
		    },
		    insertCollectionData: function (collectionName, obj) {

		    	if (MyCollections[collectionName] === undefined)
		    		MyCollections[collectionName] = new Meteor.Collection(collectionName);

		    	MyCollections[collectionName].insert(obj);

		    }		    
		  });
});
