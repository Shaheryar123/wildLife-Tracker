import Map from "./Map";
import { useState, useEffect } from 'react'
import Header from './Header'

function App(){
const [eventData, setEventData] = useState()
const [loading, setLoading] = useState()


useEffect(() =>
{
  const fetchEvents = async () =>
  {
    setLoading(true)
    const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
    const { events } = await res.json()
    setEventData(events)
    setLoading(false)
  }
  fetchEvents()
},[])

  return (
    <div >
      <Header />
      {eventData? <Map eventData={ eventData}/>:<h1 style={{marginTop:'80px'}}>Fetching Data</h1>}
    </div>
  );
}

export default App;
