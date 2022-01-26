import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


function FrontPage() {
    return <div>
        <h1>Move Database</h1>
        <ul>
            <li><Link to={"/movies"}>Show Movies</Link></li>
            <li><Link to={"/movies/new"}>Create Movie</Link></li>
        </ul>
    </div>;
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