import React,{Component,useState,useEffect} from 'react'
import MaterialTable from 'material-table'

export function Table() {
  const [state, setState] = useState({ })

   function fetchData() {
    fetch("/api").then(x => x.json()).then(data => setState({
      columns: [
        { title: 'Age', field: 'age', type: 'numeric' },
        { title: 'Name', field: 'name' }
      ],
      data: data
    }))
  }

    useEffect( () => {fetchData()},[] )

  return (
    <MaterialTable
      title="Let's go to the Mountains!"
      columns={state.columns}
      data={state.data}
      
    />
  );
}
