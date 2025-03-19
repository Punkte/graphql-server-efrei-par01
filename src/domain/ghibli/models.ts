import { FilmResolvers, PeopleResolvers } from "../../types.js";

export const FilmResolver: FilmResolvers = {
  people: ({people}, _, {dataSources}) => dataSources.ghibliApi.getPeopleByUrls(people),
}
export const PeopleResolver: PeopleResolvers = {
  eyeColor: ({eye_color}) => eye_color,
  films: ({films}, _, {dataSources}) => dataSources.ghibliApi.getFilmsByUrls(films),
}