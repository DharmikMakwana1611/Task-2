import { useState } from 'react'
import Form from './components/form'
import Table from './components/Table'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
      <Table />
    </>
  )
}

export default App
