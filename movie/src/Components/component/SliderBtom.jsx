import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError)
      return (
        <p className="text-red-500 text-center mt-10">
          ⚠️ Something went wrong in the slider!
        </p>
      );
    return this.props.children;
  }
}

//  Movie Card
const MovieCard = ({ movie }) => (
  <div className="font-mon transition-transform duration-300 hover:scale-105 text-black bg-gray-100 rounded-lg shadow-lg overflow-hidden">
    <img
      className="h-60 w-full object-cover"
      src={movie.card_picture}
      alt={movie.title}
    />
    <div className="p-4 space-y-2">
      <h3 className="text-lg font-bold">{movie.title}</h3>
      <p className="text-sm text-gray-500">{movie.released_date}</p>
      <div className="flex justify-between mt-2">
        <p className="text-sm text-black font-extrabold bg-yellow-500 rounded-xl px-2">
          {movie.platform}
        </p>
        <p className="text-sm text-gray-700">{movie.rating}</p>
      </div>
    </div>
  </div>
);

// 🔹 Main Slider Component
export default function MovieSlider() {
  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    fetch("/movie.json") 
      .then((res) => res.json())
      .then((data) => {
       
        const highRated = data.filter((movie) => movie.rating > 7);
        setMovies(highRated);
      })
      .catch((err) => console.error("Failed to fetch movies:", err));
  }, []);

  return (
    <ErrorBoundary>
      <div className="w-11/12 flex items-center mx-auto mt-10 mb-10">
        {movies.length > 0 ? (
          <Swiper
            navigation
            modules={[Navigation, Autoplay]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            Loading movies...
          </p>
        )}
      </div>
    </ErrorBoundary>
  );
}
