utcTime = function() {
    return new Date().getTime()
}
getAsyncFetch = function (url) {
    return HTTP.get(url,
        function(error, result) {
            if (!error) {
                Session.set(url, result.content);
            }
        });	
}

createNewSchema = function (url) {
	HTTP.get(url,
        function(error, result) {
            if (!error) {
                Session.set(url, result.content);
            }
        });
  if (Session.get(url))
  {
		var content = Session.get(url);

		var model = 'EventsSchema = new SimpleSchema({created_at: { type: Date}, updated_at: { type: Date}, ' + content+'})';
		return model;  	
  }	

	// var content = 'EventsSchema = new SimpleSchema({ _id: { type: String, autoValue: function() { if (this.isInsert) { return Random.id(); }} }, eventTitle: { type: String, label: "Title of Event" }})';
	// console.log(eval(model));
	// EventTypeSchema = new SimpleSchema(content);	
}

className = function(object, defaultName) {
	var nameFromToStringRegex = /^function\s?([^\s(]*)/;
    var result = "";
    if (typeof object === 'function') {
        result = object.name || object.toString().match(nameFromToStringRegex)[1];
    } 
    return result;
}

getValue = function (key) {
	console.log("111");
}