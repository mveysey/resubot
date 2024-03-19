import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chatbot.scss";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const userMessage = { role: 'user', content: input };
    const systemMessage = { role: "system", content: 'Be as brief as possible' };
    
    const messagesForBackend = [...messages, systemMessage, userMessage]; // Include systemMessage for the backend
  
    try {
      const response = await axios.post('http://localhost:4000/api/chatbot/create', { messages: messagesForBackend });
      const aiMessage = { role: 'assistant', content: response.data.message };
  
      setMessages(prevMessages => [...prevMessages, userMessage, aiMessage]); // Only add userMessage and aiMessage to state
    } catch (error) {
      console.error('Error:', error);
    }
  
    setInput(''); // Clear input field
  };

  const startNewSession = () => {
    setMessages([]); // Clears the chat history
  };
  

return (
    <div className="chatbot-wrapper">
        <div className="sidebar">
            <h3 className="title is-3">AI Chatbot</h3>

            {/*Chatbot Panel*/}
            <nav className="panel">
                <p className="panel-heading">Chatbot Tools</p>
                <p className="panel-tabs">
                    <a className="is-active">GPT3.5</a>
                    <a>GPT4.0</a>
                    <a>GPT3.5 Turbo</a>
                    <a>Dell-E</a>
                </p>
                <a className="panel-block is-active">
                  <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                  </span>
                    Skill Analyzer
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                  </span>
                    Web Support
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                  </span>
                    Resume Analyzer
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                  </span>
                    CV Analyzer
                </a>
                <a className="panel-block">
                  <span className="panel-icon">
                    <i className="fas fa-plus" aria-hidden="true"></i>
                  </span>
                    Custom Prompts
                </a>


                <div className="panel-block">
                    <button className="button is-link is-outlined is-fullwidth">
                        Reset Configurations
                    </button>
                </div>

                <div className="panel-block">
                    <button className="button is-danger is-fullwidth" onClick={startNewSession}>
                        New AI Session
                    </button>
                </div>
            </nav>
        </div>
        <div className="chat-container">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.role}-message`}>
            {msg.content}
          </div>
        ))}

            {/* Placeholder chat messages */}
            {/* <div className="chat-message user-message">User message 1</div>
            <div className="chat-message ai-message">AI response 1</div>
            <div className="chat-message user-message">User message 2</div>
            <div className="chat-message ai-message">AI response 2</div> */}
            {/* Add more chat messages here */}

            <textarea
                className="textarea"
                placeholder="Type your message..."
                rows="4"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></textarea>
            {/* <button onClick={sendMessage}>Send</button> */}
            <button onClick={sendMessage} className="send-button">Send</button>

        </div>
    </div>
);
}; 

export default ChatbotPage;
