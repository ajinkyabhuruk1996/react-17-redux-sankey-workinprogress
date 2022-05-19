import React, { useState, useEffect, useCallback } from "react";
// import Highcharts from "highcharts";
// import HighchartsSankey from "highcharts/modules/sankey";
// import HighchartsReact from "highcharts-react-official";

// import FormToUpdateSankey from '../components/formToUpdateSankey';

// HighchartsSankey(Highcharts);

import { Sankey } from '../features/sankey/Sankey'

function SankeyChart() {

    // const jsonFileName = 'sankey';
    // const [data, setData] = useState({});

    // const fetchData = useCallback(() => {
    //     fetch(`http://localhost:3000/data/${jsonFileName}.json`)
    //         .then(reponse => {
    //             reponse.json().then(resp => {
    //                 if (resp.data) {
    //                     setData(resp.data);
    //                 }
    //             })
    //         })
    // }, []);

  
    // const addDataToSankeySeries = (formData) => {

    //     //for weight to convert to numeric from string
    //     const toNumericPairs = input => {
    //         const entries = Object.values(input);
    //         entries[2] = parseFloat(entries[2]);
    //         return entries;
    //     }

    //     const getSeriesData = (ser, formData) => {
    //         ser[0].data.push(toNumericPairs(formData));
    //         return ser;
    //     }

    //     setData(
    //         {
    //             ...data,
    //             series: getSeriesData(data.series, formData)
    //         }
    //     )
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <div className="App">
            {/* <HighchartsReact
                highcharts={Highcharts}
                options={data}
            />
            <FormToUpdateSankey addDataToSankeySeries={addDataToSankeySeries} />         */}

                <Sankey />
        </div>
    );
}

export default SankeyChart;
