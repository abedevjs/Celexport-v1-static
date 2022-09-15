///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PAGE ANIMATION

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


  classForm: '.quoteForm',
  classCat: '.formDetail--cat',
  classProd: '.formDetail--prod',
};

// const HScode = {
//   Nutmeg: '090811',
//   Mace: '090811',
//   Clove: '090710',
//   CloveStem: '090710',
//   ArabicaCelebes: '090111',
//   RobustaSumatra: '090111'
// }

var data = {
  categoryArr: [DOMid.IDNutmeg, DOMid.IDMace, DOMid.IDCloves],
  containerArr: [DOMclass.classNutmegContainer, DOMclass.classMaceContainer, DOMclass.classClovesContainer],
  productArr: [DOMid.IDABCD, DOMid.IDBWP, DOMid.IDSS, DOMid.IDUNPEELED, DOMid.IDRedMace, DOMid.IDYellowMace, DOMid.IDCloveBud, DOMid.IDCloveStem]
};

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
  // document.querySelector(DOMclass.classHs).textContent = (`HS Code: ${HScode[results.product]}`);
};

//FUNCTION

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

};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DOM
const sampleDom = document.querySelector('.sample');
const quantity = document.getElementById('quantity');
const UOM = document.getElementById('UOM');
const inco = document.getElementById('inco');
const des = document.getElementById('des');
const pod = document.getElementById('pod');
const payTerm = document.getElementById('payTerm');
const payMethod = document.getElementById('payMethod');
const sal = document.getElementById('sal');
const fir = document.getElementById('fir');
const pack = document.getElementById('pack');
const emaCon = document.getElementById('emaCon');
const category = document.getElementById('category');
const product = document.getElementById('product');
const noc = document.getElementById('noc');
const cou = document.getElementById('cou');
const pho = document.getElementById('pho');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EXPORT CALCULATOR

//DATA
// const inUSD = 14400;
const abcd = {
  initial: 'abcd',
  name: 'Peeled Nutmeg ABCD',
  quality: 'Grade: ABCD | Shape: Whole Around | Seed Count: 200 - 220 @ 1Kg | Moisture: <10% | Aflatoxin B1: <5 μg/kg',
  hsCode: '090811',
  origin: 'Maluku',
  pol: 'Surabaya',
  inspection: 2500000,
  quantity: {
    ton: 1000,
    twentyFCL: 14000,
    fourtyFCL: 24000
  },
  pack: 'Gunny Bag, 25 Kg - 50 Kg',
  price: 117000,//per Rp per Kg
  margin: 10000,
  leadTime: 2.2//10 hari per 20 fcl
};

const ss = {
  initial: 'ss',
  name: 'Peeled Nutmeg SS',
  quality: 'Grade: SS | Shape: Not Whole Around, Shrivelled | Moisture: <10% | Aflatoxin B1: <5 μg/kg',
  hsCode: '090811',
  origin: 'Maluku ',
  pol: 'Surabaya',
  inspection: 2500000,
  quantity: {
    ton: 1000,
    twentyFCL: 12000,
    fourtyFCL: 22000
  },
  pack: 'PP Bag, 25 Kg - 50 Kg',
  price: 95000,//per Kg
  margin: 10000,
  leadTime: 2.5//10 hari per 20 fcl
};

const bwp = {
  initial: 'bwp',
  name: 'Peeled Nutmeg BWP',
  quality: 'Grade: BWP | Shape: Broken, Punctured | Moisture: <13%',
  hsCode: '090811',
  origin: 'Maluku',
  pol: 'Surabaya',
  inspection: 1500000,
  quantity: {
    ton: 1000,
    twentyFCL: 13000,
    fourtyFCL: 24000
  },
  pack: 'PP Bag, 25 Kg - 50 Kg',
  price: 70000,//per Kg
  margin: 10000,
  leadTime: 2.4//8 hari per 20 fcl
};

const unpeeled = {
  initial: 'unpeeled',
  name: 'Unpeeled Nutmeg',
  quality: 'Grade: Unpeeled | Shape: Whole Around | Moisture: <13%',
  hsCode: '090811',
  origin: 'Maluku',
  pol: 'Surabaya',
  inspection: 1500000,
  quantity: {
    ton: 1000,
    twentyFCL: 14000,
    fourtyFCL: 24000
  },
  pack: 'PP Bag, 25 Kg - 50 Kg',
  price: 60000,//per Kg
  margin: 10000,
  leadTime: 2.5//6 hari per 20fcl
};

