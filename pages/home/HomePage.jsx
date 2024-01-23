import HeadingTitle from '../../components/heading-title/HeadingTitle';
import Services from '../../components/services/Services';
import Slider from '../../components/slider/Slider';
import {books } from "../../data/books";
import BookSlider from '../../components/book-slider/BookSlider';

const HomePage = () => {
    return ( 
    <div className="home">
<Slider />
<Services />
<HeadingTitle title="Top Books of all Time"/>
<BookSlider data={books} />
<HeadingTitle title="Frequently Bought"/>
<BookSlider data={books} />
<HeadingTitle title="Most Liked"/>
<BookSlider data={books} />
    </div> );
}
 
export default HomePage;