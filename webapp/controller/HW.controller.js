sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.proyecto1.controller.HW", {
            onInit: function () {
                console.log("Hola mundo desde onInit")
            }, 
            
            onBeforeRendering: function (){
                console.log("Ciclo de vida en on before rendering")
            },

            onAfterRendering: function(){
                console.log("Ciclo de vida en on after rendering")
            },

            onExit: function(){
                console.log("Ciclo de vida terminado")
            },
        });
    });
