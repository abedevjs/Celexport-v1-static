'use strict;'

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
const btnSubmitQuote = document.querySelector('.btn--submit-quote');
const cfr = document.querySelector('.quotePriceList__cfr');
const cif = document.querySelector('.quotePriceList__cif');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DATA

const abcd = {
    initial: 'abcd',
    name: 'Peeled Nutmeg ABCD',
    quality: 'Grade: ABCD | Shape: Whole Around | Seed Count: 200 - 220 @ 1Kg | Moisture: <10% | Aflatoxin B1: <5 μg/kg',
    hsCode: '090811',
    origin: 'Maluku',
    pol: 'Surabaya',
    quantity: {
        ton: 1000,
        twentyFCL: 14000,
        fourtyFCL: 23000
    },
    pack: 'Gunny Bag, 50 Kg',
    price: 118000,//per Rp per Kg
    margin: 9500,
    leadTime: 2.2//10 hari per 20 fcl
};

const ss = {
    initial: 'ss',
    name: 'Peeled Nutmeg SS',
    quality: 'Grade: SS | Shape: Not Whole Around, Shrivelled | Moisture: <10% | Aflatoxin B1: <5 μg/kg',
    hsCode: '090811',
    origin: 'Maluku ',
    pol: 'Surabaya',
    quantity: {
        ton: 1000,
        twentyFCL: 13000,
        fourtyFCL: 22000
    },
    pack: 'Gunny Bag, 50 Kg',
    price: 98000,//per Kg
    margin: 9000,
    leadTime: 2.5//10 hari per 20 fcl
};

const bwp = {
    initial: 'bwp',
    name: 'Peeled Nutmeg BWP',
    quality: 'Grade: BWP | Shape: Broken, Punctured | Moisture: <13%',
    hsCode: '090811',
    origin: 'Maluku',
    pol: 'Surabaya',
    quantity: {
        ton: 1000,
        twentyFCL: 12000,
        fourtyFCL: 21000
    },
    pack: 'Gunny Bag, 50 Kg',
    price: 68000,//per Kg
    margin: 10500,
    leadTime: 2.4//8 hari per 20 fcl
};

const unpeeled = {
    initial: 'unpeeled',
    name: 'Unpeeled Nutmeg',
    quality: 'Grade: Unpeeled | Shape: Whole Around | Moisture: <13%',
    hsCode: '090811',
    origin: 'Maluku',
    pol: 'Surabaya',
    quantity: {
        ton: 1000,
        twentyFCL: 11000,
        fourtyFCL: 20000
    },
    pack: 'Gunny Bag, 50 Kg',
    price: 60000,//per Kg
    margin: 10500,
    leadTime: 2.5//6 hari per 20fcl
};

const redMace = {
    initial: 'redMace',
    name: 'Red Mace',
    quality: 'Shape: Broken | Red Mace Percentage: 100% | Moisture: <10%',
    hsCode: '090821',
    origin: 'Maluku',
    pol: 'Surabaya',
    quantity: {
        ton: 1000,
        twentyFCL: 7000,
        fourtyFCL: 14000
    },
    pack: 'PP Bag, 50 Kg',
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
    quantity: {
        ton: 1000,
        twentyFCL: 7000,
        fourtyFCL: 14000
    },
    pack: 'PP Bag, 50 Kg',
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
    quantity: {
        ton: 1000,
        twentyFCL: 12000,
        fourtyFCL: 22000
    },
    pack: 'PP Bag, 50 Kg',
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
    quantity: {
        ton: 1000,
        twentyFCL: 7000,
        fourtyFCL: 14000
    },
    pack: 'PP Bag, 50 Kg',
    price: 17000,//per Kg
    margin: 20000,
    leadTime: 4.2//10 hari per 20 fcl
};

const commodities = [abcd, ss, bwp, unpeeled, redMace, yellowMace, cloveBud, cloveStem];
let currentCommodity;

