import {useEffect, useState} from "react";

export default function FirstPost() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://api.spacexdata.com/v3/launches/next')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    console.log(data)

    const spaceData = data.details
    // spaceData.push(data)

    return(
        <div>
            <h1>
                SpaceX Data
            </h1>
            <p>
                Hi Fucker {spaceData}
             </p>
        </div>
    )
}