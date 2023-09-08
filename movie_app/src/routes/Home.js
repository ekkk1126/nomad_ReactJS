import { useState, useEffect } from "react";
import Movie from "./component/Movie";
import styles from "../css/Home.module.css";
import "../css/Loading.css"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.2&sort_by=year&genre=Animation"
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div>
            {loading ? (
                <div>
                    <h1 class="loading"> Loading...</h1>
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.container_movies}>
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;