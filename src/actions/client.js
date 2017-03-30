
export function getClient(id){
   return dispatch => {

      fetch('http://localhost:3000/jobs')
        .then(resp => resp.json())
        .then(data => {
          // console.log(data.clients)
          // var data5 = data.clients
          // console.log("size", data5.length)
          // for(var i = 0; i < data5.length; i++){
          //   console.log('Data*****', data5[i])
          // }
          return dispatch({type: 'BOOK_JOB', payload: {data: data5}})
        })
        .catch()
   }
 }
