requirejs.config({
    shim : {
        bootstrap : {
            deps : [ 'jquery', 'tether'],
            exports: 'Bootstrap'
        },
        mdb : {
            deps : [ 'jquery', 'bootstrap'],
            exports: 'mdb'
        },
    },
    paths: { 
        'jquery': ['/client/public/js/jquery.min'],
        'tether-g': ['/client/public/js/tether.min'],
        'bootstrap': ['/client/public/js/bootstrap.min'],
        'mdb': ['/client/public/js/mdb.min.js'],
    }
});