import { useRef, useEffect } from 'react';
import { Icon, PointTuple } from 'leaflet';
import leaflet from 'leaflet';
import { OfferType } from '../../types';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

const MarkerIcon = {
  Image: {
    Default:
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    Active:
      'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  },
  Size: {
    Width: 28,
    Height: 40,
  },
} as const;

const iconSize: PointTuple = [MarkerIcon.Size.Width, MarkerIcon.Size.Height];
const iconAnchor: PointTuple = [
  MarkerIcon.Size.Width / 2,
  MarkerIcon.Size.Height,
];

const defaultCustomIcon = new Icon({
  iconUrl: MarkerIcon.Image.Default,
  iconSize,
  iconAnchor,
});

const currentCustomIcon = new Icon({
  iconUrl: MarkerIcon.Image.Active,
  iconSize,
  iconAnchor,
});

type MapProps = {
  offers: OfferType[];
  hoverCard?: OfferType | null;
  className: string;
  page?: OfferType;
  location: string;
};

function Map({
  className,
  offers,
  location,
  hoverCard,
  page,
}: MapProps): JSX.Element {
  const cityLocation = offers.filter((offer) => location === offer.city.name)[0].city.location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      map.flyTo(
        [cityLocation.latitude, cityLocation.longitude],
        cityLocation.zoom,
        {
          animate: true
        }
      );
      const markerGroup = leaflet.layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = leaflet.marker({
          lat: offer.location?.latitude,
          lng: offer.location?.longitude,
        });

        marker
          .setIcon(
            hoverCard === offer || page === offer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerGroup);
      });

      return () => {
        map.removeLayer(markerGroup);
      };
    }
  }, [map, offers, hoverCard, cityLocation, page]);

  return <div ref={mapRef} className={`${className}__map map`}></div>;
}

export default Map;
