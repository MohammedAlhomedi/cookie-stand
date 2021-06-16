'use strict';


//let variable = document.getElementById('salmon');

let parentElement = document.getElementById('salesData');

let salesTable = document.getElementById('salesTable');

let salesForm = document.getElementById('salesForm');


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




function CookieStand(name, min, max, avg) {
    this.name = name;
    this.minCust = min;
    this.maxCust = max;
    this.agvCookie = avg;
    this.cookiesPerHour = [];
    this.total = 0;
    CookieStand.allCookies.push(this);
}



CookieStand.allCookies = [];

CookieStand.prototype.getCustomer = function () {

    for (let i = 0; i < hours.length; i++) {

        let cookies = Math.ceil(getCustomer(this.minCust, this.maxCust) * this.agvCookie);

        this.cookiesPerHour.push(cookies);

        this.total += cookies;

    }

};

CookieStand.prototype.render = function () {
    let tr = document.createElement('tr');
    salesTable.appendChild(tr);

    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = this.name;

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.cookiesPerHour[i];
    }

    let total = document.createElement('th');
    tr.appendChild(total);
    total.textContent = this.total;
};

let seattle = new CookieStand('Seattle', 23, 65, 6.3);
let tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
let dubai = new CookieStand('Dubai', 11, 38, 3.7);
let paris = new CookieStand('Paris', 20, 38, 2.3);
let lima = new CookieStand('liam', 2, 16, 4.6);

makeTableHeader();

seattle.getCustomer();
seattle.render();

tokyo.getCustomer();
tokyo.render();

dubai.getCustomer();
dubai.render();

paris.getCustomer();
paris.render();

lima.getCustomer();
lima.render();

makeTableFooter();

function makeTableHeader() {
    let tr = document.createElement('tr');
    salesTable.appendChild(tr);

    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'Location';

    for (let i = 0; i < hours.length; i++) {
        let th2 = document.createElement('th');
        tr.appendChild(th2);
        th2.textContent = hours[i];
    }

    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = 'Daily totals';
}

function makeTableFooter() {

    let tr = document.createElement('tr');
    salesTable.appendChild(tr);


    let th1 = document.createElement('th');
    tr.appendChild(th1);
    th1.textContent = 'Totals';

    let hourlyTotal = 0;
    let totalOfTotals = 0;
    for (let i = 0; i < hours.length; i++) {
        hourlyTotal = 0;
        for (let j = 0; j < CookieStand.allCookies.length; j++) {
            let total = CookieStand.allCookies[j].cookiesPerHour[i];
            hourlyTotal += total;
            totalOfTotals += total;
        }


        let th2 = document.createElement('th');
        tr.appendChild(th2);
        th2.textContent = hourlyTotal;
    }

    let th3 = document.createElement('th');
    tr.appendChild(th3);
    th3.textContent = totalOfTotals;
}



//helper function
function getCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}



function formsubmision(event) {

    event.preventDefault();
    let newCountry= event.target.countryname.value;


}

salesForm.addEventListener( 'submit' ,formsubmision);



// let Seattle = {

//     Location: 'Seattle',
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCookieNum: 6.3,
//     CookiesPerHour: [],
//     customerPerHour: [],
//     total: 0,
//     getCustomer: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookies = Math.ceil(getrandomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookieNum);
//             this.CookiesPerHour.push(cookies);
//             this.total += cookies;
//         }

//     }

//     render: function () {

//         let h2 = document.createElement('h2');
//         parentElement.appendChild(h2);
//         h2.textContent = this.Location;

//         let ul = document.createElement('ul');
//         parentElement.appendChild(ul);

//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li')
//             ul.appendChild(li);
//             li.textContent = ` ${hours[i]};${this.CookiesPerHour[i]} cookies `;
//         }

//         let total = document.createElement('li')
//         ul.appendChild(total);
//         total.textContent = `Total ; ${this.total} cookies `;

//     },
// };

