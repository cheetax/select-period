
import { Modal } from './Modal'
import React, { Component } from 'react';
import { SvgDateRange } from './Svg'
import { BtnPeriod } from './BtnSpin'

class SelectPeriod extends Component {

    constructor(props) {
        super(props)
        this.state = {
            openModal: !!props.isActive || false,
            //openModal: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        nextProps.isActive !== undefined && this.setState({ openModal: !!nextProps.isActive })
    }

    _ref = (elem) => {
        if (!!elem) {
            let {
                clientWidth,
                clientHeight,
                offsetLeft,
                offsetTop,
                offsetHeight,
                offsetWidth,
            } = elem;
            let {
                innerWidth,
                innerHeight,
            } = window;
            this.setState({
                elemSize: { clientWidth, clientHeight, offsetLeft, offsetTop, offsetHeight, offsetWidth, innerHeight, innerWidth }
            })
        }
    }

    _refModal = (elem) => {
        //console.log(elem)
    }

    _onSelect = (period) => {
        this.setState({ openModal: !this.state.openModal })
        this.props.onSelect && this.props.onSelect(period)
    }

    _onClose = () => this.setState({ openModal: !this.state.openModal })


    _ModalPeriod = () => this.state.openModal && <div ref={this._ref} style={{ position: 'relative', color: 'initial' }} >
        <Modal ref={this._refModal}
            {...this.props}
            elemSize={this.state.elemSize}
            openModal={this.state.openModal}
            onSelect={this._onSelect}
            onClose={this._onClose}
        />
    </div>

    _btnCalendarOnClick = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }

    _btnCalendar = () => <div>        
        {this.props.isButtonActive && <BtnPeriod onClick={this._btnCalendarOnClick}
        ><SvgDateRange/></BtnPeriod>}
        {this._ModalPeriod()}
    </div>

    render() {
        return <div style={{ display: 'flex', justifyContent: 'center' }}>{this._btnCalendar()}</div>
    }
}

export default SelectPeriod;