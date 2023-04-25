// d3.json("./static/data1.json", function (response) {
    d3.json("./static/myfile.json", function (response) {

    const groupNameList = [];
    // Loop through the data.
    for (let i = 0; i < response.length; i++) {
        let gName = response[i].Group
        // creating array
        groupNameList.push(gName); 
    };

    // this conditions counts how may counts is in a particular group
    let counter = {};
    for (element of groupNameList.flat()) {
        if (counter[element]) {
            counter[element] += 1;
        } else {
            counter[element] = 1;
        }
    };
    // console.log(counter);
    // getting used in PIE chart
    var x = [];
    var y = [];
    for (let key in counter) {
        // console.log(key, counter[key]);
        x.push(key);
        y.push(counter[key])

    }
    // belos is for creating BART GRAPH based on Scientific Name
    Sci_name = []; 
    xAxisData = [];
    yAxisData = [];
    for (let i = 0; i < response.length; i++) {
        // console.log(response[i]);
        // let cName = response.features[i].properties["Group"];
        let sName = response[i]["Common Name"]
        // creating array
        Sci_name.push(sName); 
    };

    // this conditions counts how may counts is in a Scientific Name group
    let counter_for = {};
    for (element of Sci_name.flat()) {
        if (counter_for[element]) {
            counter_for[element] += 1;
        } else {
            counter_for[element] = 1;
        }
    };

    // this conditions counts how may counts is in a particular group [Scientific Name]
    for (let key in counter_for) {
        console.log(key, counter_for[key]);

        xAxisData.push(key);
        yAxisData.push(counter_for[key])

    }
    // console.log(counter_for);

    
    let barData = {
        x: xAxisData,
        y: yAxisData,
        type: 'line',
        orientation: 'v',
        autosize: true
    };
    let barArray = [barData];

    let pieData = {
        type: "pie",
        labels: x,
        values: y
    };

    let pieArray = [pieData];

    // layout
    let pieLayout = {
        title: "Groups of Freshwater Invasive sp. found in MN",
        autosize: true,
        width: 1200,
        height: 800,
        margin: {
            b: 160
        },
    };

    let barLayout = {
        title: " Invasive Species {y axis : species count : x axis : Species Name (Common Name)}",
        autosize: true,
        width: 1200,
        height: 800,
        margin: {
            b: 160
          },
    };

    
    Plotly.newPlot("pie", pieArray, pieLayout);
    Plotly.newPlot("bar", barArray, barLayout);


}
);