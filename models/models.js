// var base = process.env.PWD

Uploads = new FS.Collection("uploads", {
    stores: [new FS.Store.FileSystem("uploads", {
        path: "~/code/mrt/simple-cms/uploads"
    })]
});