import { useEffect, useState } from "react";
import AffiliateCards from "../../components/affiliate/AffiliateCards";
import TabNavigation from "../../components/affiliate/TabNavigation";
import TopAffiliateDoctors from "../../components/affiliate/TopAffiliateDoctors";
import TopAffiliateProducts from "../../components/affiliate/TopAffiliateProducts";
import Loader from "../../components/Loader";
import { apiUrl } from "../../data";

const AffiliateDashboard = () => {
  const [activeTab, setActiveTab] = useState("today");
  const [loading, setLoading] = useState(true);
  const changeTab = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setLoading(true);
    }
  };

  const [statsData, setStatsData] = useState([]);

  console.log(statsData);

  const fetchStats = async (activeTab) => {
    try {
      const response = await fetch(apiUrl + "/affiliate/dashboard/stats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ period: activeTab }),
      });
      const data = await response.json();
      setStatsData(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStats(activeTab);
  }, [activeTab]);

  if (loading) {
    return (
      <>
        <TabNavigation changeTab={changeTab} activeTab={activeTab} />
        <Loader />
      </>
    );
  }
  return (
    <div className="w-auto">
      <TabNavigation changeTab={changeTab} activeTab={activeTab} />
      <AffiliateCards data={statsData[0]} activeTab={activeTab} />
      <div className="flex gap-[10%] p-3">
        <div className="w-[45%]">
          <TopAffiliateDoctors doctors={statsData[1]?.topDoctors
} />
        </div>
        <div className="w-[45%]">
          <TopAffiliateProducts products={statsData[1]?.topProducts} />
        </div>
      </div>
    </div>
  );
};

export default AffiliateDashboard;
