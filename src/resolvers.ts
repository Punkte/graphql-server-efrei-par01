import { GraphQLError } from "graphql"
import { doctorsData } from "./datasources/doctors.js"
import { getClosestColor } from "./domain/colors/closestColor.js"
import { Resolvers } from "./types.js"

export const resolvers: Resolvers = {
  Query: {
    doctors: (_, args) => args?.specialities ? doctorsData.filter(el => args?.specialities.includes(el.speciality)): doctorsData,
    doctor: (_, {id}) => {
      return doctorsData.find(el => el.id === id)
    },
    add: (_, {number1, number2}) => number1 + number2,
    substract: (_, {number1, number2}) => number1 - number2,
    multiply: (_, {number1, number2}) => number1 + number2,
    divide: (_, {number1, number2}) => {
      if (number2 === 0) throw new GraphQLError('Cannot divide by 0')
      return number1 / number2
    },
    closestColor: (_, {hexa}: {hexa: string}) => {
      if (!(hexa.match(/^#[0-9a-fA-F]{6}/))) throw new GraphQLError('Invalid color provided')

      return getClosestColor(hexa, ['#ffffff', '#000000'])
    },
    getTracks: async (_, __, {dataSources}) => {
      const data = await dataSources.trackApi.getTracks()
      console.log({data})
      return data
    }
  },
  Track: {
    author: (parent, _, {dataSources}) => dataSources.trackApi.getAuthorBy(parent.authorId)
  }
}