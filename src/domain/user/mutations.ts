import { hashPassword } from "../../modules/auth.js";
import { MutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type UserMutations = WithRequired<MutationResolvers, 'createUser'>


const createUser: NonNullable<MutationResolvers['createUser']> = async (_, {username, password}, {dataSources: {db}}) => {
  try {
    const createdUser = await db.user.create({
      data: {
        username,
        password: await hashPassword(password)
      }
    });
  
    return {
      code: 201,
      message: 'user has been created',
      success: true,
      user: createdUser
    }
  } catch {
    return {
      code: 400,
      message: 'User has not been created',
      success: false,
      user: null,
    }
  }
}

export const userMutations: UserMutations = {createUser}