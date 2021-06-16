import { useEffect, useState } from 'react'
import Meter from '../components/moistureMeter'
import styles from '../styles/Home.module.css'
import io from'socket.io-client'

export default function Home() {
  const [form, setForm] = useState({
    humidity: null, 
  })

  useEffect(() => {
    const socket = io('http://localhost:5000/', { transports: ["websocket"] })
		
    socket.on('get-serial', ({ value }) => {
      setForm({
        ...form, 
        humidity: value
      })
    })
  }, [])
  return (
    <div className={styles.container}>
      <div className="container">
        <div className="main">
          <div className="head d-flex justify-content-center align-items-center">
            <p className="text-white text-uppercase m-0">Sensor de humedad relativa</p>
          </div>
          <div className="row">
            <Meter form={form} />
          </div>
        </div>
      </div>
      <style>{`
        .head {
          background-color: #000;
          height: 50px;
        }
        .main {
          border-radius: 10px;
          border: 2px solid #1d1d1d;
          background: #1d1d1d;
        }
      `}</style>
    </div>
  )
}
