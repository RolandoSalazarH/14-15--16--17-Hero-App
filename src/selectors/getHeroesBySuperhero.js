import {heroes} from '../data/heroes'


export const getHeroesBySuperhero = ({superheroe}) => {

return heroes.filter(hero => hero.superheroe === superheroe)
}
