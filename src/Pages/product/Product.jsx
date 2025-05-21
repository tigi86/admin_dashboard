import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import {ProductData} from '../../dummyData';
import tigi from '../../assets/tigi.jpg'
import { Publish } from '@mui/icons-material';
const Product = () => {
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to='/newProducts/'>
        <button className="productAddButton">Create </button>
        </Link>

      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart 
          data={ProductData} dataKey="Sales" title="Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={tigi} alt="" className='productInfoTopImg'/>
            <span className="productNname">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5634</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In stock:</span>
              <span className="productInfoValue">no</span>
            </div>
            
          </div>
        </div>
      </div>
      <div className="poductBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpods" className='productFormInput'/>
            <label>In Stock</label>
            <select id='instock' name='inStock' className='productFormSelect'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select id='active' name='active' className='productFormSelect'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={tigi} alt="" className="productUploadImg" />
              <label for="file">
                <Publish/>
              </label>
              <input type="file" id='file' style={{display:'none'}}/>
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
