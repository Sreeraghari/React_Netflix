import React from 'react'
import { useEffect, useState } from 'react'
import './CSS/Banner.css'

import instance from './Instance'
import request from './Request'
const base_url = "https://image.tmdb.org/t/p/original/"

function Banner() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const requests = await instance.get(request.fetchNetflixOriginals)
            setMovies(requests.data.results[Math.floor(Math.random() * requests.data.results.length - 1)])
        }
        fetchData()
    }, [])
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "...." : str
    }
    // console.log(movies);
    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movies.backdrop_path})`,
                backgroundPosition: "center center"
            }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movies.title || movies.name || movies.original_name}
                </h1>

                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>More Info</button>
                </div>

                <h1 className='banner_description'>
                    {truncate(movies.overview,150)}
                </h1>
            </div>

        </header>
    )
}

export default Banner