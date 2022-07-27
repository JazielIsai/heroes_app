import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';
import imgSearch from '../../assets/img/dc-batman.jpg';

export const HeroPage = () => {
  const {hero_id} = useParams();
  const navigate = useNavigate();

  const hero = useMemo( ()=>{
    return getHeroById(hero_id)
  }, [hero_id]);

  if( !hero ) {
    return <Navigate to='/marvel'/>
  }

  const onNavigateBack = () => {
    return navigate('/marvel')

  }

  return (
    <div className="row mt-5">
      <div className="col-md-4">
        <img 
          src={imgSearch} 
          alt={hero.superhero} 
          className="img-thumbnail animate__animated animate__bounce animate__delay-2s"
        />
      </div>
      
      <div className="col-8">
        <h2>{ hero?.superhero }</h2>
        
        <ul className='list-group list-group-flush'>
          <li  className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li  className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
          <li  className="list-group-item"> <b>First Appearance:</b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p> {hero.characters} </p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack} >
          Back
        </button>

      </div>
    </div>
  )
}
