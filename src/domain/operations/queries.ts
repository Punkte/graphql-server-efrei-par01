import { GraphQLError } from "graphql";
import { QueryResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types.js";

type OperationQueries = WithRequired<QueryResolvers, 'add' | 'divide' | 'multiply' | 'substract'>

export const operationQueries: OperationQueries = {
  add: (_, {number1, number2}) => number1 + number2,
  substract: (_, {number1, number2}) => number1 - number2,
  multiply: (_, {number1, number2}) => number1 + number2,
  divide: (_, {number1, number2}) => {
    if (number2 === 0) throw new GraphQLError('Cannot divide by 0')
    return number1 / number2
  },
}