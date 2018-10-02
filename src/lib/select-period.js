
import { Modal } from './Modal'
import React, { Component } from 'react';
import { SvgDateRange } from './Svg'
import { PeriodField, BtnSpin } from 'material-inputfield';

class SelectPeriod extends Component {

    constructor(props) {
        super(props)

        this.state = {
            openModal: !!props.isActive || false,
            dateFrom: props.dateFrom || new Date(),
            dateTo: props.dateTo || new Date(),
            //openModal: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        nextProps.isActive !== undefined && this.setState({ openModal: !!nextProps.isActive })
    }

    _ref = (elem) => {
        if (!!elem) {
            if (elem.offsetParent.offsetParent) {
                var {
                    clientWidth,
                    clientHeight,
                    offsetLeft,
                    offsetTop,
                    offsetHeight,
                    offsetWidth,
                } = elem.offsetParent;
                offsetTop += elem.offsetTop
                offsetLeft += elem.offsetLeft
            }
            else {
                var {
                    clientWidth,
                    clientHeight,
                    offsetLeft,
                    offsetTop,
                    offsetHeight,
                    offsetWidth,
                } = elem;
            }
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
        console.log(period)
        this.setState({ ...period, openModal: !this.state.openModal,  })
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

    _renderSpinButton = () => <div>
        {this.props.isButtonActive && <BtnSpin onClick={this._btnCalendarOnClick}
        ><SvgDateRange /></BtnSpin>}
        {this._ModalPeriod()}
    </div>

    render() {
        return <div style={{ display: 'flex', justifyContent: 'center' }}>

            {this.props.isField ?
                <PeriodField outlined onSpinButtons name='period' label='Период' dateFrom={this.state.dateFrom} dateTo={this.state.dateTo} extSpinButton={this._renderSpinButton} /> :
                this._renderSpinButton()
            }
        </div>
    }
}

export default SelectPeriod;