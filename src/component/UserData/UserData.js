import React from 'react'

const UserData = (props) => {
    return (
        <div>
                {props.userDetails.map(user => {
                    <div>
                        <h3>Patient Information</h3>
                        <p>{`${user.FirstName} ${user.LastName}`}</p>
                        <p>{user.Email}</p>
                        <p>{user.Gender}</p>
                        <p>{user.Latitude}</p>
                        <p>{user.Longitude}</p>
                
                    <div>
                        <p>{user.CreditCardNumber}</p>
                        <p>{user.CreditCardType}</p>
                        <p>{user.DomainName}</p>
                        <p>{user.MacAddress}</p>
                        <p>{user.URL}</p>
                    </div>
                </div>
                    
                })}
        </div>
    )
}

export default UserData
