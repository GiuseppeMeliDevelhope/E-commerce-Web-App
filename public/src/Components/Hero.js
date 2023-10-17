import React from "react";
import { Link } from "react-router-dom";
import img from "../img/ocean_hero.png";

function Hero () {

  

    
    return(
        
        <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 ">
          <div className="container mx-auto flex justify-around h-full">
             {/* text */}
             <div className="flex flex-col justify-center">
                {/* pretitle */}
                <div className="font-semibold flex items-center justify-center uppercase text-white lg:ml-[300px] xl:ml-[450px] ">
                    <div className="w-10 h-[2px] bg-black mr-3"></div>New Trend
                </div>
                {/* title */}
               <div className="w-[120px] h-[180px]"></div>
                
                <Link className="text-white self-start flex items-center justify-center uppercase font-semibold border-b-2 border-primary ml-6 lg:ml-[330px] xl:ml-[480px] cursor-pointer"  to={"/"}>
                    Discover More
                </Link>
                </div>
              {/* img */}
              <div className="hidden lg:block">
                <img  alt=""/>
              </div>
          </div>
        </section>
    
    )
};

export default Hero;