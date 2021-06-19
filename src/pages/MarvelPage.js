import React from 'react'
import { HeroesList } from './heroes/HeroesList'

export const MarvelPage = () => {
    return (
        <div>
            <h1 className="text-center">Marvel Heroes</h1>
           <HeroesList publisher="Marvel Comics"/>
        </div>
    )
}