const redMace = {
  initial: 'redMace',
  name: 'Red Mace',
  quality: 'Shape: Broken | Red Mace Percentage: 100% | Moisture: <10%',
  hsCode: '090821',
  origin: 'Maluku',
  pol: 'Surabaya',
  inspection: 1500000,
  quantity: {
    ton: 1000,
    twentyFCL: 7000,
    fourtyFCL: 14000
  },
  pack: 'PP Bag, 25 Kg - 50 Kg',
  price: 260000,//per Kg
  margin: 20000,
  leadTime: 4.2//6 hari per 20fcl
};

const yellowMace = {
  initial: 'yellowMace',
  name: 'Yellow Mace',
  quality: 'Shape: Broken | Yellow Mace Percentage: 40% | Moisture: <10%',
  hsCode: '090821',
  origin: 'Maluku',
  pol: 'Surabaya',
  inspection: 1500000,
  quantity: {
    ton: 1000,
    twentyFCL: 7000,
    fourtyFCL: 14000
  },
  pack: 'PP Bag, 25 Kg - 50 Kg',
  price: 290000,//per Kg
  margin: 20000,
  leadTime: 6//6 hari per 20fcl
};

const cloveBud = {
  initial: 'cloveBud',
  name: 'Clove Bud',
  quality: 'Grade: Lal Pari | Moisture: <12%',
  hsCode: '090710',
  origin: 'Maluku',
  pol: 'Surabaya',
  inspection: 1500000,
  quantity: {
    ton: 1000,
    twentyFCL: 12000,
    fourtyFCL: 24000
  },
  pack: 'PP Bag, 25 Kg - 50 Kg',
  price: 120000,//per Rp per Kg
  margin: 10000,
  leadTime: 2.6//10 hari per 20 fcl
};

const cloveStem = {
  initial: 'cloveStem',
  name: 'Clove Stem',
  quality: 'Moisture: <12%',
  hsCode: '090710',
  origin: 'Maluku',
  pol: 'Surabaya',
  inspection: 1500000,
  quantity: {
    ton: 1000,
    twentyFCL: 7000,
    fourtyFCL: 14000
  },
  pack: '50 kg / 100 Kg Gunny Bag',
  price: 17000,//per Kg
  margin: 20000,
  leadTime: 4.2//10 hari per 20 fcl
};

const fob = {
  inRp: '',
  inUSD: '',
  perMT: '',
  perKg: ''
};

let currComm, Qnumber, weightCount, weightUnit, weightInKG, weightInMT, inUSD, hargaSupplier, profit, hpp, docs, handling, tax, leadTime, hargaEkspor;

