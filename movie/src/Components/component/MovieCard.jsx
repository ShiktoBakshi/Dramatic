// import { FaEye } from "react-icons/fa";
// import { FaHeartCircleCheck } from "react-icons/fa6";



const MovieCard = ({movie}) => {
    return (
        <div className="font-mon transition-transform duration-300  hover:scale-105">
            <img className="h-60 mx-auto rounded-lg object-contain" src={movie.card_picture} alt={movie.title} />
           
           <div className="p-4 space-y-2">
            <div>
                <h3>{movie.title} </h3>
                <div>
                    {/* <FaEye/>
                    <FaHeartCircleCheck></FaHeartCircleCheck> */}
                </div>
            </div>
            <p className="text-sm text-gray-400">{movie.released_date} </p>

            <div className="flex justify-between px-4">
                <p className="text-sm text-black font-extrabold bg-yellow-500 rounded-xl px-2">{movie.platform} </p>
                <p className="text-sm text-gray-500 flex justify-center items-center gap-2">{movie.rating} </p>
            </div>
           </div>

        </div>
    );
};

export default MovieCard;