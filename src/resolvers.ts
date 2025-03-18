import { doctorsData } from "./datasources/doctors.js"

export const resolvers = {
  Query: {
    doctors: () => doctorsData,
    doctor: (_, {id}) => {
      return doctorsData.find(el => el.id === id)
    }
  }
}