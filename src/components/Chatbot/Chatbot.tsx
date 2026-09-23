"use client";

import { useState, useRef, useEffect } from 'react';
import { faqData } from '@/data/faqs';
import './chatbot.css';

type Message = {
  id: number;
  type: 'bot' | 'user';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      text: "Hi there! 👋 I'm the portfolio assistant. Ask me a question below or choose from the common topics!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleFAQClick = (question: string, answer: string) => {
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: question }]);
    
    // Simulate thinking delay then add bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), type: 'bot', text: answer }]);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: userMsg }]);

    // Simple keyword matching for custom inputs
    setTimeout(() => {
      const lowerInput = userMsg.toLowerCase();
      let foundAnswer = "I'm not sure about that. Please try choosing one of the suggested questions above, or contact me directly for a more detailed answer!";
      
      for (const faq of faqData) {
        // Very basic matching logic
        const keywords = faq.question.toLowerCase().split(' ').filter(word => word.length > 4);
        const match = keywords.some(kw => lowerInput.includes(kw));
        
        if (match || lowerInput.includes(faq.question.toLowerCase())) {
          foundAnswer = faq.answer;
          break;
        }
      }

      setMessages(prev => [...prev, { id: Date.now(), type: 'bot', text: foundAnswer }]);
    }, 800);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {/* Toggle Button */}
      <button 
        className="chatbot-toggle glass" 
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </button>

      {/* Chat Window */}
      <div className="chatbot-window glass">
        <div className="chatbot-header">
          <h3 className="text-accent-gradient">Assistant</h3>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.type}`}>
              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        <div className="chatbot-suggestions">
          {faqData.map((faq, index) => (
            <button 
              key={index} 
              className="suggestion-chip"
              onClick={() => handleFAQClick(faq.question, faq.answer)}
            >
              {faq.question}
            </button>
          ))}
        </div>

        <form className="chatbot-input-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Type a message..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="chatbot-input"
          />
          <button type="submit" className="chatbot-submit" disabled={!inputValue.trim()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>
    </div>
  );
}
