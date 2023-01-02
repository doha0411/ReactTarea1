import React from 'react';
import data from '../data/data';

function DataProvider(props) {
  return props.children(data);
}

export default DataProvider;