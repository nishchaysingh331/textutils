import React from 'react'

function Alert(props) {

    //function to make the 'success'-> s capital
    const capatalise=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); //slice(1)means leaving 1st character and taking all other characters
    }

    return (
        // && is used in js to check the condition if 1 st one is true then the second one gets returned 
        //here initially props.alert is null so nothing gets returned from 2nd part(after &&)
        //we can also use if-else statement
        props.alert && <div>
              {/*by doing-> {`alert alert-warning alert-${props.alert.type}dismissible fade show`} -we can get the color green of alert */}
            <div className={`alert alert-warning alert-${props.alert.type}dismissible fade show`} role="alert">
            <strong>{capatalise(props.alert.type)}</strong>: {props.alert.msg}
            
            </div>
        </div>
    )
}

export default Alert
