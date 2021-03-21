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

//create function handle to filter the table
function handleClick(){
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    
    //default filtering
    let filteredData = tableData;

    //if date is present then filter the data based on the date selected
    if (date) {
        //apply `filter` to the tabe data to only keep the
        //rows where the datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };


    //rebuild the table using the filtered data
    //@NOTE: if no date was entered , then filtered Data will 
    //just be the original tableData.
    buildTable(filteredData);
};

//tie the handleClick function to the button click
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(filteredData);