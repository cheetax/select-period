import React, { Component } from 'react'
import SelectPeriodCore from './select-period-core';
import './Modal.css'
import './select-period-core.css';

const ClassModal = ({ openModal }) => openModal ? 'modal-dialog-button active' : 'modal-dialog-button'

const ClassModalOverlay = ({ openModal }) => '' //openModal ? 'modal-dialog-overlay active' : 'modal-dialog-overlay'

const positiveNum = (num) => num > 0 ? 0 : num

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

    componentWillReceiveProps(nextProps) {
        console.log(this.state.elem)
        this.setState()
    }

    componentDidUpdate(prevProps, prevState, snap) {
        if (!prevState.elem) this.forceUpdate()
        console.log(this.state.elem)
    }
    
    _style = () => {
        var style = this.state.elem && window.getComputedStyle(this.state.elem);
        var margin = (+style.marginLeft.replace('px','')) + (+style.marginRight.replace('px',''));
        return { right: (this.props.elemSize) && positiveNum(this.props.elemSize.innerWidth - this.props.elemSize.offsetLeft - this.state.elem.clientWidth - margin) + 'px' || 0 }
    }
    render() {
        const openModal = this.props.openModal
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
                <div ref={this._ref} style={this._style()} className={ClassModal({ openModal })} >
                    <SelectPeriodCore {...this.props} />
                </div>
            </div>

        </div>
    }
}
