import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div>
      <h1>Bienvenido a mi portafolio 🚀</h1>
      <p>{data}</p>
    </div>
  );
}

export default Home;
