import React, { Component } from 'react';
import { Calendar } from 'ch-calendar'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { YearField, MonthField, QuarterField, DateField } from 'material-inputfield';

import 'react-web-tabs/dist/react-web-tabs.css';

import 'material-inputfield/dist/material-inputfield.css';


class SelectPeriodCore extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isActive: props.isActive || true,
            dateFrom: props.dateFrom || new Date(),
            dateTo: props.dateTo || new Date()
        }
    }

    _onChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        })
    }

    _onChangeObject = (obj) => {
        this.setState({
            ...obj
        })
    }

    _setDateTo = (date) => {
        this.setState({
            dateTo: date
        })
    }

    _setDateFrom = (date) => {
        this.setState({
            dateFrom: date
        })
    }

    _selectPeriodWithCalendar = () => {
        const dateFrom = this.state.dateFrom,
            dateTo = this.state.dateTo

        return <div className='modal-flex-row' >

            <div className='modal-flex-column' style={{ margin: '5px', padding: '0 5px 0 0', borderRight: '1px solid #ddd', flex: 'auto' }} >
                <div style={{ margin: '5px 0', }} >Начало периода:</div>
                <Calendar isActive date={dateFrom} onSelect={this._setDateFrom} />
            </div>
            <div className='modal-flex-column' style={{ margin: '5px 5px 5px 0', borderRight: 1, flex: 'auto' }} >
                <div style={{ margin: '5px 0', }}>Конец периода:</div>
                <Calendar isActive date={dateTo} onSelect={this._setDateTo} />
            </div>
        </div>
    }
    
    _selectPeriodWithForm = () => <div className='modal-flex-column' >
        <YearField onSpinButtons outlined spinButtons onChangeObject={this._onChangeObject} name='year' type='number' value={this.state.dateTo} label='Год' />
        <QuarterField onSpinButtons outlined onChangeObject={this._onChangeObject} name='quarter' value={this.state.dateTo} label='Квартал' />
        <MonthField onSpinButtons onCalendarButton outlined onChangeObject={this._onChangeObject} name='month' value={this.state.dateTo} label='Месяц' />
        <DateField onSpinButtons onCalendarButton outlined onChangeObject={this._onChangeObject} name='date' value={this.state.dateTo} label='Дата' />
    </div>


    _tabs = () =>
        <Tabs
            style={{flex: 'auto'}}
            defaultTab="one"
            onChange={(tabId) => { console.log(tabId) }}
        >
            <TabList>
                <Tab tabFor="one">Интервал</Tab>
                <Tab tabFor="two">Период</Tab>
                {/* <Tab tabFor="three">Tab 3</Tab> */}
            </TabList>
            <TabPanel tabId="one">
                <div style={{height: '100%'}} >{this._selectPeriodWithCalendar()}</div>
            </TabPanel>
            <TabPanel tabId="two">
                <div>{this._selectPeriodWithForm()}</div>

            </TabPanel>
            {/* <TabPanel tabId="three">
                <p>Tab 3 content</p>
            </TabPanel> */}
        </Tabs>

    _onAccepted = () => {
        this.setState({ isActive: false })
        if (this.props.onAccepted) this.props.onAccepted({ dataFrom: this.state.dataFrom, dataTo: this.state.dataTo })
    }


    render() {
        const isActive = this.state.isActive;
        const dateFrom = this.state.dateFrom.toLocaleDateString(),
            dateTo = this.state.dateTo.toLocaleDateString()
        return (
            <div style={{
                display: (isActive) ? 'flex' : 'none',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
               // width: 496
            }}>
                <div style={{ margin: '5px 0', }}>Установлен период: с {dateFrom} по {dateTo}</div>
                {this._tabs()}
                <div style={{ justifyContent: 'flex-end', }} className='modal-flex-row' >
                    <a className='waves-effect waves-teal btn-flat my-btn-flat' onClick={() => this.setState({ isActive: false })} >Закрыть</a>
                    <a className='waves-effect waves-teal btn-flat my-btn-flat' onClick={this._onAccepted} >Принять</a>

                </div>
            </div>
        );
    }
}
export default SelectPeriodCore;