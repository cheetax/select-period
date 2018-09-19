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

    componentWillReceiveProps(nextProps) {
        //this.forceUpdate()
    }

    componentDidUpdate(prevProps, prevState, snap) {
        var elem = this.state.elem.clientWidth;
        var style = this.state.elem && window.getComputedStyle(this.state.elem);
        var margin = style && (+style.marginLeft.replace('px', '')) + (+style.marginRight.replace('px', '')) || 0;
        //let right = (this.props.elemSize) && positiveNum(this.props.elemSize.innerWidth - this.props.elemSize.offsetLeft - this.state.elem.clientWidth - margin) + 'px' || 0
        let right = (this.props.elemSize) && positiveNum(this.props.elemSize.offsetLeft - this.state.elem.clientWidth) + 'px' || 0
        //this.state.margin !== margin && this.setState({ margin })
        this.state.right !== right && this.setState({ right })
       // this.state.elem.clientWidth !== elem && this.state({elem: this.state.elem.clientWidth})
    }

    _style = () => {
        return { left: this.state.right }
    }

    render() {
        const openModal = this.props.openModal
        console.log(this.state.right)
        //var right = { right: (this.props.elemSize) && positiveNum(this.props.elemSize.innerWidth - this.props.elemSize.offsetLeft - this.state.elem.clientWidth - this.state.margin) + 'px' || 0 }

        return <div>
            <div className={ClassModalOverlay({ openModal })} >
                <div ref={this._ref} style={this._style()} className={ClassModal({ openModal })} >
                    <SelectPeriodCore {...this.props} />
                </div>
            </div>

        </div>
    }
}
