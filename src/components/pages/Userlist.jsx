import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../pages/css/product.css'
const Userlist = ()=>{

const [productlist, setProductlist] =useState([])

const getUserlist = async ()=>{
    const allUserdata = await axios.get('http://localhost:3003/userpost')
    
    setProductlist(allUserdata.data)
}
useEffect(()=>{
    getUserlist()
},[])
    return(

        <>
      <div class="container">    
      <div class="row mt-4">
          {productlist.map((res)=>{
              return(
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src={res.image}/></div>
		<figcaption class="info-wrap">
				<h4 class="title">{res.title.substring(0,25)}</h4>
				
				<div class="rating-wrap">
					<div class="label-rating">132 reviews</div>
					<div class="label-rating">154 orders </div>
				</div> 
		</figcaption>
		<div class="bottom-wrap">
			<a href="" class="btn btn-sm btn-primary float-right">Order Now</a>	
			<div class="price-wrap h5">
				<span class="price-new">${res.price}</span> <del class="price-old">$1980</del>
			</div>
		</div> 
	</figure>
</div> 
              )
          })}



</div> 

    </div>
        </>
    )
}

export default Userlist