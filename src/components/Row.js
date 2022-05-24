import React from 'react'
import { useEffect, useState } from "react";
import './CSS/Row.css'
import instance from './Instance';
import request from "./Request";
const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title,fetchUrl }) {

    const[movies,setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const requests = await instance.get(fetchUrl)
            setMovies(requests.data.results)
        }
        fetchData()
    }, [])
    // console.log("movie data is",movie);
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie)=>(
                    <img 
                    className='row_poster'
                    alt={movie.name}
                    src={`${base_url}${movie.backdrop_path}`}
                    />
                ))}

            </div>
        </div>
    )
}

export default Row