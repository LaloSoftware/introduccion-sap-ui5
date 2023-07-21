sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, MessageBox, JSONModel) {
        "use strict";

        return Controller.extend("ns.proyecto1.controller.HW", {
            oModel: null,

            onInit: function () {
                console.log("Hola mundo desde onInit");
                this._setModels();
                this._getProducts();
            },
            
            _setModels: function(){
                this.oModel = this.getOwnerComponent().getModel("northwind");
                this.oModel.setUseBatch(false);
                let productos = new JSONModel({
                    products: [],
                    isBusy: false
                });
                this.getView().setModel(productos, "NWProducts");
            },

            _getProducts: function(){
                let oProducts = this.getView().getModel("NWProducts");
                oProducts.setProperty("/isBusy", true);
                let sPath = "/Products";
                this.oModel.read(sPath, {
                    success: function(oData){
                        console.log(oData);
                        oProducts.setProperty("/products", oData.results);
                        oProducts.setProperty("/isBusy", false);
                    },
                    error: function(err){
                        console.log(err);
                    },
                    finally: function(){
                    }
                })
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
