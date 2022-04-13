import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListItem from '../listItem/ListItem';
import './list.scss';

const List = () => {
  return (
    <div className='list'>
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left'/>
            <div className="container">
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right'/>
        </div>
    </div>
  )
}

export default List