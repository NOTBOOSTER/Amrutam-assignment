import { Link } from "react-router";
import DoctorCommission from "../../components/commission/DoctorCommission";
import ProductCommission from "../../components/commission/ProductCommission";
import SpecialCommissionTable from "../../components/commission/SpecialCommissionTable";

const Commission = () => {
  return (
    <div className="flex flex-col m-3">
      <div className="flex justify-end">
        <Link to="/affiliate/commission/Special-Commission">
          <button className="bg-[#3A643B] text-white py-2 px-10 rounded-lg font-medium text-sm ">
            Add Special Commission
          </button>
        </Link>
      </div>
      <ProductCommission />
      <DoctorCommission />
      <SpecialCommissionTable />
    </div>
  );
};

export default Commission;
