import DoctorCommission from "../../components/commission/DoctorCommission"
import ProductCommission from "../../components/commission/ProductCommission"

const Commission = () => {
  return (
    <div className="flex flex-col m-3">
        <div className="flex justify-end">
            <button className="bg-[#3A643B] text-white py-2 px-10 rounded-lg font-medium text-sm ">Add Special Commission</button>
        </div>
        <ProductCommission />
        <DoctorCommission />
        <div className=""></div>
    </div>
  )
}

export default Commission