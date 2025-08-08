import { useEffect, useRef, useState } from "react";
import { apiUrl } from "../../data.js";
import Loader from "../../components/Loader.jsx";
import { useNavigate } from "react-router";

const SpecialCommission = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const product = useRef();
  const productPercentage = useRef();
  const doctorPercentage = useRef();
  const doctor = useRef();

  const fetchDoctorsAndProducts = async () => {
    try {
      const response = await fetch(apiUrl + "/affiliate/doctorsandproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };



  useEffect(() => {
    fetchDoctorsAndProducts();
  }, []);


  if (isLoading) return <Loader />;

  const handleNewSpecialCommission = async() => {
    if (
      product.current.value &&
      productPercentage.current.value &&
      doctor.current.value &&
      doctorPercentage.current.value
    ) {
      const newSpecialCommission = {
        productId: product.current.value,
        productCommission: parseInt(productPercentage.current.value),
        doctorId: doctor.current.value,
        doctorCommission: parseInt(doctorPercentage.current.value),
      };
      try {
        await fetch(apiUrl + "/affiliate/commission/specialcommissions/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newSpecialCommission),
        });
            navigate("/affiliate/commission");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-6 mx-2">
      <h2 className="font-medium text-[#333448] text-md">
        Add Special Commission
      </h2>
      <div className="bg-white rounded-xl w-full shadow-sm/4 px-6 py-8 flex flex-col gap-8">
        <div className="flex justify-between gap-3">
          <div className="w-full relative">
            <select
              id="product"
              ref={product}
              className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
            >
              <option value="">Please Select a Product</option>
              {data?.products?.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))}
            </select>
            <label
              htmlFor="product"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Product
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
          <div className="w-full relative">
            <select
              id="productPercentage"
              ref={productPercentage}
              className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
            >
              <option value="">Please select a Percentage</option>
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
              <option value="50">50%</option>
              <option value="60">60%</option>
              <option value="70">70%</option>
              <option value="80">80%</option>
              <option value="90">90%</option>
              <option value="100">100%</option>
            </select>
            <label
              htmlFor="productPercentage"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Percentage
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <div className="w-full relative">
            <select
              id="doctor"
              ref={doctor}
              className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
            >
              <option value="">Please Select a Doctor</option>
              {data?.doctors?.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  {doctor.name}
                </option>
              ))}
            </select>
            <label
              htmlFor="doctor"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Doctor
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
          <div className="w-full relative">
            <select
              id="doctorPercentage"
              ref={doctorPercentage}
              className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
            >
              <option value="">Please select a Percentage</option>
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="40">40%</option>
              <option value="50">50%</option>
              <option value="60">60%</option>
              <option value="70">70%</option>
              <option value="80">80%</option>
              <option value="90">90%</option>
              <option value="100">100%</option>
            </select>
            <label
              htmlFor="doctorPercentage"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Percentage
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
        </div>
        <div className="flex justify-end ">
          <button
            onClick={handleNewSpecialCommission}
            className="bg-[#3A643B] text-white py-2 px-10 rounded-lg font-medium text-sm "
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialCommission;
