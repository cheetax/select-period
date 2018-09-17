import React from 'react'
import SelectPeriodCore from './select-period-core';
import './Modal.css'
import './select-period-core.css';

const ClassModal = ({ openModal }) => openModal ? 'modal-dialog-button active' : 'modal-dialog-button'

const ClassModalOverlay = ({ openModal }) => '' //openModal ? 'modal-dialog-overlay active' : 'modal-dialog-overlay'

const positiveNum = (num) => num > 0 ? 0 : - num

const _ref = (elem) => {
    if (elem) {
        console.log(elem)
        let {
            clientWidth,
            clientHeight,
        } = elem;
        if (this.elemSize) {
            var _left = positiveNum(this.elemSize.innerWidth - this.elemSize.offsetLeft - clientWidth)
        }
        console.log(this.elemSize)
    }
}

export const Modal = (props) => {
    const { openModal } = props;
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
            <div ref={_ref.bind(props)} style={{ transformTrigin: 'left top' }} className={ClassModal({ openModal })} >
                <SelectPeriodCore {...props} />
            </div>
        </div>

    </div>
}