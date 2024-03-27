import { types as sdkTypes } from '../util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
//
// NOTE: these are highly recommended, since they
//       1) help customers to find relevant locations, and
//       2) reduce the cost of using map providers geocoding API
const defaultLocations = [
  {
    id: 'default-maui',
    predictionPlace: {
      address: 'Maui, Hawaii, USA',
      bounds: new LatLngBounds(
        new LatLng(21.03141298976477, -155.9790420834986), // Northeast corner of Maui
        new LatLng(20.57457850828407, -156.6969232882344)  // Southwest corner of Maui
      ),
    },
  },
  // {
  //   id: 'default-turku',
  //   predictionPlace: {
  //     address: 'Turku, Finland',
  //     bounds: new LatLngBounds(new LatLng(60.53045, 22.38197), new LatLng(60.33361, 22.06644)),
  //   },
  // },
  // {
  //   id: 'default-tampere',
  //   predictionPlace: {
  //     address: 'Tampere, Finland',
  //     bounds: new LatLngBounds(new LatLng(61.83657, 24.11838), new LatLng(61.42728, 23.5422)),
  //   },
  // },
  // {
  //   id: 'default-oulu',
  //   predictionPlace: {
  //     address: 'Oulu, Finland',
  //     bounds: new LatLngBounds(new LatLng(65.56434, 26.77069), new LatLng(64.8443, 24.11494)),
  //   },
  // },
  // {
  //   id: 'default-ruka',
  //   predictionPlace: {
  //     address: 'Ruka, Finland',
  //     bounds: new LatLngBounds(new LatLng(66.16997, 29.16773), new LatLng(66.16095, 29.13572)),
  //   },
  // },
];
export default defaultLocations;