const Biaya = {
    packing: {
        hargaSatuanKarung: 10000,
        ukuranKarung: 50,
        biayaKirimKarung: 10000, //per kg
        hargaSatuanSilica: 5000,
        biayaKirimSilica: 250000
    },

    inspection: {
        biayaParameterAnalysis: 2500000,
        biayaLoadingSurveyReport: 2500000,
        biayaSample: 3500000
    },

    document: {
        BiayaCertificateOrigin: 350000,
        BiayaCertificatePhytosanitary: 1500000,
        BiayaCertificateFumigation: 2100000,
    },

    custom: {
        biayaCustomClearance: 1000000,
        biayaPEB: 500000,
        biayaTruckingSBY: 2500000,
        biayaRework: 2125000,
        biayaLOLO: 1250000,
        biayaSewaGudang: 1000000,
        biayaEmergencyCost: 8000000
    },

    localFreight: {
        biayaFreightTobeloSurabaya: 6000000,
        biayaTHCSurabaya: 2600000,
        container20Feet: 2000000,
        container40Feet: 6000000
    },

    tax: {
        PPH: 25 / 100
    },

    expenses: {
        BiayaTiketPesawatPP: 0,
        BiayaTransportasiLokalPP: 500000 * 2,
        BiayaPenginapan: 0 * 7,
        BiayaMealPerDay: 35000 * 30,
        BiayaPulsa: 0
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CLASSES

class Helper {
    inUSD;
    validStart;
    validEnd;
    quoteNumber;

    constructor() {
        this.convert();
        this.generateQuoteNumber();
        this.generateValidDate();
    }

    defineCommodity() {
        let productInitial;
        const [first, ...last] = results.product.split('-');
        productInitial = first.toLowerCase().concat(last);

        currentCommodity = commodities.find(el => el.initial === productInitial);
        console.log(currentCommodity);

        return currentCommodity
    }

    timeout(s) {
        return new Promise(function (_, reject) {
            setTimeout(function () {
                reject(new Error(`Request took too long! Timeout after ${s} second`));
            }, s * 1000);
        });
    }

    async convert() {
        try {
            const apiKey = '1420a6a39a495ad7b144b457';//1420a6a39a495ad7b144b457
            const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/IDR/1`;


            const fetchUrl = await fetch(url);
            const res = await Promise.race([fetchUrl, this.timeout(5)]);
            const data = await res.json();
            // console.log(data);
            if (data.result === "error") return this.inUSD = 14470;

            this.inUSD = +data.conversion_result.toFixed(0) - 80;
            // console.log(this.inUSD);
            // console.log(+data.conversion_result.toFixed(0));
        } catch (err) {
            // console.log(err.message);
            return this.inUSD = 14470;
        }
    }

    formatNumber(number) {
        const options = {
            style: 'currency',
            currency: 'USD'
        }

        const formatted = new Intl.NumberFormat('en-US', options).format(number);
        return formatted
    }

    generateQuoteNumber() {
        this.quoteNumber = Math.ceil(Math.random() * 999) + '-' + Math.ceil(Math.random() * 999);
    }

    generateValidDate() {
        const date = new Date();
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        this.validStart = new Intl.DateTimeFormat('en-US', options).format(date);
        this.validEnd = new Intl.DateTimeFormat('en-US', options).format(new Date(date.setDate(date.getDate() + 7)));
    }
};

// UI: FOB total, FOB ton
// Mongo: FOB total, FOB ton

class Calculator {
    helper = new Helper();

    weightKg;
    weightTon;
    hargaPokok;
    hargaJual;
    leadTime;
    packing;
    inspection;
    document;
    custom;
    localFreight;
    tax;
    expenses;
    FOBTotalRupiah;
    FOBTotalUSD;
    localHandling = [];

    constructor() { }

    calcHargaJual(unitOfMeasurement) {//(harga pokok + margin) * kg
        const unit = unitOfMeasurement.value;//twentyFCL

        this.weightKg = currentCommodity.quantity[unit];//14000, 23000

        if (Number(quantity.value === 1)) this.weightTon = this.weightKg / 1000; //14000/1000, 23000/1000
        else this.weightTon = (Number(quantity.value) * this.weightKg) / 1000;//2 * 14000/1000, 3 * 23000/1000

        this.hargaPokok = currentCommodity.price * this.weightKg;
        this.hargaJual = (currentCommodity.price + currentCommodity.margin) * this.weightKg;

        console.log(`Kg: ${this.weightKg}, Ton: ${this.weightTon}, Hrg Pokok: ${this.hargaPokok}, Hrg Jual: ${this.hargaJual}`);

        return this;
    }

    calcLeadTime() {
        this.leadTime = Math.ceil(currentCommodity.leadTime * this.weightTon);
        console.log(`leadtime: ${this.leadTime}`);
    }

    calcPacking() {
        const jumlahKarung = (this.weightKg / Biaya.packing.ukuranKarung) + 10;
        const biayaKarung = jumlahKarung * Biaya.packing.hargaSatuanKarung;
        const biayaKirimKarung = jumlahKarung * Biaya.packing.biayaKirimKarung;
        const biayaTotalKarung = biayaKarung + biayaKirimKarung;

        const jumlahSilica = jumlahKarung * Biaya.packing.hargaSatuanSilica;
        const biayaTotalSilica = jumlahSilica + Biaya.packing.biayaKirimSilica;

        this.packing = biayaTotalKarung + biayaTotalSilica
        console.log(`packing: ${this.packing}`);
        this.localHandling.push(this.packing)
        return this;
    }

    calcInspection() {
        this.inspection = Object.values(Biaya.inspection).reduce((accumulator, value) => accumulator + value, 0)
        console.log(`inspection: ${this.inspection}`);
        this.localHandling.push(this.inspection)
        return this;
    }

    calcDocument() {
        this.document = Object.values(Biaya.document).reduce((accumulator, value) => accumulator + value, 0)
        console.log(`documents: ${this.document}`);
        this.localHandling.push(this.document)
        return this;
    }

    calcCustom() {
        this.custom = Object.values(Biaya.custom).reduce((accumulator, value) => accumulator + value, 0)
        console.log(`custom: ${this.custom}`);
        this.localHandling.push(this.custom)
        return this
    }

    calcLocalFreight() {
        const container = UOM.value === 'twentyFCL' ? Biaya.localFreight.container20Feet : Biaya.localFreight.container40Feet;

        this.localFreight = Biaya.localFreight.biayaFreightTobeloSurabaya + Biaya.localFreight.biayaTHCSurabaya + container;

        // this.localFreight = Biaya.localFreight.filter(el => el !== container).reduce((accumulator, value) => accumulator + value, 0);

        console.log(`local freight: ${this.localFreight}`);
        this.localHandling.push(this.localFreight)

        return this;
    }

    calcTax() {
        this.tax = this.hargaPokok * Biaya.tax.PPH / 100;
        console.log(`tax: ${this.tax}`);

        this.localHandling.push(this.tax)

        return this;
    }

    calcExpenses() {
        this.expenses = Object.values(Biaya.expenses).reduce((accumulator, value) => accumulator + value, 0)
        console.log(`expenses: ${this.expenses}`);

        this.localHandling.push(this.expenses)

        return this;
    }

    calcFOB() {
        const totalLocalHandling = this.localHandling.reduce((accumulator, value) => accumulator + value, 0);

        if (this.weightKg === 1) this.FOBTotalRupiah = this.hargaJual + totalLocalHandling;
        else this.FOBTotalRupiah = (this.hargaJual + totalLocalHandling) * Number(quantity.value);

        this.FOBTotalUSD = Math.abs(this.FOBTotalRupiah / this.helper.inUSD);

        console.log(`kurs: ${this.helper.inUSD}, fob rp: ${this.FOBTotalRupiah}, fob usd: ${this.FOBTotalUSD}`);

        return this;
    }

    computeALL() {
        // 1. 
        this.helper.defineCommodity();

        // 2. Berapa Harga di Supplier?
        this.calcHargaJual(UOM);

        // 3. Hitung leadtime
        this.calcLeadTime();

        // 4. Berapa Biaya Packing?
        this.calcPacking();

        // 5. Hitung Biaya Inspection dan Sample
        this.calcInspection();

        // 6. Hitung Biaya Document
        this.calcDocument();

        // 7. Hitung Biaya Custom
        this.calcCustom();

        // 8. Hitung Biaya Local Freight
        this.calcLocalFreight();

        // 9. Hitung Tax
        this.calcTax();

        // 10. Hitung Expenses
        this.calcExpenses();

        // 11. Hitung FOB
        this.calcFOB();
    }

};

class UpdateUI {
    helper = new Helper();

    constructor() { }

    renderQuote(calculatorClass) {
        //Display CFR or CIF
        if (inco.value === 'FOB') {
            cfr.style.display = 'none';
            cif.style.display = 'none';
        }
        if (inco.value === 'CFR') cif.style.display = 'none';
        if (inco.value === 'CIF') cfr.style.display = 'none';

        const HTML = `
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
                      <p> Quote Number: <b>Q${this.helper.quoteNumber}</b><br>
                      <p> Offer expires At: <b>${this.helper.validEnd}</b><br>
                      Our quotation is valid until the above mentioned offer expiry date. We reserve the right to review and re-quote, if we do not receive
                      any acceptance confirmation, prior to above mentioned offer expiry date.</p>
                  </div>
                  <div class="quoteLeft__list quoteLeft__list--2">
                      <h5 class="heading-5 heading-5--blue ">Product Information</h4>
                      <ul>
                          <li>Name: <b>${currentCommodity.name}</b></li>
                          <li>HS Code: <b>${currentCommodity.hsCode}</b></li>
                          <li>Origin: <b>${currentCommodity.origin}, Indonesia</b></li>
                          <li>Quality: <b>${currentCommodity.quality}</b></li>
                          <li>Quantity: <b>${quantity.value}x${UOM.options[UOM.selectedIndex].text}</b></li>
                          <li>Lead Time: <b>${calculatorClass.leadTime} days</b> <em>(after payment confirmed)</em></li>
                          <li>Packing Method: <b>${currentCommodity.pack}</b></li>
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
                              <h4>FOB ${currentCommodity.pol}, Indonesia</h4>
                              <p>Price per MT: <span class="quotePriceList__fob--numbers">${this.helper.formatNumber(calculatorClass.FOBTotalUSD / calculatorClass.weightTon)}</span></p>
                              <p>Total Price: <span class="quotePriceList__fob--numbers">${this.helper.formatNumber(calculatorClass.FOBTotalUSD)}</span></p>
                              <!-- <p>per KG: <span class="quotePriceList__fob--numbers"></span></p> -->
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
                  <img src="image/${currentCommodity.initial}.png" alt="quoteRight image">
                  <div class="quoteRight quoteRight--text">
                      <p>Quote Number: <b>Q${this.helper.quoteNumber}</b></p>
                      <p>Valid from: <b>${this.helper.validStart}</b></p>
                      <p>Valid until: <b>${this.helper.validEnd}</b></p>
                  </div>
                  <div class="quoteRight quoteRight--button">
                      <!-- <p>Send your Quote to <b>${emaCon.value}</b> ?</p> -->
                      <button class="btn btn--submit-contact" id="downloadPDF">Download PDF</button>
                  </div>
                  
                  
              </div>
          </div>
      </div>
      `

        sampleDom.insertAdjacentHTML('beforebegin', HTML);
        sampleDom.style.display = 'none';
    }
};

class Controller {
    calculator = new Calculator();
    updateUI = new UpdateUI()

    constructor() {
        console.log('App is active');
        btnSubmitQuote.addEventListener('click', this.calcUpdateQuote.bind(this));
    }

    calcUpdateQuote(e) {
        e.preventDefault();

        this.calculator.computeALL();

        this.updateUI.renderQuote(this.calculator);
    }
}

const calcQuote = function () {
    new Controller()

    setTimeout(() => {
        try {

        } catch (error) {
            console.log(error.message);
        }

    }, 2000);
};

calcQuote();