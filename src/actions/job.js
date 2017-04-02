


export function bookJob(job_info){
   return dispatch => {
      console.log("JOB INFO M:", job_info)
      fetch('http://localhost:3000/jobs', {
        method: 'POST',
        body: JSON.stringify({clientId: job_info.clientId, jobDesc: job_info.jobDesc,
          jobPrice: job_info.jobPrice, jobDate: job_info.jobDate,
          jobTime: job_info.jobTime}),
        headers: new Headers({'Content-type': 'application/json'})
      })
        .then(resp => resp.json())
        .then(data => {
           console.log("Job return: ", data)
           return dispatch({type: 'BOOK_JOB', payload: {data: data}})
        })
        .catch()
   }
 }

 export function deleteJob(id){
   return dispatch => {

      fetch(`http://localhost:3000/jobs/${id}`, {
        method: 'DELETE'
      })
        .then(resp => resp.json())
        .then(data => {
           console.log('**Deleted Job***', data)
          // console.log('**Prices***', data.prices)
          // var data5 = data.clients
          // console.log("size", data5.length)
          // for(var i = 0; i < data5.length; i++){
          //   console.log('Data*****', data5[i])
          // }
          return dispatch({type: 'DELETE_JOB', payload: {data: data}})
        })
        .catch()
   }
}

export function completedJob(id){
   return dispatch => {

      fetch(`http://localhost:3000/jobs/${id}`, {
        method: 'PUT'
       })
        .then(resp => resp.json())
        .then(data => {
           console.log('**Completed Job***', data)
          // console.log('**Prices***', data.prices)
          // var data5 = data.clients
          // console.log("size", data5.length)
          // for(var i = 0; i < data5.length; i++){
          //   console.log('Data*****', data5[i])
          // }
          return dispatch({type: 'COMPLETED_JOB', payload: {data: data}})
        })
        .catch()
   }
}


 // export function getJobs(id){
 //   return dispatch => {

 //      fetch('http://localhost:3000/jobs')
 //        .then(resp => resp.json())
 //        .then(data => {
 //           return dispatch({type: 'COMPLETED_JOBS', payload: {data: data}})
 //        })
 //        .catch()
 //   }
 // }

 // export function currentJobs(id){
 //   return dispatch => {
 //      fetch('http://localhost:3000/jobs')
 //        .then(resp => resp.json())
 //        .then(data => {
 //           return dispatch({type: 'CURRENT_JOBS', payload: {data: data}})
 //        })
 //        .catch()
 //   }
 // }

 //  export function upcomingJobs(id){
 //   return dispatch => {
 //      fetch('http://localhost:3000/jobs')
 //        .then(resp => resp.json())
 //        .then(data => {
 //          return dispatch({type: 'UPCOMING_JOBS', payload: {data: data}})
 //        })
 //        .catch()
 //   }
 // }