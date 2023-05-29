import React, { useState } from 'react';
import "./faq.css"

const FAQComponent = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqData = [
    {
      question: 'How can I open a bank account?',
      answer: 'To open a bank account, you need to visit one of our branches and provide the required documents such as identification, proof of address, and other necessary information. Our staff will guide you through the account opening process.',
    },
    {
      question: 'What are the interest rates for savings accounts?',
      answer: 'Our bank offers competitive interest rates for savings accounts. The exact rates may vary based on the type of account and the current market conditions. We recommend visiting our website or contacting our customer support for the most up-to-date information on interest rates.',
    },
    {
      question: 'Can I apply for a loan online?',
      answer: 'Yes, we provide online loan application services. You can visit our website and fill out the loan application form. Once submitted, our loan department will review your application and get back to you with further instructions.',
    },
    // Add more FAQ items as needed
  ];

  const handleQuestionClick = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null); 
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <div className="faq">
      <div className="faq-title">
        Frequently Asked Questions
      </div>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="question" >
            {item.question}
          </div>
            <div className="answer">
                {item.answer}
            </div>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
