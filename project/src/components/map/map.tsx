import { useRef, useEffect } from 'react';
import { OffersPropsType, CityType } from '../../mocks/index';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  city: CityType;
  points: OffersPropsType[];
};

function Map({ points, city }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }
  }, [map, points]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
