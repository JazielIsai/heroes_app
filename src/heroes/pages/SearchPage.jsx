import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../Components'
import { getHerosByName } from '../helpers'

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const heros = getHerosByName(q);

  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const onSearchSubmit = (e)=>{
    e.preventDefault();
    
    if(searchText.trim().lenght <= 1) return;

    navigate(`?q=${searchText}`);
  }

  return (
    <div>
      <h2>Search</h2>
      <hr/>
      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={onSearchSubmit}>
            <input 
              type='text' 
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-primary'>
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results:</h4>
          <hr/>

          {
            q === ''
              ?
                <div className='alert alert-primary'>
                  Searching
                </div>
              :
                (heros.length === 0) &&
                <div className='alert alert-danger'>
                  No hero with <b>{q}</b>
                </div>
          }

          

          {
            heros.map( hero => (
              <HeroCard {...hero}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
