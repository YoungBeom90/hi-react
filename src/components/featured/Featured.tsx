
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import batman from '../../images/batman.jpg';

type FeaturedProp = {
    type: string;
}

const Featured = ({type}: FeaturedProp) => {

  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="action">action</option>
                    <option value="melo">melo</option>
                    <option value="comedy">comedy</option>
                </select>
            </div>
        )}
        <img src={batman} alt="poster" width={"100%"}/>
        <div className="info">
            {/* <img src={featured1} alt="featured1"/> */}
            <span className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At est ipsa, maiores
                cumque praesentium dolores expedita ullam assumenda? Ipsam culpa rem sapiente.
                Non repellendus minus nisi, doloremque magni eos quasi?
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured;