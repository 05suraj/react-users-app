import React from 'react'
import '../pages/css/profile.css'
const ProfilePage = ()=>{

    return(

        <div class="container">
        <div class="row">
            <div class="col-lg-12 col-sm-6 mx-auto mt-4">
    
                <div class="card hovercard">
                    <div class="cardheader" style={{background:"red"}}>
    
                    </div>
                    <div class="avatar">
                        <a ><img alt="" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/></a>
                    </div>
                    <div class="info">
                        <div class="title">
                            <a target="_blank" href="#">Suraj Kumar</a>
                        </div>
                        <div class="desc">SoftWare Engineer</div>
                        <div class="desc">Bangalore</div>
                    </div>
                    <div class="bottom">
                        <a class="btn btn-primary btn-twitter btn-sm btn-card mr-2" href="#" target="_blank">
                            <i class="fa fa-youtube"></i>
                        </a>
                        <a class="btn btn-danger btn-sm btn-card mr-2" rel="publisher"
                           href="#" >
                            <i class="fa fa-google-plus"></i>
                        </a>
                        <a class="btn btn-primary btn-sm btn-card mr-2" rel="publisher"
                           href="#" >
                            <i class="fa fa-facebook"></i>
                        </a>
                        <a class="btn btn-warning btn-sm btn-card" rel="publisher" href="#" >
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>
    
            </div>
    
        </div>
        
    </div>
    )
}

export default ProfilePage