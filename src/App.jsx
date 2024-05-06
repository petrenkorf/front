import { useEffect, useState, useRef } from "react";
import { animate, spring } from 'motion';
import './App.css';
import Product from './components/Product';
import NewProductForm from './components/NewProductForm';

const CREATE_PRODUCT_FORM_ANIMATION = [{
  opacity: 1,
  left: '105%'
}, {
  opacity: 0,
  left: '0px'
}]

const FORM_ANIMATION_CONFIG =  { easing: spring({ 
  stiffness: 200,
  damping: 15
}) }

const useIsMount = () => {
  const isMountRef = useRef(true)

  useEffect(() => {
    isMountRef.current = false
  }, [])

  return isMountRef.current
}

const NewProductButton = () => {
  const [open, setOpen] = useState(false)
  const [animating, setAnimating] = useState(false)
  const isMount = useIsMount()
  
  useEffect(() => {
    if (!isMount) setAnimating(true)
  }, [open])

  const closeForm = () => {
    animate("#new-product", CREATE_PRODUCT_FORM_ANIMATION[+ open], FORM_ANIMATION_CONFIG).finished.then(() => {
      setOpen(!open)
      setAnimating(false)
    });
  }

  const openForm = () => {
    setOpen(!open)
    setTimeout(() => {
      animate("#new-product", CREATE_PRODUCT_FORM_ANIMATION[+ open], FORM_ANIMATION_CONFIG).finished.then(() => {
        setAnimating(false)
      })
    }, 50)
  }

  const clickHandler = () => {
    (open) ? closeForm() : openForm()
  }

  let form = (open) ? <NewProductForm onClickOutside={closeForm} onCancel={closeForm}/> : null

  return (
    <div className="relative w-[400px] h-[500px]">
      <button 
        onClick={clickHandler}
        disabled={animating}
        className="relative cursor-pointer align-top rounded-md m-6 bg-blue-300 border-2 border-blue-400 w-[400px] h-[500px] transition-all shadow-xl shadow-blue-300 inline-block hover:shadow-2xl hover:shadow-blue-400">
        <p className="text-white font-extrabold">Create Product {animating.toString()}</p>
      </button>
      { form }
    </div>
  )
}

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_ADDRESS}/products`)
      const data = await response.json()

      setIsLoading(false)
      setProducts(data.products)
    }

    fetchData()
  }, [])

  const loading = (isLoading) ? (<span>Loading</span>) : null

  return (
    <div className="App bg-gray-100 h-screen">
      <h1 className="text-3xl font-bold underline">Welcome</h1>
      <NewProductButton></NewProductButton>
      { loading }
      { products.map((product, key) => (<Product key={key} {...product} />))}
    </div>
  );
}

export default App;
