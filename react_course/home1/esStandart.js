const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((emp) => {
    return emp.length > 0 && emp.length !== ''
}).map((emp) => {
    return emp.toLowerCase().trim();
});

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(cash) {
   let total = 0;
   for (let i = 0; i < cash.length; i++) {
       total += cash[i];
   }
   return total;
}

let money = calcCash(sponsors.cash);

function makeBusiness(owner, director = 'Victor', cash, emp) {
    const {eu, rus} = sponsors;
    const {eu: [eu0]} = sponsors;
    let sumSponsors = `${eu} ${rus} unexpected sponsor`;
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And out employers: ${emp}`);
    console.log(`And we have a sponsors: ${sumSponsors}`);
    console.log(`Note. Be careful with ${eu0}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);