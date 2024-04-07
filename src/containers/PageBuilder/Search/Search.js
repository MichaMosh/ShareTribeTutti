import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import 'react-datepicker/dist/react-datepicker.css';
import LocationAutocompleteInputImpl from '../../../components/LocationAutocompleteInput/LocationAutocompleteInputImpl';
import { useHistory } from 'react-router-dom';


function Search() {
    const history = useHistory();
    const [place, setPlace] = useState(null);
    const [category, setCategory] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Dummy input and meta objects based on your prop requirements
    const dummyInput = {
        name: 'location',
        value: place, // Using the `place` state as the value
        onChange: setPlace, // Assuming you want to update the `place` state
        onFocus: () => {},
        onBlur: () => {}, // Dummy function
    };

    const dummyMeta = {
        valid: true, // Assuming the field is valid for simplification
        touched: false, // Assuming the field hasn't been touched for simplification
    };


    // Function to handle search click (redirect for now)
    const handleSearchClick = () => {
      let basicUrl = '/s?address=Maui%2C%20Hawaii%2C%20USA&bounds=21.03141298976477%2C-155.9790420834986%2C20.57457850828407%2C-156.6969232882344';
      if (place && place.selectedPlace) {
        // Assuming generateUrl properly encodes URL parameters
        basicUrl = generateUrl(place.selectedPlace.address, place.selectedPlace.bounds.ne.lat, place.selectedPlace.bounds.ne.lng,
            place.selectedPlace.bounds.sw.lat, place.selectedPlace.bounds.sw.lng, place.selectedPlace.origin?.lat, place.selectedPlace.origin?.lng);
      }
      if (category && category !== '') {
        // Ensure category is URL-encoded to avoid injection issues
        basicUrl += `&pub_category=${encodeURIComponent(category)}`;
      }
      if (selectedDate) {
        const formattedDate = formatDate(selectedDate); // Ensure formatDate returns an encoded string or is safe to use in URL
        basicUrl += `&dates=${formattedDate}%2C${formattedDate}`;
      }
    
      history.push(basicUrl);
    };

    function generateUrl(address, neLat, neLng, swLat, swLng, originLat, originLng) {

        const baseUrl = "/s?";
        // Construct the bounds string using the NE and SW coordinates
        const bounds = `${neLat},${neLng},${swLat},${swLng}`;
        // Construct the origin string using the origin coordinates
        var origin = ''
        if(originLat && originLat) {
            origin = `${originLat},${originLng}`;
        }
        // Encode the address to ensure it's a valid URL component
        const encodedAddress = encodeURIComponent(address);
        // Constructing the URL
        const url = `${baseUrl}address=${encodedAddress}&bounds=${bounds}&origin=${origin}`;
        return url;
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        // Adding 1 to the month since getMonth() returns 0-11
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Ensures two digits
        const day = ('0' + date.getDate()).slice(-2); // Ensures two digits
        // Format the date as YYYY-MM-DD
        return `${year}-${month}-${day}`;
    }


    return (
      <section style={{ display: 'flex', alignItems: 'center', zIndex: 1000, marginTop: '30px' }}>
        <LocationAutocompleteInputImpl input={dummyInput} meta={dummyMeta} showIcon={false} placeholder={"Select a Place"}/>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginLeft: '8px', marginRight: '8px', width: '200px' }}
        >
          <option value="">Select a category</option>
          <option value="tutti-helper">Tutti Helper</option>
          <option value="babysitter">Babysitter</option>
          <option value="activities">Activities</option>
          <option value="tutor">Tutoring</option>
          <option value="private-chef">Private Chef</option>
          <option value="health_beauty">Health & Beauty</option>
          <option value="concierge">Concierge</option>
          <option value="housekeeping">Housekeeping</option>
          <option value="photographer">Photograpy</option>
        </select>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MMMM d, yyyy"
          placeholderText="Select a date"
          style={{ width: '200px', marginRight: '8px' }} // Adjust width as needed
          minDate={today}
        />
        <button onClick={handleSearchClick} style={{ display: 'flex', alignItems: 'center', padding: '8px', cursor: 'pointer', marginLeft: '8px', backgroundColor: 'white' }}>
          <FaSearch /> {/* Render the search icon */}
        </button>
      </section>
    );
  }

  export default Search;