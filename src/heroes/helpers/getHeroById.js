import { heroes } from "../Data"

export const getHeroById = (id) => {
    return heroes.find( hero => hero.id === id );
}