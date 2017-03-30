


export function bookJob(job_info){
   return dispatch => {

      fetch('http://localhost:3000/jobs', {
        method: 'POST',
        body: JSON.stringify({jobdesc: 'W1', sdate: '2017-04-30'}),
        headers: new Headers({'Content-type': 'application/json'})
      })
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

 export function completedJobs(id){
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
          return dispatch({type: 'COMPLETED_JOBS', payload: {data: data5}})
        })
        .catch()
   }
 }

 export function currentJobs(id){
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
          return dispatch({type: 'CURRENT_JOBS', payload: {data: data5}})
        })
        .catch()
   }
 }

  export function upcomingJobs(id){
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
          return dispatch({type: 'UPCOMING_JOBS', payload: {data: data5}})
        })
        .catch()
   }
 }