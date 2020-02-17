import React,{Component,useState,useEffect} from 'react'
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button'


export function Table() {
  const [state, setState] = useState({ })

   function fetchData() {
    fetch("/api").then(x => x.json()).then(data => setState({
      columns: [
        { title: 'id', field: '_id', cellStyle: {display: 'none'},headerStyle: {display: 'none'}},
        { title: 'Age', field: 'age', type: 'numeric' },
        { title: 'Name', field: 'name'}
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
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  data.push(newData);
                  this.setState({ data }, () => resolve());
                }
                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const data = this.state.data;
                  const index = data.indexOf(oldData);
                  data[index] = newData;
                  this.setState({ data }, () => resolve());
                }
                resolve()
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  var xhr = new XMLHttpRequest()
                  xhr.open('DELETE','http://localhost:8080/api/'+ oldData._id,true)
                  xhr.send()
                  console.log(oldData._id)

                  $('td').on('click',function(e){
                    console.log(e.target.node)
                  })


                }
                resolve()
              }, 1000)
            }),
        }}

    />
  );
}
