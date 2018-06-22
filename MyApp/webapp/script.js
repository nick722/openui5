sap.ui.getCore().attachInit(function () {
   new sap.ui.xmlview({
       viewName: "sap.ui.demo.walkthrough.view.App"
   }).placeAt("content");
});