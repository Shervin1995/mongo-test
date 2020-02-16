import React,{Component,useState,useEffect} from 'react'
import MaterialTable from 'material-table';

export function Table1({list2}){
  return list2.map(x => <div> {x.tourPrice}<br/>{x.tourDescription} </div>)
}

export function Table() {
  const [state, setState] = useState({
    columns: [
      { title: 'Price', field: 'tourPrice', type: 'numeric' },
      { title: 'Description', field: 'tourDescription' }
    ],
    data: []
  });

   async function fetchData() {
    const data = await fetch("/api")
    data => data.json().then(data => setState({data}))
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
