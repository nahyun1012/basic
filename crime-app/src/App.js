import { DISTRICTS  } from './constants/districts';
import { YEARS } from './constants/years';
import { useState, useEffect } from 'react';
import Dashboard from './component/Dashboard';

export default function App() {

  const districtList = DISTRICTS.map(district => (
    <option key={district.id} value={district.id}>
      {district.city}
    </option>
  ))

  const yearList = YEARS.map(year => (
    <option key={year} value={year}>
      {year}
    </option>
  ))
  
  return (
    <>
      <h1>지역별 범죄 발생 통계</h1>
      <div>
        <select>
          {districtList}
        </select>
        <select>
          {yearList}
        </select>
      </div>

      <main>
        <Dashboard />
      </main>
    </>
  )
}