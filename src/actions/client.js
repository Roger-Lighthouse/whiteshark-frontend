//import { push } from 'react-redux'


export function getClient(id){
   return dispatch => {

      fetch(`http://localhost:3000/clients/${id}`)
        .then(resp => resp.json())
        .then(data => {
           console.log('**Client***', data.client)
           console.log('**Prices***', data.prices)
          // var data5 = data.clients
          // console.log("size", data5.length)
          // for(var i = 0; i < data5.length; i++){
          //   console.log('Data*****', data5[i])
          // }
          return dispatch({type: 'GET_CLIENT', payload: {data: data}})
        })
        .catch()
   }
}


export function editClient(id){
   return dispatch => {

      fetch(`http://localhost:3000/clients/${id}`,{
        method: 'PUT',
        body: JSON.stringify({name: 'Nut Weiner', phone: '555-555-5555',
          email: 'aa@bbbb.com'}),
        headers: new Headers({'Content-type': 'application/json'})

      })
        .then(resp => resp.json())
        .then(data => {
           console.log('**Client***', data.client)
          return dispatch({type: 'EDIT_CLIENT', payload: {data: data}})
        })
        .catch()
   }
}


export function getAllClients(){
   return dispatch => {

      fetch(`http://localhost:3000/clients`)
        .then(resp => resp.json())
        .then(data => {
           console.log('**Client***', data)
          // var data5 = data.clients
          // console.log("size", data5.length)
          // for(var i = 0; i < data5.length; i++){
          //   console.log('Data*****', data5[i])
          // }
          return dispatch({type: 'GET_ALL_CLIENTS', payload: {data: data}})
        })
        .catch()
   }
 }
