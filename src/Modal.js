import React from 'react'
import SelectPeriodCore from './select-period-core';
import './Modal.css'

const ClassModal = ({ openModal }) => openModal ? 'modal-dialog-button active' : 'modal-dialog-button'

const ClassModalOverlay = ({ openModal }) => openModal ? 'modal-dialog-overlay active' : 'modal-dialog-overlay'

export const Modal = (props) => {
    const { openModal } = props;
    return <div>
        {(openModal) ? <div style={{
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
        <div className={ClassModalOverlay({ openModal })} >
            <div className={ClassModal({ openModal })} >
                <SelectPeriodCore {...props} />
            </div>
        </div>

    </div>
}