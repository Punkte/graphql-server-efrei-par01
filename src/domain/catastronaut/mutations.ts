import { MutationResolvers, QueryResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type CatstronautMutations = WithRequired<MutationResolvers, 'incrementNumberOfLikes' | 'incrementTrackViews'>

export const catstronautMutations: CatstronautMutations = {
  incrementTrackViews: async (_, {id}, {dataSources}) => {
    try {
      const track = await dataSources.trackApi.incrementTrackViews(id)
      const message = `Incremented track views for id ${id}`

      return {
        code: 200,
        message,
        success: true,
        track
      }
    } catch(e) {
      return {
        code: 304,
        message: 'Trackview not modified',
        success: false,
      }
    }
  },
  incrementNumberOfLikes: async (_, {id}, {dataSources}) => {
    try {
      const track = await dataSources.trackApi.incrementNumberOfLikes(id)
      const message = `Incremented track likes for id ${id}`

      return {
        code: 200,
        message,
        success: true,
        track
      }
    } catch(e) {
      return {
        code: 304,
        message: 'TrackLikes not modified',
        success: false,
      }
    }
  }
}