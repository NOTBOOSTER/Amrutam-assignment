import React from "react";
import { apiUrl } from "../../../data.js";

const NewFaq = ({
  formData,
  setFormData,
  setShowReplaceModal,
  setAddNewPage,
  setFaqs,
  defaultFaq,
  newFaq,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleClear = () => {
    setFormData(defaultFaq);
  };

  const handleAddNew = async () => {
    if (formData.question && formData.answer && formData.title) {
      if (formData.homepage == 1) {
        const data = await fetchFaqs(formData.platform, formData.title);
        if (data.length >= 7) {
          setShowReplaceModal(true);
          setAddNewPage(false);
        } else {
          const faqData = {
            question: formData.question,
            answer: formData.answer,
            category: formData.title,
            userType: formData.platform,
            homepage: formData.homepage == 1 ? true : false,
            order: data.length + 1,
          };
          await newFaq(faqData);
          setAddNewPage(false);
        }
      } else {
        const faqData = {
          question: formData.question,
          answer: formData.answer,
          category: formData.title,
          userType: formData.platform,
          homepage: formData.homepage == 1 ? true : false,
          order: 0,
        };
        await newFaq(faqData);
        setAddNewPage(false);
      }
    }
  };

  const fetchFaqs = async (platform, type) => {
    try {
      const response = await fetch(apiUrl + "/customization/faqs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userType: platform,
          category: type,
          skipto: 0,
        }),
      });
      const data = await response.json();
      await setFaqs(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full rounded-2xl shadow-lg/4 bg-white p-3 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="font-medium text-[#212529]">Add New Faq</div>
      </div>
      <div className="flex flex-col gap-8 my-6">
        <div className="flex gap-8">
          <div className="w-full relative">
            <select
              id="platform"
              name="platform"
              onChange={(e) => handleInputChange(e)}
              className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
              value={formData.platform}
            >
              <option value="consumer">Consumer Web</option>
              <option value="doctor">Doctor Web</option>
            </select>
            <label
              htmlFor="platform"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Select Platform
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
          <div className="w-full relative">
            <select
              id="title"
              name="title"
              onChange={(e) => handleInputChange(e)}
              className="w-full border-2 border-[#2E37A41A] h-10 px-4 text-xs rounded-xl focus:outline-none"
              value={formData.title}
            >
              <option value=""></option>
              <option value="consultation">Consulation</option>
              <option value="shop">Shop</option>
              <option value="wallet">Wallet</option>
              <option value="forum">Forum</option>
              <option value="additional">Additional</option>
            </select>
            <label
              htmlFor="platform"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Select Title
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="radio"
            name="homepage"
            checked={formData.homepage}
            className="w-4 h-4 p-2 accent-[#3A643B]"
            onChange={(e) => handleInputChange(e)}
            value={parseInt(1)}
          ></input>
          <span className="text-[#212529] text-sm font-medium">
            Add to homepage as well
          </span>
        </div>
        <div className="flex gap-3">
          <div className=" w-full relative">
            <textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={(e) => handleInputChange(e)}
              className="w-full border-2 border-[#2E37A41A] h-32 p-4 text-xs rounded-xl focus:outline-none"
              placeholder="Question"
            />
            <label
              htmlFor="question"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Add Question
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
          <div className=" w-full relative">
            <textarea
              id="answer"
              name="answer"
              value={formData.answer}
              onChange={(e) => handleInputChange(e)}
              className="w-full border-2 border-[#2E37A41A] h-32 p-4 text-xs rounded-xl focus:outline-none"
              placeholder="Answer"
            />
            <label
              htmlFor="answer"
              className="text-xs text-[#333448]font-medium absolute -top-2 left-2.5 bg-white px-2"
            >
              Add Answer
              <span className="text-red-500 pl-1">*</span>
            </label>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button
            onClick={handleClear}
            className="bg-[#3334480D] text-[#333448] py-2 px-7 rounded-lg font-medium text-sm mr-3"
          >
            Clear all
          </button>
          <button
            onClick={handleAddNew}
            className="bg-[#3A643B] text-white py-2 px-7 rounded-lg font-medium text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewFaq;
