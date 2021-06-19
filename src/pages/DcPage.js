import React from 'react'
import { HeroesList } from './heroes/HeroesList'

export const DcPage = () => {
    return (
        <div>
             <h1 className="text-center">DC Heroes</h1>
            <HeroesList publisher="DC Comics"/>
        </div>
    )
}
