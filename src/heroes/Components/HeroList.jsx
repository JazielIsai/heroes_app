import React, { useMemo } from 'react'
import { HeroCard } from './HeroCard';
import { getHeroByPublisher } from '../helpers'

export const HeroList = ({publisher}) => {
  
    const heros = useMemo( () =>{
        return getHeroByPublisher(publisher);
    },[publisher]);     

    return (
        <div>
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                {
                    heros.map(hero => (
                        <div
                            key={hero.id}
                        >
                            <HeroCard 
                                key={hero.id} 
                                { ...hero }
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
