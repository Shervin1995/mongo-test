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
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
