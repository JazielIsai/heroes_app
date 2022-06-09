import {useId} from 'react'
import { getHeroByPublisher } from '../../Selectors/getHeroByPublisher'

export const HeroList = ({publisher}) => {
  
    const heroes = getHeroByPublisher(publisher);
    
    return (
    <div className='card-columns'>
    
        {
            heroes.map( heroe => (
                <li
                    key={heroe.id}
                >
                    {heroe.superhero}
                </li>
            ) )
        }
    
    </div>
  )
}
