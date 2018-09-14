
import { Modal } from './Modal'
import React, { Component } from 'react';


class SelectPeriod extends Component {

    constructor(props) {
        super(props)
        this.state = {
            openModalCalendar: !!props.isActive || false,
        }
    }

    componentWillReceiveProps(nextProps) {
        nextProps.isActive !== undefined && this.setState({ openModalCalendar: !!nextProps.isActive })
    }

    _ref = (elem) => {
        let {
            clientWidth,
            clientHeight,
        } = elem
        console.log(elem)
    }

    
    _ModalPeriod = () => <div style={{ position: 'relative', color: 'initial' }} >
        <Modal
            {...this.props}
            openModal={this.state.openModalCalendar}
            onSelect={(date) => {
                if (!this.props.isActive) {
                    this.setState({ openModalCalendar: false })
                }
                this.props.onSelect && this.props.onSelect(date)
            }}
            onClick={() => {
                !this.props.isActive && this.setState({ openModalCalendar: false })
            }}
        />
    </div>

    render() {
        return <div ref={this._ref} style={{ display: 'flex', justifyContent: 'center' }}>{this._ModalPeriod()}</div>
    }
}

export default SelectPeriod;