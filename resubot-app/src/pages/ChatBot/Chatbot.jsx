import React from "react";
import "./Chatbot.scss";

const ChatbotPage = () => (
    <div className="chatbot-wrapper">
        <div className="sidebar">
            <h3 className="title is-3">AI Chatbot</h3>
            <textarea
                className="textarea"
                placeholder="Type your message..."
                rows="20"
            ></textarea>

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


                <div class="panel-block">
                    <button class="button is-link is-outlined is-fullwidth">
                        Reset Configurations
                    </button>
                </div>

                <div className="panel-block">
                    <button className="button is-danger is-fullwidth">
                        New AI Session
                    </button>
                </div>
            </nav>
        </div>
        <div className="chat-container">
            {/* Placeholder chat messages */}
            <div className="chat-message user-message">User message 1</div>
            <div className="chat-message ai-message">AI response 1</div>
            <div className="chat-message user-message">User message 2</div>
            <div className="chat-message ai-message">AI response 2</div>
            {/* Add more chat messages here */}
        </div>
    </div>
);

export default ChatbotPage;
