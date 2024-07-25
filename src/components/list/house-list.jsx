import {Link} from "react-router-dom";

const houses = [
    {
        id: 1,
        name: 'Biệt thự Tây Hồ 25m2',
        thumbnail: 'https://tostemvietnam.com/wp-content/uploads/2023/05/biet-thu-dep-2-1.png',
        description: 'Description',
    },
    {
        id: 2,
        name: 'Biệt thự Tây Hồ 25m2',
        thumbnail: 'https://kientruccb.vn/wp-content/uploads/2020/07/thiet-ke-biet-thu-hien-dai-4-tang-ket-hop-cho-thue-nghi-duong2..jpg',
        description: 'Description',
    },
    {
        id: 3,
        name: 'Biệt thự Tây Hồ 25m2',
        thumbnail: 'https://tostemvietnam.com/wp-content/uploads/2023/05/biet-thu-dep-2-1.png',
        description: 'Description',
    },
    {
        id: 4,
        name: 'Biệt thự Tây Hồ 25m2',
        thumbnail: 'https://tostemvietnam.com/wp-content/uploads/2023/05/biet-thu-dep-2-1.png',
        description: 'Description',
    },
    {
        id: 5,
        name: 'Biệt thự Tây Hồ 25m2',
        thumbnail: 'https://tostemvietnam.com/wp-content/uploads/2023/05/biet-thu-dep-2-1.png',
        description: 'Description',
    },
    {
        id: 6,
        name: 'Biệt thự Tây Hồ 25m2',
        thumbnail: 'https://tostemvietnam.com/wp-content/uploads/2023/05/biet-thu-dep-2-1.png',
        description: 'Description',
    },
    {
        id: 7,
        name: 'Biệt thự Tây Hồ 25m2',
        thumbnail: 'https://tostemvietnam.com/wp-content/uploads/2023/05/biet-thu-dep-2-1.png',
        description: 'Description',
    },
    {
        id: 8,
        name: 'Biệt thự Tây Hồ 25m2',
        thumbnail: 'https://tostemvietnam.com/wp-content/uploads/2023/05/biet-thu-dep-2-1.png',
        description: 'Description',
    },
    {
        id: 9,
        name: 'Biệt thự Tây Hồ 25m2',
        thumbnail: 'https://tostemvietnam.com/wp-content/uploads/2023/05/biet-thu-dep-2-1.png',
        description: 'Description',
    },
];

export default () => {
    return (
        <div className="h-full flex w-full justify-center items-center dark:bg-gray-800 dark:border-0 p-2 mt-4 border-slate-200 border rounded-xl">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">
                { houses?.map((item, key) => {
                    let id = item.id;
                    return (
                        <Link
                            to={`house-detail/${id}`}
                            state={id}
                            key={ key }
                            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
                            <div
                                className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                                24
                            </div>
                            <div className="p-2 flex justify-center">
                                <img
                                    className="rounded-md min-h-80"
                                    src={ item.thumbnail }
                                    loading="lazy"
                                    alt={ item.name }
                                />
                            </div>
                            <div className="px-4 pb-3">
                                <div>
                                    <h5 className="text-base font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                                        { item.name }
                                    </h5>
                                    <p className="antialiased text-gray-600 dark:text-gray-400 text-base break-all">
                                        { item.description }
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
                { houses.length === 0 && <h1>Empty</h1> }
            </div>
        </div>
    );
}