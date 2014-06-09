Meteor.startup(function() {
		Meteor.methods({
		    createCollection: function (collectionName) {
						var newCollection = new Meteor.Collection(collectionName);
		    },
		    insertCollection: function (collectionName, schemaID) {
		    	CollectionData.insert({"collectionName": collectionName, "schemaID": schemaID});
		    	// console.log(CollectionData);
		    },
		    insertCollectionData: function (collectionName, obj) {
		    	var newCollcetion = new Meteor.Collection(collectionName);
		    	newCollcetion.insert(obj);
		    }		    
		  });
});
