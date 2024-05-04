const NewProductForm = () => {
  return (
    <div id="new-product" className="absolute bg-white border-2 border-gray-200 w-full h-full left-full top-0">
      <h2 className="text-2xl p-4">New Product</h2>
      <form className="p-4">
        <label>
          Name
          <input 
            type="text" 
            name="name"
            data-testid="name-input"/>
        </label>

        <label>
          Description
          <textarea 
            name="description"
            data-testid="description-input"/>
        </label>

        <label>
          Price
          <input 
            type="text"
            name="price"
            data-testid="price-input"/>
        </label>

        <input type="submit" value="Create" />
      </form> 
    </div>
  )
}

export default NewProductForm;
