Meteor.startup(function() {
		Meteor.methods({
		    createCollection: function (collectionName) {
				var newCollection = new Meteor.Collection(collectionName);
		    },
		    insertCollection: function (collectionName, schemaID) {
		    	return CollectionData.insert({"collectionName": collectionName, "schemaID": schemaID});
		    },
		    insertCollectionData: function (collectionName, obj) {
		    	var newCollcetion;

		    	if (newCollcetion === undefined){
						newCollcetion = new Meteor.Collection(collectionName);		    		
						newCollcetion.insert(obj);
						delete newCollcetion;
		    	}
		    	
		    }		    
		  });
});
