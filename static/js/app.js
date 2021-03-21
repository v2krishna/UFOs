//import the data from data.js
const tableData = data;

//Using the D3 lib , refer the tbody tag in the html
var tbody = d3.select("tbody");

//Building a Table
function buildTable(data){
    //first, clear out any existing data
    tbody.html("");

    //next, looop through each object in the data
    //and append a row and cells for each in the row
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");

        //loop through each field in the dataRow and add
        //each value as a table cell (td)
        Objects.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);

        });

    });
}