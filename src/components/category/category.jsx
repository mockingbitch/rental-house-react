import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './_category.scss';
import clsx from "clsx";
import {FreeMode, Pagination} from "swiper/modules";
import {useEffect, useState} from "react";
import SVG from 'react-inlinesvg';
import {CategoryData} from "@/components/category/category-data.js";
import { useTranslation } from 'react-i18next'
import {LANG_EN} from "@/lib/constants.js";
import {useDispatch, useSelector} from "react-redux";
import {select} from "@/store/slices/category-slice.js";

export default () => {
    const dispatch = useDispatch();
    const categoryState = useSelector((state) => state.category);
    const { i18n } = useTranslation();
    const [categories, setCategories] = useState(CategoryData);
    const modules = [Pagination, FreeMode];
    const [numberOfCategory, setNumberOfCategory] = useState(0);

    useEffect(() => {
        switch (true) {
            case window.innerWidth <= 400:
                setNumberOfCategory(3);
                break;
            case window.innerWidth > 400 && window.innerWidth <= 770:
                setNumberOfCategory(5);
                break;
            case window.innerWidth > 770 && window.innerWidth <= 990:
                setNumberOfCategory(8);
                break;
            default:
                setNumberOfCategory(8);
        }
    }, []);

    const handleClick = (item) => {
        const action = select(item);
        dispatch(action);
    }

    return (
        <div className="category">
            <Swiper
                className="swiper dark:bg-gray-800 rounded-xl mb-4"
                spaceBetween={50}
                slidesPerView={numberOfCategory}
                modules={modules}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                freeMode={true}
            >
                {categories?.map((item, key) => {
                    let icon = item.icon;
                    return (
                        <SwiperSlide key={key} className="slide mt-4 mb-2 max-height-[70px]" onClick={() => handleClick(item)}>
                            <div
                                className={clsx('category__box-item', categoryState?.selected?.id === item.id ? 'isActive' : '')}
                            >
                                <div
                                    className="header-category_item_icon thumbContainer flex justify-center"
                                >
                                    <SVG className="fill-stone-500" src={icon} />
                                </div>
                                <div className="header-category_item_title text-sm title dark:text-white truncate">
                                    { i18n.language === LANG_EN ? item.name_en : item.name_vi }
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};