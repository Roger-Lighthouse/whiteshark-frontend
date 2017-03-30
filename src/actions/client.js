import { push } from 'react-redux'


export function getClient(id){
   return dispatch => {

      fetch(`http://localhost:3000/clients/${id}`)
        .then(resp => resp.json())
        .then(data => {
           console.log(data)
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
