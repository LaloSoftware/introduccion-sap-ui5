/*global QUnit*/

sap.ui.define([
	"ns/proyecto1/controller/HW.controller"
], function (Controller) {
	"use strict";

	QUnit.module("HW Controller");

	QUnit.test("I should test the HW controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
