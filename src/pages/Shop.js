import { useEffect, useState } from "react";
import "../App.css";
import Card from "../Components/Card";

function Shop() {
  const [prods, setProds] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then(res => res.json())
      .then(res => setProds(res.products));
  }, [search])
  useEffect(() => {
    setTimeout(()=>{
      fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(res => setProds(res.products));
    },600)
  }, [])
  return (
    <div className="Shop">
      <input
        type='text'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className='inp' />
      <div className="parent">
        {
          prods.map((e) => <Card key={e.id} image={e.images[0]} title={e.title} id={e.id} />)
        }
      </div>
    </div>
  );
}

export default Shop;
