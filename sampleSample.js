//const { render } = require("node-sass");

//import { DOOMid } from './elements';
// console.log('quote js');

const DOMid = {
  IDNutmeg: 'Nutmeg',
  // IDSpices: 'Spices',
  // IDCoffee: 'Coffee',
  // IDConfectionary: 'Confectionary',
  IDMace: 'Mace',
  // IDSnack: 'Snack',
  IDCloves: 'Cloves',

  IDABCD: 'ABCD',
  IDSS: 'SS',
  IDBWP: 'BWP',
  IDUNPEELED: 'UNPEELED',
  // IDClove: 'Clove',
  // IDCandlenut: 'Candlenut',
  // IDGalangalRoot: 'Galangal-Root',
  // IDMungBean: 'Mung-Bean',
  IDRedMace: 'Red-Mace',
  IDYellowMace: 'Yellow-Mace',

  IDCloveBud: 'Clove-Bud',
  IDCloveStem: 'Clove-Stem',

  // IDDesiccatedCoconut: 'Desiccated-Coconut',
  // IDArabicaCelebes: 'Arabica-Celebes',
  // IDRobustaSumatra: 'Robusta-Sumatra',
  // IDZanana: 'Zanana',
  // IDPisang: 'Pisang-Mesir',
  // IDBriquette: 'Charcoal-Briquette',
  // IDWood: 'Wood-Charcoal'
};

const DOMclass = {
  classNutmegContainer: '.NutmegContainer',
  classMaceContainer: '.MaceContainer',
  classClovesContainer: '.ClovesContainer',
  // classCoffeeContainer: '.CoffeeContainer',
  // classSnackContainer: '.SnackContainer',
  // classEnergyContainer: '.EnergyContainer',


  classForm: '.sampleForm',
  classCat: '.formDetail--cat',
  classProd: '.formDetail--prod'
};

var data = {
  categoryArr: [DOMid.IDNutmeg, DOMid.IDMace, DOMid.IDCloves],
  containerArr: [DOMclass.classNutmegContainer, DOMclass.classMaceContainer, DOMclass.classClovesContainer],
  productArr: [DOMid.IDABCD, DOMid.IDBWP, DOMid.IDSS, DOMid.IDUNPEELED, DOMid.IDRedMace, DOMid.IDYellowMace, DOMid.IDCloveBud, DOMid.IDCloveStem]
};

// const formQuoteSummary = document.querySelector('quoteForm');
// if(formQuoteSummary) formQuoteSummary.addEventListener('submit', e => {
// e.preventDefault();

// //Product Information
// // const category = results.category;
// // const product = results.product;
// const quantity = document.getElementById('Quantity').value;
// const unit = document.getElementById('UOM').value;
// const pack = document.getElementById('pack').value;
// const payment = document.getElementById('pterm').value;
// const currency = document.getElementById('curr').value;

// //Delivery Information
// const methodOfDispatch = document.getElementById('mod').value;
// const incoterm = document.getElementById('inco').value;
// const destinationCountry = document.getElementById('des').value;
// const portOfDischarge = document.getElementById('pod').value;

// //Company Information
// const companyName = document.getElementById('noc').value;
// const companyAddress = document.getElementById('adr').value;
// const companyCountry = document.getElementById('cou').value;
// // const companyState = document.getElementById('sta').value;
// // const companyCity = document.getElementById('cit').value;
// // const companyPhone = document.getElementById('tel').value;
// const companyEmail = document.getElementById('emaCom').value;
// const companyWebsite = document.getElementById('web').value;

// //Staff Information
// const staffSalutation = document.getElementById('sal').value;
// const staffName = document.getElementById('fir').value;
// const staffEmail = document.getElementById('emaCon').value;
// const staffPhone = document.getElementById('pho').value;

// const result = {
//   productInformation: [results.category, results.product, quantity, unit, pack, payment, currency],
//   deliveryInformation: [methodOfDispatch, incoterm, destinationCountry, portOfDischarge],
//   companyInformation: [companyName, companyAddress, companyCountry, companyEmail, companyWebsite],
//   staffInformation: [staffSalutation, staffName, staffEmail, staffPhone]
// };

// console.log(result);
// });


// const formSampleSummary = document.querySelector('.sampleForm');
// if(formSampleSummary) formSampleSummary.addEventListener('submit', e => {
//   e.preventDefault();

//   // var e = document.getElementById("ddlViewBy");
//   // var strUser = e.options[e.selectedIndex].text;

//   // const category = results.category;
//   // const product = results.product;
//   const name = document.getElementById('name').value;
//   const company = document.getElementById('company').value;
//   const country = document.getElementById('country').value;
//   const email = document.getElementById('email').value;
//   const tel = document.getElementById('tel').value;


//   // const result = [category, product, name, company, country, email, tel];


//   const result = [results.category, results.product, name, company, country, email, tel]

//   console.log(result);

//   //console.log(category, product, name, company, country, email, tel);
// });

const results = {
  category: '',
  product: ''
};

// var nodeListForEach =  function(list, callback) {
//   for (var i = 0; i < list.length; i++)
//   callback(list[i], i);
// };

const renderResult = (category, product) => {
  document.querySelector(DOMclass.classCat).textContent = (`Category: ${category}`);
  document.querySelector(DOMclass.classProd).textContent = (`Product: ${product.includes('-') ? product.replace('-', ' ') : product}`);
}

const modifyId = (arrId, c) => {
  if (c === 'blur') {
    arrId.forEach(function (cur) {
      document.getElementById(cur).classList.add('blur');
    })
  }

  // if(c === 'value') {
  //   arrId.map((el) => {
  //    const val = document.getElementById(el).value;
  //   })
  // }
};

const modifyClass = (category) => {
  let container = `.${category}Container`;

  if (data.containerArr.includes(container)) {

    index = data.containerArr.indexOf(container)
    data.containerArr.splice(index, 1);

    document.querySelector(container).classList.remove('disappear');
    document.querySelector(container).classList.add('show');

    data.containerArr.forEach(function (cur) {
      document.querySelector(cur).classList.add('disappear');
    })
    data.containerArr.push(container);
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

clickCategory = category => {
  if (data.categoryArr.includes(category)) {
    index = data.categoryArr.indexOf(category)
    data.categoryArr.splice(index, 1);

    document.getElementById(category).classList.remove('blur');
    modifyId(data.categoryArr, 'blur');

    modifyClass(category);

    data.categoryArr.push(category);

    results.category = category;
  }
}

clickProduct = (product) => {

  if (data.productArr.includes(product)) {
    index = data.productArr.indexOf(product)
    data.productArr.splice(index, 1);

    document.getElementById(product).classList.remove('blur');
    modifyId(data.productArr, 'blur');

    data.productArr.push(product);

    results.product = product
  }

  renderResult(results.category, results.product);

  document.querySelector(DOMclass.classForm).classList.remove('disappear');
  document.querySelector(DOMclass.classForm).classList.add('show');

}