import React, { Component } from 'react'
import SelectPeriodCore from './select-period-core';
import './Modal.css'
import './select-period-core.css';

const ClassModal = ({ openModal }) => openModal ? 'modal-dialog-button active' : 'modal-dialog-button'

const ClassModalOverlay = ({ openModal }) => '' //openModal ? 'modal-dialog-overlay active' : 'modal-dialog-overlay'

const positiveNum = (num) => num < 0 ? 0 : num

//export const Modal = (props) => {
export class Modal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clientHeight: 0,
            clientWidth: 0,
            elem: null
        }
    }

    _ref = (elem) => {
        this.setState({ elem })
    }


    componentDidUpdate(prevProps, prevState, snap) {
        let right = (this.props.elemSize) && positiveNum(this.props.elemSize.offsetLeft - this.state.elem.clientWidth) + 'px' || 0
        this.state.right !== right && this.setState({ right })
    }

    _style = () => {
        return {
            left: this.state.right,
            width: '700px',
            height: '600px'
        }
    }

    render() {
        const openModal = this.props.openModal
        return <div>
            <div className={ClassModalOverlay({ openModal })} >
                <div ref={this._ref} style={this._style()} className={ClassModal({ openModal })} >
                    <SelectPeriodCore {...this.props} />
                </div>
            </div>

        </div>
    }
}
