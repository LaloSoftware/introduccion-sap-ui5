sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, MessageBox) {
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

            handlePressEvent: function(event){
                MessageToast.show("Hola mundo");
            },

            handlePressBoxEvent: function(){
                MessageBox.show("Hola mundo desde un box", {
                    title: "Mi primer box",
                    icon: MessageBox.Icon.SUCCESS
                });
            },
        });
    });
