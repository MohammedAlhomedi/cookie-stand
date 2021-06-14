 'use strict';


//let variable = document.getElementById('salmon');

let parentElement = document.getElementById('salesData');

locationHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    // function getrandomCustomer(max, min) {

    //     for (let i = 0; i < hours.length; i++)
    //         return math.floor(math.random() * (max - min + 1) + min)

    // }
    //function randomNo(min, max) {

    //     min = math.ceil(min);
    //     max = math.floor(max);
    //     return math.floor(math.random() * (max - min + 1)) + min;

    // }

     Seattle = {

        Location: 'Seattle',
        minCustomer: 23,
        maxCustomer: 65,
        avgCookieNum: 6.3,
        CookiesPerHour: [],
        customerPerHour: [],
        total: 0,
        getCustomer: function () {
            for (let i = 0; i < hours.length; i++) {
                let cookies = math.ceil(getrandomCustomer(this.minCustomer, this.maxCustomer) * this.avgCookieNum);
                this.CookiesPerHour.push(cookies);

                this.total += cookies;
            }

        }
    
          render: function () {

        //     // Create a new Element
        //     // add a text to the new element
        //     // append the child to the parent
        // let SalmonCookies = document.createElement('div')
        // let articleElement = document.createElement('article');
        // SalmonCookies.appendChild(articleElement);

        let h2 = document.createElement('h2');
        parentElement.appendChild(h2);
        h2.textContent = this.Location;

        let ul =document.createElement('ul');
        parentElement.appendChild(ul);

        for (let i = 0; i < Hours.length; i++) {
            let li=document.create('li')
            ul.appendChild(li);
            li.textContent=` ${hours[i]};${this.CookiesPerHour{i}} cookies `;
        }

        let total=document.create('li')
        ul.appendChild(total);
        li.textContent= `Total ; ${this.total} cookies `;

            

    },
};

    Seattle.getCustomer();
    Seattle.render();


    function getrandomCustomer(max, min) {

        for (let i = 0; i < hours.length; i++)
            return math.floor(math.random() * (max - min + 1) + min)
    
    }
//  CookiesPerHour: function () {

//     let total = 0;
//     for (let i = 0; i < this.locationHours.length, i++) {

//         let randomCostumer = randomNo(this.minCustomer, this.maxCustomer);
//         customerPerHour.push(randomCostumer);
//         let cookies = math.ceil(rendomCostumer * this.maxCustomer);
//         this.CookiesPerHour[i] = cookies;
//         total = total + this.CookiesPerHour[i];
//         this.totalsold = total;

//         // Math.ceil(this.results.push(this.avgCookieNum * this.getRandCuoustmer()));
//         // totalCookies += this.maxCustomer * this.getRandCuoustmer();
//         // this.total = totalCookies;

//     }

// render: function() {
//     //     // Create a new Element
//     //     // add a text to the new element
//     //     // append the child to the parent
//     let SalmonCookies = document.createElement('div')
//     let articleElement = document.createElement('article');
//     SalmonCookies.appendChild(articleElement);

//     let cityTitle = document.createElement('h2');
//     articleElement.appendChild(cityTitle);
//     cityTitle.textContent = this.Location;

//     let hourlist = document.createElement('ul');
//     articleElement.appendChild(hourlist);

//     for (let i = 0; i < workingHours.length; i++) {
//         let listItem = document.createElement('li');
//         hourlist.appendChild(listItem);
//         listItem.textContent = ` Total: ' ${this.totalsold} cookies`

//     }
// }