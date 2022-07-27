import React from 'react'
import { Link } from 'react-router-dom'
import heroImgsUrl from '../../assets/img/dc-arrow.jpg'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    // const heroImageUrl =`${heroImgsUrl}/${id}.jpg`;

    const charactersByAuthor = ( <p>{characters}</p>)

  return (
    <div className='col'>
        <div className='card'>

            <div className='row no-gutter'>
                <div className='col-4 "'>
                    <img src={heroImgsUrl} className='card-img animate__backInDown' alt={superhero}/>
                </div>

                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'> {superhero} </h5>
                        <p className='card-text'>{alter_ego}</p>
                        {
                            (alter_ego !== characters) && charactersByAuthor
                        }
                        <p className='card-text'>
                            <small className='text-muted'> {first_appearance} </small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Mas...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
