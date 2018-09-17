import React from 'react'
import SelectPeriodCore from './select-period-core';
import './Modal.css'
import './select-period-core.css';

const ClassModal = ({ openModal }) => openModal ? 'modal-dialog-button active' : 'modal-dialog-button'

const ClassModalOverlay = ({ openModal }) => '' //openModal ? 'modal-dialog-overlay active' : 'modal-dialog-overlay'

const positiveNum = (num) => num > 0 ? 0 : - num



export const Modal = (props) => {
    const { openModal } = props;

    const _ref = (elem) => {
        if (elem) {
            console.log(elem)
            let {
                clientWidth,
                clientHeight,
            } = elem;
            let _left = (props.elemSize)  && positiveNum(props.elemSize.innerWidth - props.elemSize.offsetLeft - clientWidth) || 0
            console.log(_left)
        }
    }

    return <div>
        {/* {(openModal) ? <div style={{
            position: 'fixed',
            background: 'black',
            opacity: '0',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '999',
        }}
            onClick={props.onClick} /> : null} */}
        <div className={ClassModalOverlay({ openModal })} >
            <div ref={_ref} style={{ transformTrigin: 'left top' }} className={ClassModal({ openModal })} >
                <SelectPeriodCore {...props} />
            </div>
        </div>

    </div>
}