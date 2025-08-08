import React, { useState } from "react";
import FaqNavigation from "./Faq/FaqNavigation";
import FaqList from "./Faq/FaqList";
import NewFaq from "./Faq/NewFaq";
import ReplaceFAQModal from "./Faq/ReplaceFAQModal";
import { apiUrl } from "../../data.js";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState("doctor");
  const [faqs, setFaqs] = useState([]);
  const [addNewPage, setAddNewPage] = useState(false);
  const [showReplaceModal, setShowReplaceModal] = useState(false);

  const [formData, setFormData] = useState({
    platform: "consumer",
    title: "",
    question: "",
    answer: "",
    homepage: 0,
    order: 0,
  });

  const defaultFaq = {
    platform: "consumer",
    title: "",
    question: "",
    answer: "",
    homepage: 0,
    order: 0,
  };

  const newFaq = async (data) => {
    try {
      await fetch(apiUrl + "/customization/faqs/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      });
      setFormData(defaultFaq);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleReplace = async (selectedQuestion) => {
    const data = {
      question: formData.question,
      answer: formData.answer,
      category: formData.title,
      userType: formData.platform,
      homepage: (formData.homepage == 1) ? true : false,
      order: selectedQuestion,
    }
    await newFaq(data);
  };

  return (
    <div className="relative m-2">
      {addNewPage ? (
        <NewFaq
          formData={formData}
          setFormData={setFormData}
          setShowReplaceModal={setShowReplaceModal}
          setAddNewPage={setAddNewPage}
          setFaqs={setFaqs}
          defaultFaq={defaultFaq}
          newFaq={newFaq}
        />
      ) : (
        <>
          <FaqNavigation activeFaq={activeFaq} setActiveFaq={setActiveFaq} />
          <FaqList activeFaq={activeFaq} setAddNewPage={setAddNewPage} />
        </>
      )}

      {showReplaceModal && (
        <div className="absolute h-screen bg-[#0000004D] inset-0 flex items-center justify-center z-50">
          <ReplaceFAQModal
            onClose={() => setShowReplaceModal(false)}
            onReplace={handleReplace}
            setFormData={setFormData}
            defaultFaq={defaultFaq}
            faqs={faqs}
          />
        </div>
      )}
    </div>
  );
};

export default Faq;
