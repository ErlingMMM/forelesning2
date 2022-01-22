import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function FrontPage() {
    return <div>
        <h1>Move Database</h1>
        <ul>
            <li><Link to={"/movies"}>Show Movies</Link></li>
            <li><Link to={"/movies/new"}>Create Movie</Link></li>
        </ul>
    </div>;
}

const MOVIES = [
    {
        title: "pgr201",
        plot: "Johannes Codes, everyone confused",
        year: 2022
    },
    {
        title: "pgr203",
        plot: "Widard",
        year: 2020
    }
]


function MovieCard({movie}) {
    const {title, plot, year} = movie;
    return <div>
        <h2>{title.toUpperCase()} ( {year} )</h2>
        <p>{plot}</p>
    </div>;
}


function ListMovies() {
    return <div>
        <h1>Movies</h1>
        {MOVIES.map(movie => <MovieCard key={movie.title} movie={movie}/>)}
    </div>
}

function CreateMovies() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");

    const [newMovie, setNewMovie] = useState({});

    const navigate = useNavigate();

    useEffect( ()=> {
setNewMovie( {title, year, plot} );
    }, [title, year, plot])


    function handleSubmit(e) {
        e.preventDefault();
        MOVIES.push(newMovie);
        navigate("..");
    }

    return <form onSubmit={handleSubmit}>
        <h1>Create new movie</h1>
        <div>
            Title:
            <input value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div>
            Year:
            <input value={year} onChange={e => setYear(e.target.value)}/>
        </div>
        <div>
            Plot:
            <textarea value={plot} onChange={e => setPlot(e.target.value)}/>
        </div>
        <button>Save</button>
        <pre>
            {JSON.stringify({title, year, plot})}
        </pre>
    </form>
}

function MovieApplication() {
    return <Routes>
        <Route path={"/"} element={<ListMovies/>}/>
        <Route path={"/new"} element={<CreateMovies/>}/>
        <Route path={"*"} element={<h1>Movie Not Found</h1>}/>

    </Routes>
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/movies/*"} element={<MovieApplication/>}/>
            <Route path={"/filmer/*"} element={<MovieApplication/>}/>
            <Route path={"*"} element={<h1>Not Found</h1>}/>
        </Routes>
    </BrowserRouter>
}


ReactDOM.render(
    <Application/>,
    document.getElementById("app")
)