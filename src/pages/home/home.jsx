import BreadcrumbCommon from "@/components/breadcrumb/breadcrumb.jsx";
import Category from "@/components/category/category.jsx";
import HouseList from "@/components/list/house-list.jsx";
import Banner from "@/components/banner/banner.jsx";

const Home = () => {
    return (
        <div className="container mx-auto">
            <BreadcrumbCommon />
            <Category />
            <Banner />
            <HouseList />
        </div>
    );
}

export default Home;
