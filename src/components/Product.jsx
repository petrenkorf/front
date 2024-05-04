const Product = ({ name, description, price }) => {
  return (
    <div className="rounded-md m-6 bg-white border-2 border-gray-200 w-[400px] h-[500px] transition-all shadow-xl inline-block hover:shadow-2xl">
      <div className="p-4">
        <img src="https://placehold.co/600x400/EEE/31343C"/>
      </div>
      <div className="px-4 text-left">
        <h2 className="mb-4">{name}</h2>
        <p className="line-clamp-5">{description}</p>
      </div>
      <div className="h-[255px] text-right text-red-600 p-4 text-3xl font-bold">
        <p>R$ { (price / 100.0).toFixed(2).toLocaleString().replace('.',',') }</p>
      </div>
    </div>
  )
}

export default Product;
