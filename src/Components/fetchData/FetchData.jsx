import React, { useEffect, useState } from 'react'

const FetchData = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const url = 'https://dummyjson.com/users'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        setData(data.users)
        setLoading(false)
    }

    useEffect(() => {
        console.log('useEffect called');
        setLoading(true)
        fetchData()
    }, [])


    return (
        <div>
           
            {loading ? <h1>Loading...</h1> : <h1>Data Fetched</h1>}
            {data.map((user) => {
                return (
                    <div key={user.id}>
                        <h2>{user.firstName}</h2>
                        <p>{user.email}</p>
                    </div>
                )
            })}
            {/* <h1>{JSON.stringify(data)}</h1> */}
            {/* <h1>{data.map((user) => user.firstName)}</h1> */}
            {/* <h1>{data.map((user) => user.email)}</h1> */}
        </div>
    )
}

export default FetchData