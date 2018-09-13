import React from 'react'
//import  from './CalendarCore';
import './Modal.css'

const ClassModal = ({ openModal, isButtonActive }) => ((isButtonActive) && ((openModal) ? 'modal-dialog-button active' : 'modal-dialog-button') || ((openModal) ? 'modal-dialog-flex active' : 'modal-dialog-flex'))

const ClassModalOverlay = ({ openModal, isButtonActive }) => ((!isButtonActive) && (openModal ? 'modal-dialog-overlay active' : 'modal-dialog-overlay') || '')

export const Modal = (props) => {
    const { openModal } = props;
    return <div>
        {(openModal && !props.isButtonActive) ? <div style={{
            position: 'fixed',
            background: 'black',
            opacity: '0',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '999',
        }}
            onClick={props.onClick} /> : null}
        <div className={ClassModalOverlay({ openModal, isButtonActive: !!props.isButtonActive })} >
            <div className={ClassModal({ openModal, isButtonActive: !!props.isButtonActive })} >
                <CalendarCore {...props} />
            </div>
        </div>

    </div>
}