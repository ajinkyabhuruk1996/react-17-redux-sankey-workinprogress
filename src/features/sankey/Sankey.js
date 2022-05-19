import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsReact from "highcharts-react-official";

import FormToUpdateSankey from '../../components/formToUpdateSankey';

import {
  decrement,
  increment,
  incrementByAmount,
  fetchSatForSankeyChart,
  incrementIfOdd,
  selectData,
  fetchCount,
  setNewDataToSankey
} from './sankeySlice';
import styles from './Sankey.module.css';

HighchartsSankey(Highcharts);
export function Sankey() {

  const data = useSelector(selectData);

  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  useEffect(() => {
    //debugger;
    dispatch(setNewDataToSankey(data));
    //setNewDataToSankey(data);
  },[data]) 

  const fetchData = useCallback(() => {
    // fetch(`http://localhost:3000/data/${jsonFileName}.json`)
    //   .then(reponse => {
    //     reponse.json().then(resp => {
    //       if (resp.data) {
    //         setData(resp.data);
    //       }
    //     })
    //   })
    //moved code to call API to SankeySlice to call API's through redux
    dispatch(fetchSatForSankeyChart());
  }, []);


  const addDataToSankeySeries = (formData) => {

    //for weight to convert to numeric from string
    const toNumericPairs = input => {
      const entries = Object.values(input);
      entries[2] = parseFloat(entries[2]);
      return entries;
    }

    // const getSeriesData = (ser, formData) => {
      
    //   let newArray = Object.assign([], ser[0].data);
    //   newArray.push(toNumericPairs(formData));
    //   ser[0].data = newArray;

    //   // var newObj = {
    //   //   ...ser,
    //   //   newObj.legendPosition = 'right' //property you want to add in props object
    //   // };

    //   return ser;
    // }
    dispatch(setNewDataToSankey( { formData, action: 'newData'}));
    //props cant be seyt from here
    // dispatch(setNewDataToSankey({
    //   ...data,
    //   series: getSeriesData(data.series, formData)
    // }));
    // setData(
    //   {
    //     ...data,
    //     series: getSeriesData(data.series, formData)
    //   }
    // )
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <div className={styles.row}>
        <HighchartsReact
          highcharts={Highcharts}
          options={data}
        />
        <FormToUpdateSankey addDataToSankeySeries={addDataToSankeySeries} />       
      </div>
    </div>
  );
}
