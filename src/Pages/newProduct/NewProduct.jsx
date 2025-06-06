import './NewProduct.css'

const NewProduct = () => {
  return (
    <div className='newProduct'>
      <h1 className="addProductTitle">New product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" required />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" required />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" required />
        </div>
        <div className="addProductItem">
            <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
       
        <button className="addProductButton">Add Product</button>
      </form>
    </div>
  )
}

export default NewProduct
