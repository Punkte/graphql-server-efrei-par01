import { doctorsData } from "../../datasources/doctors.js";
import { QueryResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type DoctorQueries = WithRequired<QueryResolvers, 'doctor' | 'doctors'>

export const doctorQueries: DoctorQueries = {
  doctors: (_, args) => args.specialities ? doctorsData.filter(el => args?.specialities!.includes(el.speciality)): doctorsData,
  doctor: (_, {id}) => {
    return doctorsData.find(el => el.id === id) ?? null
  },
}