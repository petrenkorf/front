import { useState } from "react";
import { animate, spring } from 'motion';
import './App.css';
import Product from './components/Product';
import NewProductForm from './components/NewProductForm';


const OPTIONS_MENU_ANIMATION = [{
  width: '400px',
  height: '80px',
  opacity: 1
}, {
  width: '300px',
  height: '68px',
  opacity: 0
}]

const CREATE_PRODUCT_FORM_ANIMATION = [{
  opacity: 1,
  left: '105%'
}, {
  opacity: 0,
  left: '0px'
}]

const FORM_ANIMATION_CONFIG =  { easing: spring({ 
  stiffness: 150,
}) }

const ANIMATION_CONFIG =  { easing: spring({ 
  stiffness: 400,
}) }

const NewProductButton = () => {
  const [open, setOpen] = useState(false)

  let form = (open) ? <NewProductForm /> : null

  const closeForm = () => {
    animate("#new-product", CREATE_PRODUCT_FORM_ANIMATION[+ open], FORM_ANIMATION_CONFIG).finished.then(() => {
      setOpen(!open)
    });
  }

  const openForm = () => {
    setOpen(!open)
    setTimeout(() => {
      animate("#new-product", CREATE_PRODUCT_FORM_ANIMATION[+ open], FORM_ANIMATION_CONFIG)
    },10)
  }

  const clickHandler = () => {
    if (open) {
      closeForm()
    } else {
      openForm()
    }
  }

  return (
    <div 
      onClick={clickHandler}
      className="relative cursor-pointer align-top rounded-md m-6 bg-blue-300 border-2 border-blue-400 w-[400px] h-[500px] transition-all shadow-xl shadow-blue-300 inline-block hover:shadow-2xl hover:shadow-blue-400">
      <p className="text-white font-extrabold">Create Product</p>
      { form }
    </div>
  )
}

const product = {
  name: 'Product',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque vehicula cursus. Duis in tortor sit amet purus ornare placerat. Mauris vitae enim at diam dapibus vulputate. Sed ut gravida purus, ut lobortis dolor. Nulla molestie ex a quam semper, nec semper urna vulputate. Pellentesque vehicula dapibus nisi, eget fermentum purus commodo nec. Phasellus elementum, justo at pharetra rutrum, lectus arcu aliquam risus, aliquet tristique purus libero ac est.',
  price: 2900
};

function App() {
  const [menu_open, set_menu_open] = useState(false);
    
  const handleClick = () => {
    animate(".popup", OPTIONS_MENU_ANIMATION[+ menu_open], ANIMATION_CONFIG);
    set_menu_open(!menu_open);
  }

  return (
    <div className="App bg-gray-100 h-screen">
      <h1 className="text-3xl font-bold underline">Welcome</h1>
      <button 
        onClick={handleClick}
        className="bg-blue-300 p-4 cursor-pointer">Open Popup</button>
      <div className="m-auto popup border-2 border-gray-200 shadow-xl w-[300px] p-5 bg-white opacity-0">pop up</div>
      <NewProductButton></NewProductButton>
      <span>Loading</span>
    </div>
  );
}

export default App;