const commodities = [abcd, ss, bwp, unpeeled, redMace, yellowMace, cloveBud, cloveStem];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTION
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const convert = async function () {
  try {
    const apiKey = '1420a6a39a495ad7b144b457';//1420a6a39a495ad7b144b457
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/IDR/1`;


    const fetchUrl = await fetch(url);
    const res = await Promise.race([fetchUrl, timeout(5)]);
    const data = await res.json();
    console.log(data);
    if (data.result === "error") return inUSD = 14470;

    inUSD = +data.conversion_result.toFixed(0) - 80;
    console.log(inUSD);
    // console.log(+data.conversion_result.toFixed(0));
  } catch (err) {
    console.log(err.message);
    return inUSD = 14470;
  }
};
// convert();

// export const getJSON = async function (url) {
//   try {
//     const fetchPro = await fetch(url);
//     const res = await Promise.race([fetchPro, timeout(5)]);
//     const data = await res.json();
//     // console.log(res, data);
//     if (!res.ok) throw new Error(`helpers.js: ${data.message} (${res.status})`);

//     return data;

//   } catch (err) {
//     throw err;//kita throw error ini ke function yg lg pake function error ini
//   }
// };

const quoteNumber = () => {
  Qnumber = Math.ceil(Math.random() * 999) + '-' + Math.ceil(Math.random() * 999);
  summaryCelexport.quoteNumber = `Q${Qnumber}`;
};

const date = new Date();
const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  // weekday: 'long',//numeric, short, narrow
};
const validStart = new Intl.DateTimeFormat('en-US', options).format(date);
const validEnd = new Intl.DateTimeFormat('en-US', options).format(new Date(date.setDate(date.getDate() + 7)));

const formatNumber = (num, type) => {
  num = Math.abs(num);
  num = num.toFixed(2);

  let numSplit = num.split('.');//123412.56
  let int = numSplit[0];
  let dec = numSplit[1];

  if (type === 'total') {
    // console.log(num, int, dec);//209677.21 209677 21
    if (int.length <= 6) {//123547,00 = 123.547,00 - 1234,00 = 1.234,00 
      int = int.substring(0, int.length - 3) + '.' + int.substring(int.length - 3, int.length + 3);//int.substring(0, int.length - 3) + '.' + int.substring(int.length - 3, 3)
      return int + ',' + dec;
    } else {//123456789 = 1.234.627,00
      let tes = num.replace('.', '');//123456789 (length 9)

      // console.log(tes, tes.length);
      int = tes.substring(0, tes.length - 8) + '.' + //1.23456789
        tes.substring(tes.length - 8, tes.length - 5) + '.' + //1.234.56789
        tes.substring(tes.length - 5, tes.length - 2) + ',' + //1.234.567,89
        tes.substring(tes.length - 1, tes.length)

      return int //$1.29.347,8
    }
  }

  if (type === 'MT') {
    console.log();
    if (fob.inUSD < 11111) {//inUsd = 2355 === in mt 2.355
      // console.log('yg a');
      int = int.substring(0, int.length - 3) + '.' + int.substring(int.length - 3, int.length + 1);
      return int + ',' + dec;
    }
    else if (fob.inUSD > 11111) {//9252,54 = 9.252,54 (int > 3 && fob.inUSD > 11111)
      int = int.substring(0, int.length - 3) + '.' + int.substring(int.length - 3, int.length + 3);
      // console.log('yg b');
      return int + ',' + dec;

    } else {//2871,63 = 287,16
      // console.log(num, int, dec);//2018.71 2018 71 - 
      // console.log('yg c');

      let tes = num.replace('.', '');//201871 = 201,87
      // int = num.replace('.', '').substring(0, num.length - 4) + ',' + tes.substring(tes.length - 3, tes.length - 1);
      int = tes.substring(0, num.length - 4) + ',' + tes.substring(tes.length - 3, tes.length - 1);
      return int + ',' + dec;
    }
  }

  if (type === 'KG') {//8.31511175898931
    // console.log(num, int, dec);//9.15 9 15 - 9,15
    let tes = num.replace('.', ',')

    return tes;
  }
};

const deleteCharacter = prod => {
  let produs;
  const [first, ...last] = prod.split('-');
  produs = first.toLowerCase().concat(last);
  return produs
};

const calcCOGS = (num, uom, product) => {
  weightCount = Number(num.value);
  const unit = uom.value;
  // let pengadaan;

  //Identify Product
  currComm = commodities.find(el => el.initial === product);

  //Identify Weight
  weightInKG = weightCount * currComm.quantity[unit];
  weightInMT = (weightCount * currComm.quantity[unit]) / 1000;
  weightUnit = currComm.quantity[unit];

  //Hitung harga pokok/harga pembelian oleh supplier
  hargaSupplier = currComm.price * weightInKG;
  console.log(`harga pokok: ${hargaSupplier}`);

  //Hitung biaya Pengadaan
  // pengadaan = currComm.price * (weightUnit * weightCount);

  //Hitung keuntungan
  // profit = (pengadaan * currComm.margin) / 100; //metode persentase dari pengadaan
  profit = currComm.margin * weightInKG; // metode margin supplier per kilo
  // profit = 'margin dengan supplier, bukan percentage';

  //Hitung HPP
  hpp = hargaSupplier + profit;
  // hpp = pengadaan + currComm.expense;

  // summaryCelexport.komoditas = currComm.name;
  summaryCelexport.price = currComm.price;
  summaryCelexport.hargaSupplier = hargaSupplier;
  // summaryCelexport.pengadaan = pengadaan;//$${formatNumber(fob.inRp / inUSD, 'total')}
  summaryCelexport.profit = profit;
  summaryCelexport.hpp = hpp;
};

const calcTax = () => {
  const PPH = 0.25 / 100;

  tax = hargaSupplier * PPH;

  console.log(`tax: ${tax}`);

  summaryCelexport.tax = tax;
};

const calcDocs = () => {
  const cooCert = 350000;
  const phytosanitaryCert = 500000;
  const fumigationCert = 2100000;

  docs = cooCert + phytosanitaryCert + fumigationCert + currComm.inspection;

  //   console.log(`DOCS: ${docs}`);
};

const calcExportHandling = () => {
  // const qty = Number(num.value);

  const customClearance = (UOM.value === 'ton' ? Math.round(weightCount / 10) : weightCount) * 400000;
  console.log(customClearance);

  const expense = 5000000;
  const cargoLautSurabaya = 9900000;
  const PEB = 300000;
  const PPJK = 3500000;
  const stuffing = 2350000;
  const weighing = 2000000;

  handling = expense + cargoLautSurabaya + currComm.inspection + weighing + customClearance + PEB + PPJK + stuffing + tax;

  hargaEkspor = hpp + docs + handling;

  summaryCelexport.hargaEkspor = hargaEkspor;


  // console.log(`Handling: ${handling}`);
  // console.log(`Harga Ekspor: ${hargaEkspor}`);
};

const calcLeadTime = () => {
  leadTime = Math.ceil(weightInMT * currComm.leadTime);
  summaryCelexport.leadTime = `${leadTime} days`;
};

const calcFinancing = (pay) => {
  // const investor = 0.1;
  const pterm = pay.value;
  summaryCelexport.payment = pterm

  // if (pterm === 'advance') {
  //   // funding = hargaEkspor * investor;
  //   funding = 0;
  //   // talangan = hargaEkspor + funding;
  //   talangan = 0;

  //   summaryCelexport.talangan = talangan;
  //   summaryCelexport.funding = funding;
  //   // console.log(`Talangan: ${talangan} Funding: ${funding}`);

  // } else if (pterm === 'dpFifty') {
  //   // talangan = hargaEkspor / 2;
  //   talangan = 0;
  //   // funding = talangan * investor;
  //   funding = 0;
  //   // funding = (hargaEkspor * investor);

  //   summaryCelexport.talangan = talangan;
  //   summaryCelexport.funding = funding;
  //   // console.log(`Talangan: ${talangan} Funding: ${funding}`);

  // } else if (pterm === 'dpThirty') {
  //   // talangan = hargaEkspor * 0.7
  //   talangan = 0;
  //   // funding = talangan * investor;
  //   funding = 0;
  //   // funding = (hargaEkspor * investor);
  //   summaryCelexport.talangan = talangan;
  //   summaryCelexport.funding = funding;
  //   // console.log(`Talangan: ${talangan} Funding: ${funding}`);
  // }
};

const calcFOB = () => {
  // fob.inRp = funding + hargaEkspor;
  fob.inRp = hargaEkspor;
  fob.inUSD = fob.inRp / inUSD;//Number(Math.round(fob.inRp / inUSD).toFixed(3))
  fob.perMT = fob.inUSD / weightInMT;//Number(Math.round(fob.inUSD / weightInMT).toFixed(0));
  fob.perKg = fob.inUSD / weightInKG;//Number((fob.inUSD / weightInKG).toFixed(2));

  summaryCelexport.fobTotal = `$${formatNumber(fob.inRp / inUSD, 'total')}`;
  summaryCelexport.fobPerMT = `$${formatNumber(fob.perMT, 'MT')}`;
  summaryCelexport.fobPerKG = `$${formatNumber(fob.perKg, 'KG')}`;

  // console.log(fob);
  // console.log(`
  // Total: $${formatNumber(fob.inRp / inUSD, 'total')} 
  // per MT: $${formatNumber(fob.perMT, 'MT')} 
  // per KG $${formatNumber(fob.perKg, 'KG')}`);
};

const summaryCelexport = {
  quoteNumber: '',//string
  validUntil: validEnd,//string
  price: '',//number
  kurs: inUSD,//number
  leadTime: '',//string
  hargaSupplier: '',//number
  profit: '',//string
  hpp: '',//number
  hargaEkspor: '',//number
  tax: '', //number
  payment: '',
  fobTotal: '',//string
  fobPerMT: '',//string
  fobPerKG: ''//string   
};

const displayQuoteSummary = () => {
  const html = `
    <div class="quoteSummary" id="quoteSummary">
          <div class="box-title margin-top-veryHigh margin-bot-med">
              <h2>QUOTE SUMMARY</h2>
          </div>
              
          <div class="quoteSummary__content"> 
              <div class="quoteLeft">
                  <div class="quoteLeft__list quoteLeft__list--1">
                      <p> Dear <b>${sal.options[sal.selectedIndex].text} ${fir.value}</b>,<br>
                      Thank you for your enquiry. Celexport is pleased to make you the following offer, for which please find our further details below.</p>
                      <br>
                      <p> Quote Number: <b>Q${Qnumber}</b><br>
                      <p> Offer expires At: <b>${validEnd}</b><br>
                      Our quotation is valid until the above mentioned offer expiry date. We reserve the right to review and re-quote, if we do not receive
                      any acceptance confirmation, prior to above mentioned offer expiry date.</p>
                  </div>
                  <div class="quoteLeft__list quoteLeft__list--2">
                      <h5 class="heading-5 heading-5--blue ">Product Information</h4>
                      <ul>
                          <li>Name: <b>${currComm.name}</b></li>
                          <li>HS Code: <b>${currComm.hsCode}</b></li>
                          <li>Origin: <b>${currComm.origin}, Indonesia</b></li>
                          <li>Quality: <b>${currComm.quality}</b></li>
                          <li>Quantity: <b>${weightCount} ${UOM.options[UOM.selectedIndex].text === 'Tons' ? '' : 'of'} ${UOM.options[UOM.selectedIndex].text} ${UOM.options[UOM.selectedIndex].text === 'Tons' ? '' : '/'} ${UOM.options[UOM.selectedIndex].text === 'Tons' ? '' : weightInMT} ${UOM.options[UOM.selectedIndex].text === 'Tons' ? '' : 'MT'}</b></li>
                          <li>Lead Time: <b>${leadTime} days</b> <em>(after the initial payment)</em></li>
                          <li>Packing Method: <b>${currComm.pack}</b></li>
                          <!-- <li>Package Method: <b>{pack.options[pack.selectedIndex].text}</b></li> -->
                      </ul>
                  </div>
                  <div class="quoteLeft__list quoteLeft__list--3">
                      <h5 class="heading-5 heading-5--blue ">Documents Included:</h4>
                      <ul>
                          <li>Bill of Lading</li>
                          <li>Commercial Invoice</li>
                          <li>Packing List</li>
                          <li>Certificate of Origin</li>
                          <li>Certificate of Phytosanitary</li>
                          <li>Certificate of Fumigation</li>
                          <li>Report of Analysis</li>
                          <li>Loading Survey Report</li>
                      </ul>
                  </div>
                      <div class="quoteLeft__list quoteLeft__list--4">
                      <h5 class="heading-5 heading-5--blue ">Payment Information</h4>
                      <ul>
                          <li>Payment Term: <b>${payTerm.options[payTerm.selectedIndex].text}</b></li>
                          <li>Payment Method: <b>${payMethod.options[payMethod.selectedIndex].text}</b></li>
                      </ul>
                  </div>
                  <div class="quoteLeft__list quoteLeft__list--5">
                      <h5 class="heading-5 heading-5--blue ">Price Information</h4>
                      <div class="quotePriceList">
                          <div class="quotePriceList__fob">
                              <h4>FOB ${currComm.pol}, Indonesia</h4>
                              <p>Total: <span class="quotePriceList__fob--numbers">$${formatNumber(fob.inRp / inUSD, 'total')}</span></p>
                              <p>per MT: <span class="quotePriceList__fob--numbers">$${formatNumber(fob.perMT, 'MT')}</span></p>
                              <p>per KG: <span class="quotePriceList__fob--numbers">$${formatNumber(fob.perKg, 'KG')}</span></p>
                          </div>
                          <div class="quotePriceList__cfr">
                              <h4>CFR ${pod.value}, ${des.value}</h4>
                              <p class="quotePriceList__cfr--numbers">Due to changes in freight rates, we will send this request to:<br> <em>${emaCon.value}</em>  in less than 24 hours.</p>
                          </div>
                          <div class="quotePriceList__cif">
                              <h4>CIF ${pod.value}, ${des.value}</h4>
                              <p class="quotePriceList__cif--numbers">Due to changes in freight rates, we will send this request to:<br> <em>${emaCon.value}</em>  in less than 24 hours.</p>
                          </div>
                      </div>
                  </div>

                  <div class="quoteCTA">
                      <p>For more quote request please <a href='/quote'><em>reload</em></a>  this page. <br> If you want to proceed further with this offer or have any other inquiries, please do not hesitate to contact me.</p>
                      <div class="quoteCTA__box">
                          <img src="image/abe.png" alt="Muhammad Akbar"  class="founder__photo">
                          <div class="quoteCTA__box quoteCTA__box--text">
                              <span class="founder__name">Muhammad Akbar</span>
                              <span class="founder__title">Managing Director</span>
                          </div>
                          <div class="quoteCTA__box quoteCTA__box--icon">
                              <a href="https://wa.me/6281284906025?text=Hello%20Celexport!" target="_blank">
                                  <svg class="founder__icon founder__icon-5">
                                      <use xlink:href="image/social.svg#whatsapp-3"></use>
                                  </svg>   
                              </a>
                              <a href="mailto:akbar@celexport.com" target="_blank">
                                  <svg class="founder__icon founder__icon-1">
                                      <use xlink:href="image/social.svg#email"></use>
                                  </svg>   
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="quoteRight">
                  <img src="image/${currComm.initial}.png" alt="quoteRight image">
                  <div class="quoteRight quoteRight--text">
                      <p>Quote Number: <b>Q${Qnumber}</b></p>
                      <p>Valid from: <b>${validStart}</b></p>
                      <p>Valid until: <b>${validEnd}</b></p>
                  </div>
                  <div class="quoteRight quoteRight--button">
                      <!-- <p>Send your Quote to <b>${emaCon.value}</b> ?</p> -->
                      <button class="btn btn--submit-contact" id="downloadPDF">Download PDF</button>
                  </div>
                  
                  
              </div>
          </div>
      </div>
    `

  sampleDom.insertAdjacentHTML('beforebegin', html);
  sampleDom.style.display = 'none';
};


//EVENTS

const btnSubmitQuote = document.querySelector('.btn--submit-quote');
btnSubmitQuote.addEventListener('click', async function (event) {
  event.preventDefault();

  console.log('cakep');

  await convert();

  //Generate Quote Number
  quoteNumber();

  //Calculate COGS (Cost of Good Sold) / HPP (Harga Pokok Pembelian)
  calcCOGS(quantity, UOM, deleteCharacter(results.product));

  //Calculate Tax
  calcTax();

  //Calculate Document Cost
  calcDocs();

  //Calculate Local Handling (Ternate - Surabaya) jika CFR dan CIF
  calcExportHandling();

  //Calculate Lead Time
  calcLeadTime();

  //Calculate Financing
  calcFinancing(payTerm);

  //Calculate FOB
  calcFOB();


  //Display Quote Summary
  setTimeout(() => {
    displayQuoteSummary();

    //Display CFR or CIF
    const cfr = document.querySelector('.quotePriceList__cfr');
    const cif = document.querySelector('.quotePriceList__cif');
    if (inco.value === 'FOB') {
      cfr.style.display = 'none';
      cif.style.display = 'none';
    } else if (inco.value === 'CFR') {
      cif.style.display = 'none';
    } else if (inco.value === 'CIF') {
      cfr.style.display = 'none';
    }

    const btndonlot = document.getElementById('downloadPDF').addEventListener('click', function (e) {
      e.preventDefault();
      console.log('download clicked');
      const pdf = document.getElementById('quoteSummary');
      html2pdf().from(pdf).save();

    });

  }, 3000)
  // displayQuoteSummary(); 



  //Summmary
  console.log(summaryCelexport, fob);
});