import { ReactComponent as StarFull } from 'assents/img/Star-Full.svg';
import { ReactComponent as StarHalf } from 'assents/img/Star-Half.svg';
import { ReactComponent as StarEmpty } from 'assents/img/Star-Empty.svg';
import './styles.css';

function MovieStars() {

    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );

}

export default MovieStars;