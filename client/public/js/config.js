requirejs.config({
    baseUrl: "client",
    paths: { 
        jquery: ['/public/js/libs/jquery.min'],
        tether: ['/public/js/libs/tether.min'],
        bootstrap: ['/public/js/libs/bootstrap.min'],
        mdb: ['/public/js/libs/mdb.min'],
    },
    shim : {
        jquery: {
            exports: '$'
        },
        bootstrap : {
            deps : [ 'jquery', 'tether'],
        },
        mdb : {
            deps : [ 'jquery', 'bootstrap'],
            exports: 'mdb'
        },
    }
});
require(['/public/js/app/main.js'])