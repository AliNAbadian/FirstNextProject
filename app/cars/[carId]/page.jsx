import React from 'react'

const page = ({ params, searchParams }) => {
    return (
        <div>
            {params.carId}
            <br />
            {searchParams.name}
        </div>
    )
}

export default page