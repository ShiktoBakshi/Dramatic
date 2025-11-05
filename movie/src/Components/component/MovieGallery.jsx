import { useEffect, useState } from "react";
import CategoriesNav from "./CategoriesNav";
import MovieCard from "./MovieCard";
// import toast from "react-hot-toast";







const MovieGallery = () => {
    const [movie,setMovie]=useState([]);
    const [loading,setLoading]=useState(true);
    const [selectCategory,setSelectCategory]=useState("All");
    const [showAll,setShowAll]=useState(false)

    useEffect(()=>{
        fetch('/movie.json')
        .then(res=>res.json())
        .then(data=>setMovie(data))
        // .catch((error)=>{
        //        console.log("erreo")
        //     toast.error("Failed movie Data")
        // })
        .finally(()=>setLoading(false))
    },[])
const categories =["All", ...new Set(movie.map(m=>m.category))]
const filterMovie=selectCategory==="All" ? movie:movie.filter(m=>m.category=== selectCategory)
const visibelMovies=showAll ? filterMovie:filterMovie.slice(0,8);
    return (
        <div className="w-11/12 mx-auto py-16">
            <h1 className="text-lg lg:text-xl">RECOMMENDED FOR YOU</h1>
            <CategoriesNav  
            categories={categories}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            ></CategoriesNav>
            {
                loading ?
               ( <div className="flex justify-center items-center h-64">
                    <span className="loading loading-dots text-yellow-500 loading-xl"></span>
                </div>): visibelMovies.length > 0 ?(<>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {
                    visibelMovies.map(movie =>(
                        <MovieCard
                        movie={movie}
                        key={movie.id}
                        ></MovieCard>
                    ))
                   }
                </div>

                    {
                        filterMovie.length >8 &&(
                        <div className="flex justify-center mt-8">
                            <button

                            className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 "
                            onClick={()=>setShowAll(!showAll)}
                            >{showAll ? "Show Less ":"Show More"} </button>
                        </div>
                        )
                    }

                </>) : (
                    <p className="text-gray-400 text-center">no movie found</p>
                )
            }
        </div>
    );
};

export default MovieGallery;