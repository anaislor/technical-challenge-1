import React, { useState, useEffect } from "react";
import axios from "axios";

function Celebrities() {
  const [celebrities, setCelebrities] = useState([]);
  const [allCelebrities, setAllCelebrities] = useState([]);
  const [oneCelebrity, setOneCelebrity] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?page=2&api_key=f75eb108bf9825a187ff7b116255d73c"
      )
      .then(response => {
        console.log(response.data.results);
        setCelebrities(response.data.results);
        setAllCelebrities(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  function handleOnclick(i) {
    setOneCelebrity(celebrities.filter(c => c.id === i));
  }

  useEffect(() => {
    let celebritiesCopy = allCelebrities;
    setCelebrities(
      celebritiesCopy.filter(celebrity =>
        celebrity.name.toUpperCase().includes(search)
      )
    );
  }, [search]);

  function handleOnChange(event) {
    setSearch(event.target.value.toUpperCase());
  }

  return (
    <div id="celebrities">
      <h1>Celebrities</h1>
      <div className="search">
        <input type="text" value={search} onChange={handleOnChange} />
      </div>
      <div id="celebritiesList">
        <h2>{celebrities.length} celebrities</h2>
        {celebrities.map(celebrity => (
          <div
            key={celebrity.id}
            className={
              oneCelebrity.name === celebrity.name
                ? "OneCelebrity is-active"
                : "OneCelebrity"
            }
            onClick={() => handleOnclick(celebrity.id)}
          >
            <ul>
              <li>
                <img
                  src={
                    "https://image.tmdb.org/t/p/w185/" + celebrity.profile_path
                  }
                  alt="celebrity profile picture"
                />
              </li>
              <li>{celebrity.name}</li>
            </ul>
          </div>
        ))}
      </div>
      {!oneCelebrity.length ? (
        ""
      ) : (
        <div id="celebrityDetail">
          {oneCelebrity.map((c, i) => (
            <div key={c.name}>
              <img
                src={"https://image.tmdb.org/t/p/w185/" + c.profile_path}
                alt={c.name}
              />
              <h2>{c.name}</h2>
              <h3>Know for:</h3>
              <ul>
                {c.known_for.map(movie => (
                  <li key={movie.title}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w185/" + movie.poster_path
                      }
                      alt={movie.title}
                    />
                    {movie.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Celebrities;
