import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import { useState } from 'react'
import LocationInfo from './LocationInfo'
function Map({eventData,center, zoom}) {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData?.map(e =>
    {
        if (e.categories[0].id===8) {
            return <LocationMarker lat={e.geometries[0].coordinates[1]} lng={e.geometries[0].coordinates[0]} onClick={ ()=> setLocationInfo({id:e.id , title:e.title})}/>
        }
        return null
    })
    return (
        <div style= {{height:'100vh', weigth:'100vw',position:'relative'}}>
            <GoogleMapReact
                
                defaultCenter={center}
                defaultZoom= {zoom}
            >
      {markers}          
            </GoogleMapReact>
            {locationInfo && <LocationInfo info={ locationInfo}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.327,
        lng: -122.877
    },
    zoom:7
}


export default Map
