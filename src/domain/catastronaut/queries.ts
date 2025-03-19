import { QueryResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type CatstronautQueries = WithRequired<QueryResolvers, 'getTracks'>

export const catstronautQueries: CatstronautQueries = {
  getTracks: async (_, __, {dataSources}) => {
    const data = await dataSources.trackApi.getTracks()
    return data
  },
}
