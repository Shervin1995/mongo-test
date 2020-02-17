import React,{Component,useState,useEffect} from 'react'
import MaterialTable from 'material-table'

export function Table() {
  const [state, setState] = useState({ })

  function fetchData() {

    var xhr1 = new XMLHttpRequest()
    xhr1.open('GET','http://localhost:8080/api',true)

    xhr1.onreadystatechange = function(e) {e.preventDefault()
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText)
      setState({
          columns: [
            { title: 'id', field: '_id', cellStyle: {display: 'none'},headerStyle: {display: 'none'}},
            { title: 'Age', field: 'age', type: 'numeric' },
            { title: 'Name', field: 'name'}
          ],
          data: data
        })
    }}
    xhr1.send()
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
                  var newData1 = `name=${newData.name}&age=${newData.age}`
                  var xhr = new XMLHttpRequest()
                  xhr.open('POST','http://localhost:8080/api',true)
                  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                  xhr.send(newData1)
                  {/* refresh list */}
                  fetchData()
                }
                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  var newData1 = `name=${newData.name}&age=${newData.age}`
                  var xhr = new XMLHttpRequest()
                  xhr.open('POST','http://localhost:8080/api',true)
                  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                  xhr.send(newData1)
                  {/* refresh list */}
                  fetchData()
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
                  {/* refresh list */}
                  fetchData()
                }
                resolve()
              }, 1000)
            }),
        }}

    />
  );
}
