import Flickity from 'react-flickity-component';
import Banner from '@/assets/images/banner/banner-1.jpeg';
import "flickity/css/flickity.css";
import './_banner.scss';

const flickityOptions = {
    wrapAround: true,
    asNavFor: ".carousel.carousel-main",
    contain: true,
    pageDots: true,
    initialIndex: 2
};

export default () => {
    return (
        <Flickity
            className={ 'carousel' } // default ''
            elementType={ 'div' } // default 'div'
            disableImagesLoaded={ false } // default false
            reloadOnUpdate // default false
            static // default false
            options={flickityOptions}
        >
            <img className="pl-8 max-h-40 w-96" src={ Banner } alt=""/>
            <img className="pl-8 max-h-40 w-96" src={ Banner } alt=""/>
            <img className="pl-8 max-h-40 w-96" src={ Banner } alt=""/>
            <img className="pl-8 max-h-40 w-96" src={ Banner } alt=""/>
            <img className="pl-8 max-h-40 w-96" src={ Banner } alt=""/>
            <img className="pl-8 max-h-40 w-96" src={ Banner } alt=""/>
            <img className="pl-8 max-h-40 w-96" src={ Banner } alt=""/>
        </Flickity>
    )
}