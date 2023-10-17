import React,{useState, useEffect} from "react";
import Loader from "../Components/Loader";

function PaymentMethod () {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => setLoading(false), 2000)
    }, [])
    

    return (
        <>
        {loading && <Loader />}
        {<section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">



            
            </div>
            </section>
              }
            </>
    );
   
}

export default PaymentMethod;