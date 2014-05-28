UI.registerHelper('sessionVar', function(string) {
    return Session.get(string)
})

UI.registerHelper('keyValue', function(context, options) {
    var result = [];
    _.each(context, function(value, key, list) {
        result.push({
            key: key,
            value: value
        });
    })
    return result;
});

UI.registerHelper('dateFromUTC', function(utc) {
    td = new Date(utc);
    dd = td.getDate();
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    mm = monthNames[td.getMonth()]
    yyyy = td.getFullYear();
    return mm + ' ' + dd + ' ' + yyyy;
})