import { React, useEffect, useState } from "react";
import { animate, spring } from 'motion';
import './App.css';


const OPTIONS_MENU_ANIMATION = [{
  width: '400px',
  height: '80px',
  opacity: 1
}, {
  width: '300px',
  height: '68px',
  opacity: 0
}]

const ANIMATION_CONFIG =  { easing: spring({ 
  stiffness: 400,
}) }

const Product = () => {
  return (
    <div className="rounded-md m-6 bg-white border-2 border-gray-200 w-[400px] h-[500px] transition-all shadow-xl inline-block hover:shadow-2xl">
      <div className="p-4">
        <img src="https://placehold.co/600x400/EEE/31343C"/>
      </div>
      <div className="px-4 text-left">
        <h2 className="mb-4">Product 1</h2>
        <p className="line-clamp-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque vehicula cursus. Duis in tortor sit amet purus ornare placerat. Mauris vitae enim at diam dapibus vulputate. Sed ut gravida purus, ut lobortis dolor. Nulla molestie ex a quam semper, nec semper urna vulputate. Pellentesque vehicula dapibus nisi, eget fermentum purus commodo nec. Phasellus elementum, justo at pharetra rutrum, lectus arcu aliquam risus, aliquet tristique purus libero ac est. </p>
      </div>
      <div className="h-[255px] text-right text-red-600 p-4 text-3xl font-bold">
        <p>R$ 29,00</p>
      </div>
    </div>
  )
}

const NewProductButton = () => {
  return (
    <div className="cursor-pointer align-top rounded-md m-6 bg-blue-300 border-2 border-blue-400 w-[400px] h-[500px] transition-all shadow-xl shadow-blue-300 inline-block hover:shadow-2xl hover:shadow-blue-400">
      <p className="text-blue-600 font-extrabold">+</p>
    </div>
  )
}

function App() {
  const [menu_open, set_menu_open] = useState(false);
    
  const handleClick = (_) => {
    animate(".popup", OPTIONS_MENU_ANIMATION[+ menu_open], ANIMATION_CONFIG);
    set_menu_open(!menu_open);
  }

  return (
    <div className="App bg-gray-100 ">
      <h1 className="text-3xl font-bold underline">Welcome</h1>
      <button 
        onClick={handleClick}
        className="bg-blue-300 p-4 cursor-pointer">Open Popup</button>
      <div className="m-auto popup border-2 border-gray-200 shadow-xl w-[300px] p-5 bg-white opacity-0">pop up</div>
      <NewProductButton></NewProductButton>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </div>
  );
}

export default App;
