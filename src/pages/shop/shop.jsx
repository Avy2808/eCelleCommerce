import { useEffect, useState } from "react"
import { addCart } from "../../redux/action"
import './shop.css'
import { useDispatch } from "react-redux"
import Cookies from "js-cookie"

export default function shop() {
  const [products, setProduct] = useState([])
  const [searchResult, setSearchResult] = useState("")
  let componentMounted = true

  const dispatchEvent = useDispatch()

  const addProduct = (product) => {
    dispatchEvent(addCart(product))
  }

  useEffect(() => {
    const getProducts = async () => {
      let result = await fetch("https://e-commerce.urownsite.xyz/products/");
      if(componentMounted)
      {
        setProduct(await result.clone().json())
      }
      return () => {
        componentMounted = false
      }
    }
    getProducts();
  },[])

  function handle1(e) {
    setSearchResult(e.target.value);
  }

  async function searchPost(title) {
    let item = {title}
    let url = "https://e-commerce.urownsite.xyz/products/search"
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": Cookies.get('auth_key'),
        },
        body:JSON.stringify(item)
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setProduct(response)
        });
  }

  return (
    <div>
      {/* <input type="text" placeholder="Search Product" name="product" value=""/> */}
      <div className="search">
      <input required type="text" className="sb" name="result" placeholder="Search Posts" onChange={(e) => handle1(e)} />
      <input type="button" className="sb s" value="Search" onClick={() => searchPost(searchResult)} />
      </div>
      <div className="product-container">
        { 
          products.data && products.data.map((item) => {
            return(
              <div className="product">
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <button onClick={() => addProduct(item)} className="btn">Add Item</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
 