import { User } from '../models';

const UserSchema = `
  scalar Email
  scalar Date

  type User {
    id: ID!
    firstName: String
    lastName: String
    email(email: Email!): Email!
    gender: USER_GENDER!
    height: Float!
    weight: Float!
    birthday: Date!
    lifestyle: USER_LIFESTYLE!
    bloodType: USER_BLOOD_TYPE!
    illnessesPast: [String!]!
    allergies: [String!]!
    description: String
    notes: [UserNote!]!
    analyzes: [UserAnalyze!]!
  }

  type UserNote {
    date: Date!
    note: String!
  }

  type UserAnalyze {
    name: String!
    result: AnalyzeResult!
    passingDate: Date!
  }

  type AnalyzeResult {
    num: Float!
    type: ANALYZE_RESULT_TYPE!
  }

  enum USER_GENDER {
    ${User.GENDER.join(' ')}
  }

  enum USER_LIFESTYLE {
    ${User.LIFESTYLE.join(' ')}
  }

  enum USER_BLOOD_TYPE {
    ${User.BLOOD_TYPE.join(' ')}
  }

  enum ANALYZE_RESULT_TYPE {
    TYPE1
    TYPE2
    TYPE3
  }
`;

export default () => [UserSchema];
