sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
], function(Controller, UIComponent, JSONModel, History) {
    'use strict';
    
    return Controller.extend("ns.proyecto1.controller.Detail", {
        _router: null,
        _oModel: null,
        onInit: function(){
            this._setModels();
            this._router = UIComponent.getRouterFor(this);
            this._router.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
        },
        
        _setModels: function(){
            this._oModel = this.getOwnerComponent().getModel("northwind");
            this._oModel.setUseBatch(false);
            let oProduct = new JSONModel({
                data: null
            });
            this.getView().setModel(oProduct, "Product");
        },

        _onObjectMatched: function(oEvent) {
            let { id } =  oEvent.getParameter("arguments");
            console.log(id);
            this._getData(id);
        },

        _getData: function(productId){
            console.log(productId);
            let oProduct = this.getView().getModel("Product");
            let sPath = `/Products(${productId})`;
            this._oModel.read(sPath, {
                success: function(oData){
                    console.log(oData);
                    oProduct.setProperty("/data", oData);
                },
                error: function(err){
                    console.log(err)
                }
            });
        },

        onNavBack: function(){
            let sPreviusHash = History.getInstance().getPreviousHash();

            if(sPreviusHash){
                History.go(-1);
            } else {
                this._router.navTo("home");
            }
        }
    });
});