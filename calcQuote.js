export const calcQuote = async function () {
    try {
        //Calc Currency
        await convertCurrency();

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

        //Check if quantity not -1 or 0

        //Display Quote Summary
        setTimeout(async () => {
            try {
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

                await createQuote(quantity.value, UOM.value, inco.value, des.value, pod.value, payTerm.value,
                    noc.value, cou.value, sal.value, fir.value, emaCon.value, pho.value,
                    summaryCelexport.quoteNumber, summaryCelexport.validUntil, productName.textContent, summaryCelexport.price, inUSD,
                    summaryCelexport.leadTime, summaryCelexport.hargaSupplier, summaryCelexport.profit, summaryCelexport.hpp,
                    summaryCelexport.hargaEkspor, summaryCelexport.tax,
                    summaryCelexport.fobTotal, summaryCelexport.fobPerMT, summaryCelexport.fobPerKG);

                const btndonlot = document.getElementById('downloadPDF').addEventListener('click', function (e) {
                    e.preventDefault();
                    // console.log('download clicked'); 
                    // const html = document.getElementById('quoteSummary');
                    const html = document.body;
                    const doc = new jsPDF({
                        orientation: 'l',
                        unit: 'px',//'pt'
                        format: 'a1',//'a1'
                        hotfixes: ['20'],
                        putOnlyUsedFonts: true,
                        floatPrecision: 16,
                    });
                    // doc.text(['HALO', 'UCU'], 1000, 100, {align: 'center', baseline: 'middle', renderingMode: "fillThenStroke"});

                    doc.html(html, {
                        callback: function (doc) {

                            // doc.save('abe.pdf');
                            doc.save(`Celexport Quotation - ${sal.options[sal.selectedIndex].text} ${fir.value}.pdf`);
                        },
                        // filename: 'abe.pdf', 
                        x: 1,
                        y: 1
                    });


                    // const opt = {
                    //   margin:       0,
                    //   filename:     'Celexport Quote Summary.pdf',
                    //   // image:        { type: 'jpeg', quality: 0.98 },
                    //   enableLinks: true,
                    //   // html2canvas:  { scale: 2 },
                    //   // jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                    // };
                    // html2pdf().from(html).to('pdf').set(opt).save();

                });

            } catch (err) {
                console.log(err.message);
            }

        }, 2000)

    } catch (err) {
        console.log(err.message);
    }


    // displayQuoteSummary(); 

    //Summmary
    // console.log(summaryCelexport, fob);
};