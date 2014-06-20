//A service that saves product data and shares it between product + invoice views
angular.module('shared.invoiceService', [])

.service("invoiceService", function(){
  var pastInvoices = [
    {number: 1, date: "5/24/2014", customer: "Acme Inc.", products:[{name: "Product 1", quantity: 1, price: 49.99 }, {name: "Product 2", quantity: 1, price: 49.99 }] },
  ];
  var currentInvoice;
  var nextInvoiceNumber = 2;

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
        date:"5/24/2014",
        customer:"",
        products:[],
      };
    }
    return currentInvoice;
  };

  //clears any current invoice being modified
  this.clearCurrentInvoice = function(){
    currentInvoice = null;
  };

  this.deleteInvoice = function(numberId){
    for (var i = 0; i<pastInvoices.length; i++){
      if(pastInvoices[i].number === numberId){
        pastInvoices.splice(i,1)
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
