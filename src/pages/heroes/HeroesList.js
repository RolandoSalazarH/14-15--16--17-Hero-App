import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = (publisher) => {

    const heroes = getHeroesByPublisher(publisher)
    return (
        <div className="row  animate__animated animate__fadeIn">
            {heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
    )
}
