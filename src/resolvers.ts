import { Resolvers } from "./types.js"
import { doctorQueries } from "./domain/doctors/queries.js"
import { operationQueries } from "./domain/operations/queries.js"
import { colorQueries } from "./domain/colors/queries.js"
import { catstronautQueries } from "./domain/catastronaut/queries.js"
import { ghibliQueries } from "./domain/ghibli/queries.js"
import { TrackResolver } from "./domain/catastronaut/models.js"
import { catstronautMutations } from "./domain/catastronaut/mutations.js"
import { FilmResolver, PeopleResolver } from "./domain/ghibli/models.js"
import { userMutations } from "./domain/user/mutations.js"

export const resolvers: Resolvers = {
  Query: {
    ...doctorQueries,
    ...operationQueries,
    ...colorQueries,
    ...catstronautQueries,
    ...ghibliQueries,
  },
  Mutation: {
    ...catstronautMutations,
    ...userMutations,
  },
  Track: TrackResolver,
  Film: FilmResolver,
  People: PeopleResolver,
}