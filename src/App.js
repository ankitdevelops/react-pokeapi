import { useState, useEffect } from "react";
import Search from "./Components/Search";
import axios from "axios";
import Card from "./Components/Card";
function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${keyword ? keyword : "ditto"}/`
        );
        const data = await response?.data;
        setPokemon(data);
        setImgUrl(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
        );
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, [keyword]);
  const searchPokemon = (searchField) => {
    setKeyword(searchField);
  };

  return (
    <main className="container mx-auto px-4">
      <Search searchPokemon={searchPokemon} />
      <Card pokemon={pokemon} loading={loading} imgUrl={imgUrl} error={error} />
    </main>
  );
}

export default App;
