import { Calendar } from 'antd'
import React from 'react'
import { dataCellRender, useDateMap } from '../app/utils'

export default () => {
  const { getData } = useDateMap()

  return (
    <main className="container">
      <Calendar
        dateCellRender={date => date && dataCellRender(getData(date))}
      />
    </main>
  )
}
