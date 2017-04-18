import React, {Component} from 'react'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import format from 'date-fns/format'

const today = new Date();
const min = new Date( today.getFullYear(), today.getMonth() );
const max = new Date( today.getFullYear() + 1, today.getMonth() );

const Calendar = (props) => {
  return (
    <Calendar
      onSelect={(date) => { this.props.handleOnSelectDate(format(date, 'YYYY-MM-DD')) }}
      width={"95%"}
      height={225}
      selected={today}
      disabledDates={this.props.disabledDates}
      min={min}
      max={max}
      minDate={today}
    />
  )
}

export default Calendar
