import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import { BsCreditCard, BsLock, BsTruck } from "react-icons/bs";
import { Link } from "react-router-dom";

function PaymentMethod() {
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCVC] = useState("");
 


  const handlePayNowClick = (e) => {
    e.preventDefault();
    if (!fullName || !cardNumber || !expirationDate || !cvc) {
      alert("You must fill all the fields");
    } else {
      window.location.href = "/shipping"; 
     
    }
  };
  
 
  


  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {
        <div className="min-w-screen min-h-screen bg-gray-200 flex flex-col items-center justify-center px-5 pb-10 gap-[80px] pt-16">
           <div className="flex flex-col pl-4 pr-4 pb-5 items-center border-b bg-white py-4 sm:flex-row sm:px-10  lg:px-20 xl:px-32">
              <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                <div className="relative">
                  <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                    <li className="flex items-center space-x-3 text-left sm:space-x-4">
                      <a
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                        href="/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </a>
                      <span className="font-semibold text-gray-900">Shop</span>
                    </li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                        href="/"
                      >
                        
                        2
                      </a>
                      <span className="font-semibold text-gray-900">
                        Payment
                      </span>
                    </li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="/">3</a>
                      <span className="font-semibold text-gray-500">
                        Complete Order
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2 mb-9">
                <label className="font-bold text-sm mb-7 ml-1">
                  Expiration date
                </label>
                <div>
                  <input value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)} placeholder="06/27" className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-500 transition-colors cursor-pointer" >
                   
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
                  value={cvc}
                  onChange={(e) => setCVC(e.target.value)}
                
                />
              </div>
            </div>
             
            </div>
            
            <div>
                <Link to="/shipping">
              <button  onClick={handlePayNowClick} className="block w-full max-w-xs mx-auto bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-700 text-white rounded-lg px-3 py-3 font-semibold">
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
