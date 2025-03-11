import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import '../styles/pages/home.css';

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return (
    <div className="content">
      <p>{data}</p>
    </div>
  );
}

export default Home;
