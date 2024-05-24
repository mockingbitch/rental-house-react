import Flickity from 'react-flickity-component';
import Banner from '@/assets/images/banner/banner-1.jpeg';
import "flickity/css/flickity.css";
const flickityOptions = {
    initialIndex: 2
}

export default () => {
    return (
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
        >
            <img src={Banner}/>
            <img src={Banner}/>
            <img src={Banner}/>
            <img src={Banner}/>
            <img src={Banner}/>
        </Flickity>
    )
}