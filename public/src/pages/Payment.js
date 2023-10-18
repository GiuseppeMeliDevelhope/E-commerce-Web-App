import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import { BsCreditCard, BsLock, BsTruck } from "react-icons/bs";
import { Link } from "react-router-dom";

function PaymentMethod() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {
        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
          <div
            className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
            style={{ maxWidth: "600px" }}
          >
            <div className="w-full pt-1 pb-5">
              <div className="bg-yellow-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <BsCreditCard className="w-[40px] h-[40px]" />
              </div>
            </div>
            <div className="mb-10">
              <h1 className="text-center font-bold text-xl uppercase">
                Secure payment 
              </h1>
            </div>
            <div className="mb-3 flex -mx-2">
                {/* /* credit card checkbox */}
              <div className="px-2">
                <label
                  htmlFor="type1"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-yellow-500"
                    name="type"
                    id="type1"
                    checked
                  />
                  <img
                    src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                    className="h-8 ml-3" alt="img"
                  />
                </label>
              </div>
              {/* paypal checkbox */}
              <div className="px-2">
                <label
                  htmlFor="type2"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-yellow-500"
                    name="type"
                    id="type2"
                  />
                  <img
                    src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                    className="h-8 ml-3"
                    alt=""
                  />
                </label>
              </div>
              {/* cash on delivery */}
              <div className="px-2">
              <Link to="/payment">
                <label
                  htmlFor="type2"
                  className="flex items-center cursor-pointer"
                >
                    
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-yellow-500"
                    name="type"
                    id="type3"
                  />
                <BsTruck className="h-8 ml-3 w-[25px]" />
                 <span className="ml-2">Cash on delivery</span>

                 
               
               
                </label>
                </Link>
              </div>
            </div>
            {/* form section */}
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">
                Full Name on card
              </label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Giuseppe Meli"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Card number</label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="0000 0000 0000 0000"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2 mb-9">
                <label className="font-bold text-sm mb-7 ml-1">
                  Expiration date
                </label>
                <div>
                  <input placeholder="06/27" className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-500 transition-colors cursor-pointer" >
                   
                  </input>
                </div>
              </div>

              <div className="mb-10 ml-20">
              <label className="font-bold text-sm mb-2 ml-1">
                CVC
              </label>
              <div>
                <input
                  className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-500 transition-colors "
                  placeholder="000"
                  type="text"
                  required
                />
              </div>
            </div>
             
            </div>
            
            <div>
                <Link to="/finalpay">
              <button className="block w-full max-w-xs mx-auto bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-700 text-white rounded-lg px-3 py-3 font-semibold">
                    <BsLock className="absolute ml-[80px] mt-1 " /> PAY NOW
              </button>
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default PaymentMethod;
