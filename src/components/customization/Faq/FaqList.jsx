import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import searchicon from "../../../assets/commission/search.svg";
import refershicon from "../../../assets/commission/refresh.svg";
import downloadicon from "../../../assets/commission/download.svg";
import filter from "../../../assets/commission/filter.svg";
import previous from "../../../assets/commission/previous-page.svg";
import next from "../../../assets/commission/next-page.svg";
import Loader from "../../Loader";
import { apiUrl } from "../../../data.js";

const FaqList = ({ activeFaq, setAddNewPage }) => {
  const [type, setType] = useState("consultation");
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [from, setFrom] = useState(0);

  const HandleNewFaq = () => {
    setAddNewPage(true);
  }

  // Fetch FAQs from database
  const fetchFaqs = async (from) => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl + "/customization/faqs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userType: activeFaq,
          category: type,
          skipto: from
        })
      });
      const data = await response.json();
        setFaqs(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const items = Array.from(faqs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFaqs(items);
  };
  
  useEffect(() => {
    fetchFaqs(from);
  }, [activeFaq, type, from]);


  if (isLoading) return <Loader />;

  return (
    <div className="bg-white rounded-lg py-6 shadow-lg/4 my-4">
      <div className="flex items-center justify-between mb-6 px-6">
        <div className="flex items-center space-x-3">
          <h2 className="text-sm font-medium text-black pr-4">FAQ List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              className="pl-7 pr-4 py-2 bg-[#2E37A40D] rounded-xl text-sm font-medium w-64 placeholder-[#28643B80] focus:outline-none focus:ring-1 focus:ring-transparent focus:border-transparent"
            />
            <img
              src={searchicon}
              alt="Search Icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </div>
          <button className="p-2 bg-[#2E37A40D] rounded-xl hover:bg-gray-50">
            <img src={refershicon} onClick={() => fetchFaqs(from)} className="text-gray-600" />
          </button>
        </div>
        <div className="flex justify-end items-center gap-3">
          <button 
            onClick={HandleNewFaq}
            className="bg-[#3A643B] text-white py-2 px-6 rounded-lg font-medium text-sm"
          >
            Add New FAQ
          </button>
          <button className="p-2 bg-[#2E37A40D] rounded-xl hover:bg-gray-50">
            <img src={filter} className="text-gray-600" />
          </button>
          <button className="p-2 bg-[#2E37A40D] rounded-xl hover:bg-gray-50">
            <img src={downloadicon} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex justify-evenly items-center text-[#9999A3] font-medium py-4">
        <div
          onClick={() => setType("consultation")}
          className={`cursor-pointer ${
            type === "consultation"
              ? "text-[#28643B] underline underline-offset-8 decoration-2"
              : ""
          }`}
        >
          Consultation
        </div>
        <div
          onClick={() => setType("shop")}
          className={`cursor-pointer ${
            type === "shop"
              ? "text-[#28643B] underline underline-offset-8 decoration-2"
              : ""
          }`}
        >
          Shop
        </div>
        <div
          onClick={() => setType("wallet")}
          className={`cursor-pointer ${
            type === "wallet"
              ? "text-[#28643B] underline underline-offset-8 decoration-2"
              : ""
          }`}
        >
          Wallet
        </div>
        <div
          onClick={() => setType("forum")}
          className={`cursor-pointer ${
            type === "forum"
              ? "text-[#28643B] underline underline-offset-8 decoration-2"
              : ""
          }`}
        >
          Forum
        </div>
        <div
          onClick={() => setType("additional")}
          className={`cursor-pointer ${
            type === "additional"
              ? "text-[#28643B] underline underline-offset-8 decoration-2"
              : ""
          }`}
        >
          Additional
        </div>
      </div>

      <div className="overflow-x-auto border-y border-gray-100">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="faqs">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <div className="w-full">
                  <div className="w-full">
                    {faqs.map((faq, index) => (
                      <Draggable key={faq._id} draggableId={faq._id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            key={index}
                            className={`border-y-2 border-gray-100 flex  ${
                              snapshot.isDragging ? 'shadow-lg bg-blue-50' : ''
                            }`}
                          >
                            <div className="py-4 px-4">
                                <div
                                  {...provided.dragHandleProps}
                                  className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600"
                                >
                                  ⋮⋮
                                </div>
                            </div>
                            <input type="checkbox" />
                            <div className="py-4 px-4">
                              <span className="text-sm text-[#414141] font-medium">
                                {faq.question}
                              </span>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className="flex items-center justify-between mt-6 px-6">
        <span className="text-xs text-gray-500">Rows per page: 7</span>
        <div className="flex items-center space-x-2">
          {from < 7 ? (
            <button className="p-1">
              <img src={previous} alt="Previous Icon" />
            </button>
          ) : (
            <button onClick={() => setFrom(from - 7)} className="p-1">
              <img src={previous} alt="Previous Icon" />
            </button>
          )}
          <span className="px-3 py-1 bg-gray-100 rounded text-sm text-black">
            {from / 7 + 1}
          </span>
          {faqs.length >= 7 ? (
            <button onClick={() => setFrom(from + 7)} className="p-1">
              <img src={next} alt="Next Icon" />
            </button>
          ) : (
            <button className="p-1">
              <img src={next} alt="Next Icon" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqList;