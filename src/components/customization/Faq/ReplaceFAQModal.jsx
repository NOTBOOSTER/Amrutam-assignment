import React, { useState } from 'react';

const ReplaceFAQModal = ({ onClose, onReplace, faqs, setFormData, defaultFaq }) => {
  const [step, setStep] = useState(1);
  const [selectedQuestion, setSelectedQuestion] = useState();


  const handleReplaceClick = () => {
    setStep(2);
  };

  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
  };

  const handleFinalReplace = () => {
    if (selectedQuestion) {
      onReplace(selectedQuestion);
      handleClose();
    }
  };

  const handleClose = () => {
    setStep(1);
    setSelectedQuestion('');
    setFormData(defaultFaq);
    onClose();
  };

  const handleCancel = () => {
    if (step === 2) {
      setStep(1);
      setSelectedQuestion('');
    } else {
      handleClose();
    }
  };

  return (
    <div className="h-96 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full mx-4 p-6">
        {step === 1 ? (
          <div className="text-center">
            <p className="text-[#BC0000B2] text-sm mb-8">
              Homepage already has maximum number of FAQ's.
            </p>
            <p className="text-black text-lg font-medium mb-8">
              Would you like to replace it instead ?
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleCancel}
                className="flex-1 px-4 py-2  border-2 border-[#3A643B] text-[#3A643B] rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleReplaceClick}
                className="flex-1 px-4 py-2 text-white rounded-md transition-colors duration-200 font-medium bg-[#3A643B]"
              >
                Replace
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-medium text-black mb-6 text-center">
              Select the question that you would like to replace it with
            </h3>
            <div className="space-y-3 mb-6 max-h-80 overflow-y-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="flex items-center space-x-3 p-3  cursor-pointer border-b-1 border-[#CDCDCD]">
                  <input
                    type="checkbox"
                    id={`question-${index}`}
                    name="selectedQuestion"
                    value={faq.question}
                    checked={selectedQuestion === faq.order}
                    onChange={() => handleQuestionSelect(faq.order)}
                    className="w-4 h-4 accent-[#28643B] border-gray-300"
                  />
                  <label 
                    htmlFor={`question-${index}`}
                    className="flex-1 text-sm text-gray-700 cursor-pointer"
                  >
                    {faq.question}
                  </label>
                </div>
              ))}
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleCancel}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleFinalReplace}
                disabled={!selectedQuestion}
                className={`flex-1 px-4 py-2 text-white rounded-md transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed ${selectedQuestion ? 'bg-[#28643B]' : 'bg-[#9ca3af]'}`}
              >
                Replace
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default ReplaceFAQModal;