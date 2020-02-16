import React,{Component} from 'react'
import MaterialTable from 'material-table';

export function Table(dataArrayJson) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'tourPrice', field: 'price', type: 'numeric' },
        { title: 'tourDescription', field: 'description' }
    ],
    data: [
      {
        price: 20000,
        description: 'Hello Shervin!!'
      },{
        price: 22000,
        description: 'Hi Shervin!!'
      }
    ]
  });

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
