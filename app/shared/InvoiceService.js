//A singleton that manages the current invoice + loads past invoices
angular.module('shared.invoiceService', [
  'underscore'
])

.service("invoiceService", function(_){
  var pastInvoices = [
    {number: 1, date: "05/24/2014", customer: "Acme Inc.", products:[{name: "Product 1", quantity: 1, price: 29.99 }, {name: "Product 2", quantity: 1, price: 39.99 }] },
  ];
  var currentInvoice;
  var nextInvoiceNumber = 2;

  //returns formatted current date string
  var currentDate = function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd;
    } 
    if(mm<10) {
        mm='0'+mm;
    } 
    return mm+'/'+dd+'/'+yyyy;
  };

  //sets current invoice to a past invoice identified by Id number
  this.setCurrentInvoice = function(numberId){
    var invoice = _.find(this.getPastInvoices(), function(item){
      return item.number === numberId;
    });
    if(invoice){
      currentInvoice = invoice;
    }
  };

  //gets the current invoice and lazy instantiates new ones
  this.getCurrentInvoice = function(){
    if(!currentInvoice){

      currentInvoice = {
        number: nextInvoiceNumber,
        date:currentDate(),
        customer:"",
        products:[],
      };
    }
    return currentInvoice;
  };
  //adds non-duplicate products to invoice, could optimize this later
  this.addProductsToInvoice = function(products){
    if(!currentInvoice) return;

    for(i = 0; i < products.length; i++){
      var hasProductAlready = _.find(currentInvoice.products, function(item){
        return item.name === products[i].name;
      });
      if(!hasProductAlready){
        currentInvoice.products.push(products[i]);
      }
    }
  };
  //clears any current invoice being modified
  this.clearCurrentInvoice = function(){
    currentInvoice = null;
  };

  this.deleteInvoice = function(numberId){
    for (var i = 0; i<pastInvoices.length; i++){
      if(pastInvoices[i].number === numberId){
        pastInvoices.splice(i,1);
        break;
      }
    }
  };
  //saves a new invoice if its new, or modifies past invoices
  this.saveCurrentInvoice = function(){
    if(!currentInvoice) return;
    if(currentInvoice.number === nextInvoiceNumber){
      pastInvoices.push(currentInvoice);
      nextInvoiceNumber++;
    }else{
      for (var i = 0; i<pastInvoices.length; i++){
        if(currentInvoice.number === pastInvoices[i].number){
          pastInvoices[i] = currentInvoice;
          break;
        }
      }
    }
    currentInvoice = null;
  };

  //returns a deep clone of the past invoices to prevent modificiation
  this.getPastInvoices = function(){
    //lazy deep cloning
    return JSON.parse(JSON.stringify(pastInvoices));
  };
});
