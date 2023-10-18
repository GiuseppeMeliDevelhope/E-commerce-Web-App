import React, { useState, useEffect, useContext } from "react";
import Loader from "../Components/Loader";
import { CartContext } from "../Contexts/CartContext";
import { ProductContext } from "../Contexts/ProductContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function FinalPayment() {
  const { products } = useContext(ProductContext);
  const { cart } = useContext(CartContext);
  const { total } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const { method } = useParams();

  const openPopUp = () => {
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  const calculateDiscount = (cart) => {
    if (!cart) {
      return 0;
    }
    if (cart.length >= 3) {
      const sortedCart = [...cart].sort((a, b) => a.price - b.price);
      const discount = sortedCart[0].price + sortedCart[1].price;
      if (total >= 1000 && cart.length >= 3) {
        return discount;
      }
    }
    return 0;
  };

  const calculateTotal = () => {
    let newTotal = total - calculateDiscount(cart);
    if (method === "payment") {
      newTotal += 10.0;
    }
    return newTotal.toFixed(2);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const calculateEstimatedDeliveryDate = () => {
    if (method === "shipping") {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 2);
      const estimatedDate = new Date(currentDate);
      estimatedDate.setDate(estimatedDate.getDate() + 4);
      return estimatedDate.toDateString();
    } else if (method === "payment") {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 7);
      const estimatedDate = new Date(currentDate);
      estimatedDate.setDate(estimatedDate.getDate() + 11);
      return estimatedDate.toDateString();
    }
  };

  const estimatedDeliveryDate = calculateEstimatedDeliveryDate(method);

  const productsInCart = products.filter((product) =>
    cart.find((item) => item.id === product.id)
  );
  console.log(productsInCart);

  return (
    <>
      {loading && <Loader />}
      {
        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
          <div className="container mx-auto">
            <div className="flex flex-col mt-3 items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
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
                      <a
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                        href="/"
                      >
                        3
                      </a>
                      <span className="font-semibold text-gray-500">
                        Complete Order
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
              <div className="px-4 pt-8">
                <p className="text-xl font-medium">Order Summary</p>
                <p className="text-gray-400">Check your items.</p>
                <div className=" flex flex-col mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 mr-10">
                  <div className="flex flex-col rounded-lg bg-white ">
                    <div className="w-[200px] mx-auto flex justify-center items-center">
                      <div className="overflow-y-auto max-h-[400px]">
                        {productsInCart.map((product) => (
                          <div
                            key={product.id}
                            className="flex flex-col rounded-lg bg-white mb-4 gap-4 p-2"
                          >
                            <div className="w-[200px] mx-auto flex justify-center  items-center">
                              <img
                                className="max-w-[200px] h-[200px]"
                                src={product.image}
                                alt=""
                              />
                            </div>
                            <div className="flex flex-row justify-center items-center ">
                              {" "}
                              {product.title}{" "}
                            </div>
                            <div className=" w-[250px] h-[1px] bg-gray-200"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-lg font-medium">Shipping Methods</p>
                <form className="mt-5 grid gap-6">
                  <div className="relative">
                    {method === "payment" ? (
                      <input
                        className="peer hidden"
                        id="radio_1"
                        type="radio"
                        name="radio"
                        checked
                      />
                    ) : (
                      <input
                        className="peer hidden"
                        id="radio_1"
                        type="radio"
                        name="radio"
                        disabled
                      />
                    )}
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      for="radio_1"
                    >
                      <img
                        className="w-14 object-contain"
                        src="/images/naorrAeygcJzX0SyNI4Y0.png"
                        alt=""
                      />
                      <div className="ml-5">
                        <span className="mt-2 font-semibold">DHL Delivery</span>
                        <p className="text-slate-500 text-sm leading-6">
                          Delivery: 7-11 Days
                          <span className="ml-10">+10,00€</span>
                        </p>
                      </div>
                    </label>
                  </div>
                  <div className="relative">
                    {method === "shipping" ? (
                      <input
                        className="peer hidden"
                        id="radio_2"
                        type="radio"
                        name="radio"
                        checked
                      />
                    ) : (
                      <input
                        className="peer hidden"
                        id="radio_2"
                        type="radio"
                        name="radio"
                        disabled
                      />
                    )}
                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      for="radio_2"
                    >
                      <img
                        className="w-14 object-contain"
                        src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                        alt=""
                      />
                      <div className="ml-5">
                        <span className="mt-2 font-semibold">
                          FedEx Delivery
                        </span>
                        <p className="text-slate-500 text-sm leading-6">
                          Delivery: 2-4 Days
                          <span className="ml-10">+0,00€</span>
                        </p>
                      </div>
                    </label>
                  </div>
                </form>
              </div>
              <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                <p className="text-xl font-medium">Payment Details</p>
                <p className="text-gray-400">Your orders list</p>

                <div className="max-h-[400px] overflow-y-auto cursor-pointer ">
                  {productsInCart.map((product) => (
                    <div
                      key={product.id}
                      className="flex flex-col  justify-center h-[60px] rounded-lg  mb-4 p-2 border-[0.1px] "
                    >
                      <span>
                        {product.title}: {product.price}€
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Subtotal
                    </p>
                    <p className="font-semibold text-gray-900">
                      {" "}
                      {parseFloat(total).toFixed(2)}€
                    </p>
                  </div>
                  {calculateDiscount(cart) > 0 && ( // Verifica se c'è uno sconto applicato
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Discount
                      </p>
                      <p className="font-semibold text-red-600">
                        -{parseFloat(calculateDiscount(cart)).toFixed(2)}€
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Shipping
                    </p>
                    <p className="font-semibold text-gray-900">
                      +{method === "payment" ? "10.00" : "0.00"}€
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm mb-5 font-medium text-gray-900">
                    Total
                  </p>
                  <p className="text-2xl mb-5 font-semibold text-gray-900">
                    {calculateTotal()}€
                  </p>
                </div>
              </div>

              <button
                onClick={openPopUp}
                className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
              >
                Place Order
              </button>

              {showPopUp && (
                <div className="fixed flex justify-center items-center bottom-5  left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                  <div className="relative w-full max-w-2xl max-h-full">
                    <div className="flex flex-col justify-center items-centerrelative bg-gray-900 rounded-lg shadow dark:bg-gray-900 ">
                      <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="mt-4 flex justify-centertext-xl font-semibold text-white dark:text-white mb-2 ">
                          Are you sure you want to proceed and succesfully
                          complete the payment?
                        </h3>
                      </div>

                      <div className="flex justify-center items-center flex-col">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2038/2038792.png"
                          alt="img"
                          className="w-[200px] mt-5 mb-5 mr-8 "
                        />
                        <div className="font-semibold text-white text-[25px]">
                          {parseFloat(total).toFixed(2)}€
                        </div>
                      </div>

                      <div className="flex items-center p-6 space-x-2  border-gray-200 rounded-b dark:border-gray-600">
                        <Link
                          to={`/thankyou?source=${method}&estimatedDate=${estimatedDeliveryDate}`}
                          className="px-12 flex flex-row justify-center items-center  text-white font-semibold py-3"
                        >
                          <button
                            type="button"
                            className="text-white bg-green-400  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:text-black "
                          >
                            I accept
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="text-gray-500 bg-white hover:bg-red-600 focus:ring-4 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-gray-600"
                          onClick={closePopUp}
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default FinalPayment;
