'use strict';
let variable = document.getElementById('salmon');

let Salmon = document.getElementById('Salmon');

locationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],




    function randomNo(min, max) {

        min = math.ceil(min);
        max = math.floor(max);
        return math.floor(math.random() * (max - min + 1)) + min;

    }


let SeattleShop = {

    Location: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieNum: 6.3,
    CookiesPerHour: [],
    total: 0,



     CookiesPerHour: function () {

        let total = 0;
        for (let i = 0; i < this.locationHours.length, i++){

            let randomCostumer = random(this.minCustomer, this.maxCustomer);
            let cookies = math.ceil(rendomCostumer * this.maxCustomer);
            this.CookiesPerHour[i] = cookies;
            total = total + this.CookiesPerHour[i];
            this.totalsold = total;

            // Math.ceil(this.results.push(this.avgCookieNum * this.getRandCuoustmer()));
            // totalCookies += this.maxCustomer * this.getRandCuoustmer();
            // this.total = totalCookies;

        }


    }


}



render: function() {
    //     // Create a new Element
    //     // add a text to the new element
    //     // append the child to the parent
    let SalmonCookies = document.createElement('div')
    let articleElement = document.createElement('article');
    SalmonCookies.appendChild(articleElement);

    let cityTitle = document.createElement('h2');
    articleElement.appendChild(cityTitle);
    cityTitle.textContent = this.Location;

    let hourlist = document.createElement('ul');
    articleElement.appendChild(hourlist);

    for (let i = 0; i < workingHours.length; i++) {
        let listItem = document.createElement('li');
        hourlist.appendChild(listItem);
        listItem.textContent = ` Total: ' ${this.totalsold} cookies`

    }
}

SeattleShop.getcookiesPerHour();
SeattleShop.render();