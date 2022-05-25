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
  selectSankey,
  fetchSankey,
  updateSankeyData
} from './sankeySlice';

import styles from './Sankey.module.css';

HighchartsSankey(Highcharts);

export function Sankey() {
  const data = useSelector(selectSankey);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  const addDataToSankeySeries = (formData) => {

     formData.weight =parseFloat(formData.weight);

     dispatch(updateSankeyData({ formData, action: 'newData'}));
  };

  useEffect(() => {
    dispatch(fetchSatForSankeyChart());
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
