import { Badge, Calendar } from 'antd'
import React from 'react'
import '../app/ReservationCalendar.css'
import { getStatusText, useDateMap } from '../app/utils'

export const ReservationCalendar1 = () => {
  const { getDateData, getMonthData } = useDateMap()

  const dateCellRender = date => (
    <ul className="events">
      {date &&
        getDateData(date).map(({ status, time }) => (
          <li key={time}>
            <Badge status={status} text={`${time} ${getStatusText(status)}`} />
          </li>
        ))}
    </ul>
  )

  const monthCellRender = date => {
    const num = getMonthData(date)
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Pickups Completed</span>
      </div>
    ) : null
  }

  return (
    <main class="main-container">
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </main>
  )
}
