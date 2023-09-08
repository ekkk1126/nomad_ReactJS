import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Loading.css"
import styles from "../css/Detail.module.css"

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState("");
    const [loading, setLoading] = useState(true);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            {
                loading ?
                    <h1 class="loading">
                        Loading...
                    </h1>
                    :
                    <div className={styles.container}>
                        <div>
                            <h1 className={styles.title}>{movie.title}</h1>

                            <div className={styles.Img}><img
                                className={styles.coverImage} src={movie.large_cover_image} alt={movie.title} /></div>
                            <div className={styles.text}>⭐ {movie.rating} / 10</div>
                            <br />

                            <div className={styles.info1}>
                                <div className={styles.text}><li>{movie.year}</li></div>
                                <div className={styles.text}><li>{movie.runtime} 분</li></div>
                                <br /><br /><br />
                            </div>

                            <div className={styles.info2}>
                                <li className={styles.text}>summary
                                    <p /></li>
                                <div className={styles.des}>
                                    {movie.description_full}
                                </div>
                            </div>
                        </div>
                        <div>
                            <br />
                            <br />
                            <br />
                            <hr className={styles.hr} />
                        </div>
                    </div>
            }
        </div>
    );
}

export default Detail;