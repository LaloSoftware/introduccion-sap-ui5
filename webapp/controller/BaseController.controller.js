sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent",
], function(Controller, MessageBox, MessageToast, JSONModel, UIComponent) {
    'use strict';
    
    return Controller.extend("ns.proyecto1.controller.BaseController", {
        getRouter: function(){
            return UIComponent.getRouterFor(this);
        },

        navBack: function(pageName, options = {}){
            this.getRouter().navTo(pageName, options);
        },

        setModel: function(object, modelName){
            return this.getView().setModel(object, modelName);
        },

        getModel: function(modelName){
            return this.getView().getModel(modelName);
        }
    });
});