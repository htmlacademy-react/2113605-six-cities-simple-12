import { useRef, useEffect, useState } from 'react';
import { OffersPropsType } from '../../mocks/index';
import { Icon, Marker, LayerGroup, PointTuple } from 'leaflet';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

const MarkerIcon = {
  Image: {
    Default: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
    Active: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin-active.svg',
  },
  Size: {
    Width: 28,
    Height: 40,
  },
} as const;

const iconSize: PointTuple = [MarkerIcon.Size.Width, MarkerIcon.Size.Height];
const iconAnchor: PointTuple = [MarkerIcon.Size.Width / 2, MarkerIcon.Size.Height];

const defaultCustomIcon = new Icon({
  iconUrl: MarkerIcon.Image.Default,
  iconSize,
  iconAnchor
});

const currentCustomIcon = new Icon({
  iconUrl: MarkerIcon.Image.Active,
  iconSize,
  iconAnchor
});

type MapProps = {
  city: OffersPropsType;
  offers: OffersPropsType[];
  activeOffer: OffersPropsType | null;
  className?: string;
};

function Map({ city, offers, activeOffer, className }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const [currentCity, setCurrentCity] = useState<string>(city.name);

  useEffect(() => {
    if (map) {
      if (currentCity !== city.name) {
        map.flyTo(
          [
            city.location.latitude,
            city.location.longitude
          ],
          city.location?.zoom,
          {
            animate: true,
            duration: 1
          }
        );

        setCurrentCity(city.name);
      }

      const markers = offers.map(
        (offer) =>
          new Marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon: offer.id === activeOffer?.id ? currentCustomIcon : defaultCustomIcon,
            }
          )
      );

      const markersLayer = new LayerGroup(markers);
      markersLayer.addTo(map);

      return () => {
        map.removeLayer(markersLayer);
      };
    }
  }, [city, currentCity, map, offers, activeOffer]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
