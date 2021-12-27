import React from "react";
import "./Banner.css";
import {Carousel} from '3d-react-carousal';


function Banner(){
    let slides = [
        <img  src="https://cyberintelmag.com/wp-content/uploads/2021/10/Twitch-Logo-720-e1633540724770.jpg" alt="1" />,
        <img  src="https://pbs.twimg.com/media/DZTDb-UXcAArQDp.jpg" alt="2" />  ,
        <img  src="https://now.symassets.com/content/dam/norton/global/images/non-product/misc/tlc/img_main_gaming-male-computer-dark_800x300.png" alt="3" />  ,
        <img  src="https://www.btcgosu.com/wp-content/uploads/2021/08/xfig-14-08-2021_13-00-30.jpg.pagespeed.ic.WpIoXOMUCP.jpg" alt="4" />  ,
        <img  src="https://now.symassets.com/content/dam/norton/global/images/non-product/misc/tlc/twitch_extensions_800x300.png" alt="5" />   ];
        
    return(

        

        
        <div className="banner-container">
         <Carousel slides={slides} autoplay={false} interval={1}/>
         </div>

        // <div className="Banner"> 
        //         <div className="ArrowsSets">
        //             <IconContext.Provider value={{ color: "#fff", className: "arrows" }}>
        //                 <IoIosArrowBack />
        //             </IconContext.Provider>
        //         </div>
        //         <div className="BannerImage">
        //             <img className="Image" src="https://media-cdn.t24.com.tr/media/library/2021/10/1633589056340-titi.jpg" alt=""/>
        //         </div>
        //             <div className="ArrowsSets">
        //                 <IconContext.Provider value={{ color: "#fff", className: "arrows" }}>
        //                     <IoIosArrowForward />
        //                 </IconContext.Provider>
        //             </div>
        //       </div>

    )
}

export default Banner;