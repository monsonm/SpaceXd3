// Utils --> returns all the data needed from the SpaceX api to later use dj3s for visual


export async function getRockets() {
    const resRockets = await fetch('https://api.spacexdata.com/v4/rockets')
    if(resRockets.status !== 200) {
        return {
            message: "Error Getting Rockets"
        }
    }
    const rocketsData = await resRockets.json()

    let rockets = rocketsData.map(rocket => {
        return {
            name: rocket.name,
            image: rocket.flickr_images[0],
            link: `/rocket/${rocket.id}`
        }
    })

    return rockets
}

export async function getAstronauts() {
    const resAstronauts = await fetch('https://api.spacexdata.com/v4/crew')
    const astronautsData = await resAstronauts.json()

    let astronauts = astronautsData.map(astro => {
        return {
            name: astro.name,
            image: astro.image,
            link: `/astronaut/${astro.id}`
        }
    })

    return astronauts
}

export async function getDragons() {
    const resDragons = await fetch('https://api.spacexdata.com/v4/dragons')
    const dragonsData = await resDragons.json()

    let dragons = dragonsData.map(dragon => {
        return {
            name: dragon.name,
            image: dragon.flickr_images[0],
            link: `/dragon/${dragon.id}`
        }
    })

    return dragons
}

export async function getLaunches() {
    const resLaunches = await fetch('https://api.spacexdata.com/v4/launches')
    const launchesData = await resLaunches.json()
    let img;
    let launches = launchesData.map(launch => {
        if (launch.links.patch.small === null)
            img = "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"

        return {
            name: launch.name,
            image: launch.links.patch.small || img,
            link: `/launch/${launch.id}`
        }
    })

    return launches
}