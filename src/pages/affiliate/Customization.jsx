import { useState } from 'react'
import CustomizationNavigation from '../../components/customization/CustomizationNavigation';
import Faq from '../../components/customization/Faq';

const Customization = () => {
    const [activeTab, setActiveTab] = useState("faq");
  return (
    <div className='flex flex-col mx-1 my-3'>
        <CustomizationNavigation changeTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "faq" && <Faq />}
    </div>
  )
}

export default Customization