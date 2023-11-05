import React from "react";
import './Chatbot.scss'

const ChatbotPage = () => (
    <div className="chatbot-wrapper">
        <div className="sidebar">
            <h3 className="title is-3">AI Chatbot</h3>
            <textarea className="textarea" placeholder="Type your message..." rows="20"></textarea>

            <nav className="panel">
                <p className="panel-heading">
                    Repositories
                </p>
                <div className="panel-block">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Search"/>
                        <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true"></i>
      </span>
                    </p>
                </div>
                <p className="panel-tabs">
                    <a className="is-active">All</a>
                    <a>Public</a>
                    <a>Private</a>
                    <a>Sources</a>
                    <a>Forks</a>
                </p>
                <a className="panel-block is-active">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
                    bulma
                </a>
                <a className="panel-block">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
                    marksheet
                </a>
                <a className="panel-block">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
                    minireset.css
                </a>
                <a className="panel-block">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
                    jgthms.github.io
                </a>
                <a className="panel-block">
    <span className="panel-icon">
      <i className="fas fa-code-branch" aria-hidden="true"></i>
    </span>
                    daniellowtw/infboard
                </a>
                <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
                    mojs
                </a>
                <label class="panel-block">
                    <input type="checkbox"/>
                    remember me
                </label>
                <div class="panel-block">
                    <button class="button is-link is-outlined is-fullwidth">
                        Reset all filters
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
