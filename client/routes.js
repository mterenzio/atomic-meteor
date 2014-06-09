Router.map(function() {
    this.route('home', {
        path: '/'
    });
    this.route('schemaupload', {
      path: '/schemaupload',
      template: "schemaupload"
    });
    this.route('schemaList', {
      path: '/user',
      template: "schemaList",
      data: function(){
        var data = CollectionData.find();
        var array = [];
        data.forEach( function (item) {
          var obj = {};
          obj._id = item._id;
          obj.collectionName = item.collectionName;
          obj.schemaID = item.schemaID;
          array.push(obj);
        });

        var data = {};
        data.collections = JSON.parse(JSON.stringify(array));
        return data;             
      }      
    });
    this.route('vendor.eventDetail', {
      path: '/user/:_id',
      template: 'schemas',
      data: function(){
        var data = CollectionData.findOne({_id: this.params._id});

        if (data)
        {
          Session.set("collectionName", data.collectionName);
          var url = Uploads.findOne({_id:data.schemaID}).url();
          if (url)
          {
            var schema = createNewSchema(url);
            var schemaData = eval(schema);
            if (schemaData)
            {
              // console.log(schemaData);
              var array = [];
              for (var key in schemaData._schema) {
                var items = schemaData._schema[key];
                var obj = {};
                obj.label = items.label;
                obj.key = key;
                obj.type = className(items.type);
                array.push(obj);
              }
              var data = {};
              data.collections = JSON.parse(JSON.stringify(array));
              return data;
            }
          }
        }
      },       
      onAfterAction: function () {
      },
      onStop: function () {
      },
      waitOn: function () {
      }
    });    
    this.route('about')
});

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
});