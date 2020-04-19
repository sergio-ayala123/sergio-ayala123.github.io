window.addEventListener("load", function() {

    var item= document.querySelector("#center");
    item.addEventListener("click", function(e){


        if(e.target.nodeName.toLowerCase() == 'button'){
            var clicked = e.target;
            alert(clicked);
        }

        




    })

});

function addRow() {
    var table = document.getElementById("center");
    var x = document.getElementById("item").value

    if(x.length == 0){
        alert("Field is empty");
    }
    else {
        var row = table.insertRow(table.length);
        var cell = row.insertCell(table.length);
        cell.innerHTML = x + "<button type = 'button'>X</button>";
    }


}






























/*
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const writeStream = fs.createWriteStream('post2.csv');

//Write Headers
//writeStream.write(`Img, Description, Price\n`);


request('https://www.amazon.com/s?k=gtx+1080+ti&ref=nb_sb_noss_1', (error, response, html) => {

    if(!error && response.statusCode == 200){
        const $ = cheerio.load();

        //$('.a-section.aok-relative.s-image-fixed-height').each(function(i, element){

        var src = $('.s-image').attr("src");
        console.log(src);

       // });
        //console.log(src);
    

    //console.log('scraping done');
}

});
*/








/*
const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="search"]/div[1]/div[1]/div/span[4]/div[1]/div[1]/div/span/div/div/div/div/div[2]/div[1]/div/div/span/a/div/img');
    const src = await el.getProperty('src');
    const srcText = await src.jsonValue();
    console.log({srcText});
    
    browser.close();
}



scrapeProduct('https://www.amazon.com/s?k=apple+watch+&ref=nb_sb_noss_2')

*/