"use client"
import React, { useState} from 'react';
import Getsuggestions from '../Airports/Airports';

const SearchInput = (props) => {
  const [query, setQuery] = useState('');
  const [iata, setiata] = useState('')
  const [suggestions, setSuggestions] = useState([]);
  const [show,setshow] = useState(false)
  const setfun = (val)=>{
    setQuery(val)
    setSuggestions(Getsuggestions(val))
    setshow(true)
    if (val ===""){
        setshow(false)
    }
  }
  const setiataval = (val) =>{
    setQuery(val.city)
    setiata(val.iata)
    props.value(val.iata)
    setshow(false)
    // props.valuedrr(val.iata)
  }
  return (
    <div className='inputsugg'>
        <input type="hidden" name={props.name} id={props.id} value={iata}/>
      <input
        type="text"
        value={query}
        onChange={e => setfun(e.target.value)}
        placeholder="Search..."
      />
      <ul className={show?'list':'hide'}>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => setiataval(suggestion)}>
            {`${suggestion.city} (${suggestion.country})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
