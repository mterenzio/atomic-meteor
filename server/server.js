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
		    		try {
		    			newCollcetion = new Meteor.Collection(collectionName);	
		    			newCollcetion.insert(obj);
		    		}
		    		catch(err){
		    			console.log(newCollcetion);
		    			newCollcetion.insert(obj);
		    		}
						delete newCollcetion;
		    	}
		    		
		    }		    
		  });
});
