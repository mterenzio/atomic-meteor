/* Schema */
EventTypeSchema = new SimpleSchema({
  _id: {
      type: String,
      autoValue: function() {
          if (this.isInsert) {
            return Random.id();
        } 
    }    
  },
  type: {
     type: String,
     label: "Type of Event"
  }
});

