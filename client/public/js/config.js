requirejs.config({
    baseUrl: "client",
    paths: { 
        jquery: ['/public/js/libs/jquery.min'],
        bootstrap: ['/public/js/libs/bootstrap.bundle.min'],
        mdb: ['/public/js/libs/mdb.min'],
    },
    shim : {
        jquery: {
            exports: '$'
        },
        bootstrap : {
            deps : [ 'jquery'],
        },
        mdb : {
            deps : [ 'jquery', 'bootstrap'],
            exports: 'mdb'
        }
    }
});
require(['/public/js/app/main.js'])