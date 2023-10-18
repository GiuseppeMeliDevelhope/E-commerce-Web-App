import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
import { BsArrowBarRight } from "react-icons/bs";

function ThankYou() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const source = searchParams.get("source");
  const estimatedDeliveryDate = searchParams.get("estimatedDate");

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {
        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
          <div className="container mx-auto">
            <svg
              viewBox="0 0 24 24"
              class="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div class="text-center">
              <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Payment Done!
              </h3>
              <p class="text-gray-600 my-2">
                Thank you for completing your secure online payment.
              </p>
              <p>
                {source === "shipping" || source === "payment"
                  ? `Estimated Delivery Date: ${estimatedDeliveryDate}`
                  : "Have a great day!"}
              </p>

              <div class=" py-10 text-center">
                <Link
                  to="/"
                  class="px-12 flex flex-row justify-center items-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                >
                  <div className="flex flex-row justify-center items-center">
                    Continue Shopping
                    <BsArrowBarRight className="ml-3" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default ThankYou;
