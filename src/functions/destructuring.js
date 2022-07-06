
export  function getUserIpDetails(userResponse={}){
    const {userName,userIp}=userResponse

    return  [userName,userIp?userIp:'0.0.0.0']

}


export function getTopThree(studentMarks){

    const [marks1,marks2,marks3,...rest]=studentMarks;
    return [marks1?marks1:null,marks2?marks2:null,marks3?marks3:null]

}