import {getTopThree,getUserIpDetails} from '../functions/destructuring'

export function test(){

    const userResponse={
        userName:"test"
    }
    
    let a=[]
    a.push(getUserIpDetails(userResponse));
    userResponse.userIp="12.12.12.12"
    a.push(getUserIpDetails(userResponse));
    a.push(getTopThree([1,2,3,4,5]))
    a.push(getTopThree([1]))
    return a;
}
