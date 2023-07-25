sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    
    return Controller.extend("ns.proyecto1.controller.Detail", {
        onInit: function(){
            console.log("OnInit triggered");
        }
    });
});