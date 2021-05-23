import React from 'react'

const AccessForm = ({HandleLogout}) => {
    return (
        <section className='container-accessForm'>
            <nav>
                <div>
                    <h2>You have already accessed your account!!</h2>
                </div>
                <div>
                    <button onClick={HandleLogout}>Logout</button>
                </div>             
            </nav>
        </section>
    )
}

export default AccessForm