// Seattle.getCustomer();
// Seattle.render();


// let Tokyo = {

//     Location: 'Tokyo',
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgCookieNum: 1.2,
//     CookiesPerHour: [],
//     customerPerHour: [],
//     total: 0,
//     getCustomer: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookies = Math.ceil(getrandomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookieNum);
//             this.CookiesPerHour.push(cookies);
//             this.total += cookies;
//         }

//     },

//     render: function () {

//         let h2 = document.createElement('h2');
//         parentElement.appendChild(h2);
//         h2.textContent = this.Location;

//         let ul = document.createElement('ul');
//         parentElement.appendChild(ul);

//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li')
//             ul.appendChild(li);
//             li.textContent = ` ${hours[i]};${this.CookiesPerHour[i]} cookies `;
//         }

//         let total = document.createElement('li')
//         ul.appendChild(total);
//         total.textContent = `Total ; ${this.total} cookies `;

//     }
// };
// Tokyo.getCustomer();
// Tokyo.render();


// let Dubai = {

//     Location: 'Dubai',
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookieNum: 3.7,
//     CookiesPerHour: [],
//     customerPerHour: [],
//     total: 0,
//     getCustomer: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookies = Math.ceil(getrandomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookieNum);
//             this.CookiesPerHour.push(cookies);
//             this.total += cookies;
//         }

//     },

//     render: function () {

//         let h2 = document.createElement('h2');
//         parentElement.appendChild(h2);
//         h2.textContent = this.Location;

//         let ul = document.createElement('ul');
//         parentElement.appendChild(ul);

//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li')
//             ul.appendChild(li);
//             li.textContent = ` ${hours[i]};${this.CookiesPerHour[i]} cookies `;
//         }

//         let total = document.createElement('li')
//         ul.appendChild(total);
//         total.textContent = `Total ; ${this.total} cookies `;

//     }
// };
// Dubai.getCustomer();
// Dubai.render();

// let Paris = {

//     Location: 'Paris',
//     minCustomer: 20,
//     maxCustomer: 38,
//     avgCookieNum: 2.3,
//     CookiesPerHour: [],
//     customerPerHour: [],
//     total: 0,
//     getCustomer: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookies = Math.ceil(getrandomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookieNum);
//             this.CookiesPerHour.push(cookies);
//             this.total += cookies;
//         }

//     },

//     render: function () {


//         let h2 = document.createElement('h2');
//         parentElement.appendChild(h2);
//         h2.textContent = this.Location;

//         let ul = document.createElement('ul');
//         parentElement.appendChild(ul);

//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li')
//             ul.appendChild(li);
//             li.textContent = ` ${hours[i]};${this.CookiesPerHour[i]} cookies `;
//         }


//         let total = document.createElement('li')
//         ul.appendChild(total);
//         total.textContent = `Total ; ${this.total} cookies `;

//     }
// };
// Paris.getCustomer();
// Paris.render();


// let Lima = {

//     Location: 'Lima',
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgCookieNum: 4.6,
//     CookiesPerHour: [],
//     customerPerHour: [],
//     total: 0,
//     getCustomer: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookies = Math.ceil(getrandomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookieNum);
//             this.CookiesPerHour.push(cookies);
//             this.total += cookies;
//         }

//     },

//     render: function () {


//         let h2 = document.createElement('h2');
//         parentElement.appendChild(h2);
//         h2.textContent = this.Location;

//         let ul = document.createElement('ul');
//         parentElement.appendChild(ul);

//         for (let i = 0; i < hours.length; i++) {
//             let li = document.createElement('li')
//             ul.appendChild(li);
//             li.textContent = ` ${hours[i]};${this.CookiesPerHour[i]} cookies `;
//         }

//         let total = document.createElement('li')
//         ul.appendChild(total);
//         total.textContent = `Total ; ${this.total} cookies `;

//     }
// };
// Lima.getCustomer();
// Lima.render();
