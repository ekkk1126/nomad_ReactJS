import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../../css/Movie.module.css"

function Movie({ id, coverImg, title, }) {
    return (
        <div className={styles.container}>
            <img className={styles.cover} src={coverImg} alt={title} />
            <h2 className={styles.Mtitle}>
                <Link to={`/movie/${id}`}>{title}
                    {title.length > 12 ? `${title.slice(0, 12)}...` : title}
                </Link>
            </h2>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.number.isRequired,
    title: PropTypes.func.isRequired,
}

export default Movie;