import { useState } from "react";
import MovieCard from "./components/movieCard";

function App() {
  return (
    <> 
   <MovieCard movie={{title:"tushar film", release_date:"2025"}}/>
   <MovieCard movie={{title:"tim film", release_date:"2024"}}/>

    </>
  );
}

export default App;
