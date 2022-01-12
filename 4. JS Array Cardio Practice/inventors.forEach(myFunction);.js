const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

function getInput(){
    yearBorn = document.getElementById('born').value;
    yearDied = document.getElementById('died').value;
    if (inventors.year >= yearBorn && inventors.died <= yearDied){
        let tableData = document.createElement("tr");
        let newRow = `
            ${inventors.first}
            ${inventors.last}
            ${inventors.year}
            ${inventors.passed}
        `;
        tableData.append(newRow);
        document.getElementById("Table1").appendChild(tableData);
        console.log(newRow)
    }
};
    // inventors.forEach(inventor => {
    //     var tableData = document.createElement("tbody");
    //     let newRow = `
    //             ${inventor.first}
    //             ${inventor.last}
    //             ${inventor.year}
    //             ${inventor.passed}
    //     `;
    //     tableData.append(newRow);
    //     document.getElementById("Table1").appendChild(tableData);
    // });
