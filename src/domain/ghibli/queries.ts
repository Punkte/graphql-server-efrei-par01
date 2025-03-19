import { QueryResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type GhibliQueries = WithRequired<QueryResolvers, 'getFilms' | 'getPeople'>

export const ghibliQueries: GhibliQueries = {
  getFilms: (_, __, {dataSources}) => dataSources.ghibliApi.getFilms(),
  getPeople: (_, __, {dataSources}) => dataSources.ghibliApi.getPeople(),
}
