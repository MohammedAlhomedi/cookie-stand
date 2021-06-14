 'use strict';


//let variable = document.getElementById('salmon');

// let parentElement = document.getElementById('salesData');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']



// var stor =[];
// function store (location , mincustomer ,maxCustomer,avgcookiesale){
//     this.location=location
//     this .mincustomer=mincustomer;
//     this .maxCustomer=maxCustomer;
//     this.avgcookiesale=avgcookiesale;
//     this .counterperhour=[];
//     this.cookiesperhour=[];
//     this.totalcookies=0;
//     store.push(this);

// }

// store.prototype.customersperhour=function(){

//     for( var i =0; i< HTMLSourceElement.length;i++){
//         var hourly =math.floor(math.random()*(this.maxCustomer-this.mincustomer+1 )+this.mincustomer);
//         this.counterperhour.push(hourly);
//     }
// }

    function getrandomCustomer(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)

    }



     let Seattle = {

        Location: 'Seattle',
        minCustomer: 23,
        maxCustomer: 65,
        avgCookieNum: 6.3,
        CookiesPerHour: [],
        customerPerHour: [],
        total: 0,
        getCustomer: function () {
            for (let i = 0; i < hours.length; i++) {
                let cookies = Math.ceil(getrandomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookieNum);
                this.CookiesPerHour.push(cookies);
                this.total += cookies;
            }
                  //console.log(this.CookiesPerHour)
        },
    
          render: function () {

        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);
        h2.textContent = this.Location;

        let ul =document.createElement('ul');
        parentElement.appendChild(ul);

        for (let i = 0; i < hours.length; i++) {
            let li=document.createElement('li')
            ul.appendChild(li);
            li.textContent=` ${hours[i]};${this.CookiesPerHour[i]} cookies `;
        }

        let total=document.createElement('li')
        ul.appendChild(total);
        total.textContent= `Total ; ${this.total} cookies `;
 
    }
};

    Seattle.getCustomer();
    Seattle.render();


    let Tokyo = {

        Location: 'Tokyo',
        minCustomer: 3,
        maxCustomer: 24,
        avgCookieNum: 	1.2,
        CookiesPerHour: [],
        customerPerHour: [],
        total: 0,
        getCustomer: function () {
            for (let i = 0; i < hours.length; i++) {
                let cookies = Math.ceil(getrandomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookieNum);
                this.CookiesPerHour.push(cookies);
                this.total += cookies;
            }
                  //console.log(this.CookiesPerHour)
        },
    
          render: function () {

        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);
        h2.textContent = this.Location;

        let ul =document.createElement('ul');
        parentElement.appendChild(ul);

        for (let i = 0; i < hours.length; i++) {
            let li=document.createElement('li')
            ul.appendChild(li);
            li.textContent=` ${hours[i]};${this.CookiesPerHour[i]} cookies `;
        }

        let total=document.createElement('li')
        ul.appendChild(total);
        total.textContent= `Total ; ${this.total} cookies `;
 
    }
};
Tokyo.getCustomer();
Tokyo.render();


let Dubai = {

    Location: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookieNum: 3.7,
    CookiesPerHour: [],
    customerPerHour: [],
    total: 0,
    getCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookies = Math.ceil(getrandomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookieNum);
            this.CookiesPerHour.push(cookies);
            this.total += cookies;
        }
              //console.log(this.CookiesPerHour)
    },

      render: function () {

    let h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.Location;

    let ul =document.createElement('ul');
    parentElement.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
        let li=document.createElement('li')
        ul.appendChild(li);
        li.textContent=` ${hours[i]};${this.CookiesPerHour[i]} cookies `;
    }

    let total=document.createElement('li')
    ul.appendChild(total);
    total.textContent= `Total ; ${this.total} cookies `;

}
};
Dubai.getCustomer();
Dubai.render();


let Paris = {

    Location: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookieNum: 2.3,
    CookiesPerHour: [],
    customerPerHour: [],
    total: 0,
    getCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookies = Math.ceil(getrandomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookieNum);
            this.CookiesPerHour.push(cookies);
            this.total += cookies;
        }
              //console.log(this.CookiesPerHour)
    },

      render: function () {


    let h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.Location;

    let ul =document.createElement('ul');
    parentElement.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
        let li=document.createElement('li')
        ul.appendChild(li);
        li.textContent=` ${hours[i]};${this.CookiesPerHour[i]} cookies `;
    }


    let total=document.createElement('li')
    ul.appendChild(total);
    total.textContent= `Total ; ${this.total} cookies `;

}
};
Paris.getCustomer();
Paris.render();


let Lima = {

    Location: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookieNum: 4.6,
    CookiesPerHour: [],
    customerPerHour: [],
    total: 0,
    getCustomer: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookies = Math.ceil(getrandomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookieNum);
            this.CookiesPerHour.push(cookies);
            this.total += cookies;
        }
              //console.log(this.CookiesPerHour)
    },

      render: function () {


    let h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.Location;

    let ul =document.createElement('ul');
    parentElement.appendChild(ul);

    for (let i = 0; i < hours.length; i++) {
        let li=document.createElement('li')
        ul.appendChild(li);
        li.textContent=` ${hours[i]};${this.CookiesPerHour[i]} cookies `;
    }

    let total=document.createElement('li')
    ul.appendChild(total);
    total.textContent= `Total ; ${this.total} cookies `;

}
};
Lima.getCustomer();
Lima.render();