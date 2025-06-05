import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { predefinedChatResponses } from '../data';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { type: 'bot', text: predefinedChatResponses.greeting }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory([...chatHistory, { type: 'user', text: message }]);
    
    // Process the message and get a response
    const response = getResponse(message);
    
    // Simulate typing delay
    setTimeout(() => {
      setChatHistory(prev => [...prev, { type: 'bot', text: response }]);
    }, 500);
    
    setMessage('');
  };

  const getResponse = (msg: string): string => {
    const lowercaseMsg = msg.toLowerCase();
    
    if (lowercaseMsg.includes('education') || lowercaseMsg.includes('study') || lowercaseMsg.includes('school') || lowercaseMsg.includes('college')) {
      return predefinedChatResponses.education;
    } else if (lowercaseMsg.includes('skill') || lowercaseMsg.includes('know') || lowercaseMsg.includes('able')) {
      return predefinedChatResponses.skills;
    } else if (lowercaseMsg.includes('project') || lowercaseMsg.includes('work') || lowercaseMsg.includes('portfolio')) {
      return predefinedChatResponses.projects;
    } else if (lowercaseMsg.includes('experience') || lowercaseMsg.includes('job') || lowercaseMsg.includes('career')) {
      return predefinedChatResponses.experience;
    } else if (lowercaseMsg.includes('achievement') || lowercaseMsg.includes('award') || lowercaseMsg.includes('recognition')) {
      return predefinedChatResponses.achievements;
    } else if (lowercaseMsg.includes('contact') || lowercaseMsg.includes('email') || lowercaseMsg.includes('reach')) {
      return predefinedChatResponses.contact;
    } else if (lowercaseMsg.includes('hello') || lowercaseMsg.includes('hi') || lowercaseMsg.includes('hey')) {
      return predefinedChatResponses.greeting;
    } else {
      return predefinedChatResponses.default;
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-neon-blue hover:bg-neon-blue/80 text-white p-4 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
          aria-label="Open Chat"
        >
          <MessageSquare size={24} />
        </button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-20 right-4 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-dark-200 rounded-lg shadow-xl overflow-hidden z-50 border border-gray-800 flex flex-col"
          >
            {/* Chat Header */}
            <div className="p-4 bg-dark-100 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="text-neon-blue" size={20} />
                <h3 className="font-semibold text-white">Resume Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      chat.type === 'user'
                        ? 'bg-neon-blue/20 text-white'
                        : 'bg-dark-100 text-gray-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      {chat.type === 'bot' ? (
                        <Bot size={16} className="text-neon-blue" />
                      ) : (
                        <User size={16} className="text-neon-pink" />
                      )}
                      <span className="text-xs font-medium">
                        {chat.type === 'user' ? 'You' : 'Assistant'}
                      </span>
                    </div>
                    <p className="text-sm">{chat.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 bg-dark-100">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about Kundan's resume..."
                  className="flex-1 bg-dark-300 text-white placeholder-gray-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
                <button
                  type="submit"
                  className="bg-neon-blue hover:bg-neon-blue/80 text-white p-2 rounded-md transition-colors"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;