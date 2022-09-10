import { useState, useEffect } from 'react'
import axios from 'axios'

import { Matches } from './components/Matches'
import { GitHubLink } from './components/GitHubLink'
import { SearchInput } from './components/SearchInput'
import './styles/app.css'

//////////////////////////////////////////////////////////////////

export const App = () => {
  const [countries, setCountries] = useState([])
  const [findCountry, setFindCountry] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://restcountries.com/v3.1/all')
      .then((res) => {
        const {data} = res
        setCountries(data)
        setLoading(false)
      })
  }, [])

  //////////////////////////////////////////////////////////////////

  if (loading) return <h1>Cargando...</h1>

  return (
    <>
      <GitHubLink />

      <SearchInput 
        changer={setFindCountry} 
        placeholder={'Write country name...'}
        val={findCountry} 
      />

      {
        findCountry !== '' &&
          <Matches 
            arr={countries} 
            matchString={findCountry}
            changer={setFindCountry}
          />
      }
    </>
  );
}