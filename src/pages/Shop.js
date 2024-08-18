import { useEffect, useState } from "react";
import "../App.css";
import Card from "../Components/Card";

// localStorage.clear()
function Shop() {
  const [carts,setCarts] = useState(JSON.parse(localStorage.getItem('prots'))||[])
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
          prods.map((e) => <Card key={e.id} prod={e} addBt={()=>{
            setCarts([...carts,e])
            localStorage.setItem('prots',JSON.stringify([...carts,e]))
          }} />)
        }
      </div>
    </div>
  );
}

export default Shop;
