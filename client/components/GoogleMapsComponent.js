import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const GoogleMapsComponent = withScriptjs(withGoogleMap((props) => 
    <GoogleMap defaultZoom={16} defaultCenter={{lat: 21.3107503, lng: -157.8602849}}>
        {props.isMarkerShown && <Marker position={{lat: 21.3107503, lng: -157.8602849}} />}
    </GoogleMap>
)) 

export default GoogleMapsComponent;

