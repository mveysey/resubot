import React from 'react';
import ReactDom from 'react-dom';
import './Modal.scss';

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
};

const Modal = ({open, onClose, onConfirm, title, width, height}) => {
    if (!open) return null;

    // Configurable modal styles based on props
    const MODAL_STYLES = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'var(--bg-color)',
        zIndex: 1000,
        borderRadius: '10px',
        // Use the width and height props
        height: height || '500px', // Default height if not provided
        width: width || '850px', // Default width if not provided
    };

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} onClick={onClose}/>
            <div className="modal-card" style={MODAL_STYLES}>
                <section className="modal-card-body is-align-content-center">
                    <label className="has-text-weight-bold sub-title is-4"
                           style={{display: 'flex', justifyContent: 'center'}}>{title}</label>
                    <div className="modal-body">
                        {/* Content goes here */}
                    </div>
                    <div className="field is-grouped"
                         style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                        <p className="control">
                            <button className="button is-success" style={{width: '200px'}} onClick={onConfirm}>
                                Confirm
                            </button>
                        </p>
                        <p className="control">
                            <button className="button is-danger" style={{width: '200px'}} onClick={onClose}>
                                Close
                            </button>
                        </p>
                    </div>
                </section>
            </div>
        </>,
        document.getElementById('portal')
    );
};

export default Modal;