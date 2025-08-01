import AffiliateCards from "../../components/affiliate/AffiliateCards";
import TabNavigation from "../../components/affiliate/TabNavigation";
import TopAffiliateDoctors from "../../components/affiliate/TopAffiliateDoctors";
import TopAffiliateProducts from "../../components/affiliate/TopAffiliateProducts";

const AffiliateDashboard = () => {
  return (
    <div className="w-auto">
      <TabNavigation />
      <AffiliateCards />
      <div className="flex gap-[10%] p-3">
        <div className="w-[45%]">
          <TopAffiliateDoctors />
        </div>
        <div className="w-[45%]">
          <TopAffiliateProducts />
        </div>
      </div>
    </div>
  );
};

export default AffiliateDashboard;
