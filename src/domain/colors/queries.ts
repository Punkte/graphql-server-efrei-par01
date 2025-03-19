import { GraphQLError } from "graphql";
import { QueryResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";
import { getClosestColor } from "./closestColor.js";

type ColorQueries = WithRequired<QueryResolvers, 'closestColor'>

export const colorQueries: ColorQueries = {
  closestColor: (_, {hexa}: {hexa: string}) => {
    if (!(hexa.match(/^#[0-9a-fA-F]{6}/))) throw new GraphQLError('Invalid color provided')

    return getClosestColor(hexa, ['#ffffff', '#000000'])
  },
}
