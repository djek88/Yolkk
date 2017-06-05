const UserSchema = `
  scalar Email
  scalar Date

  type User {
    id: String!
    firstName: String
    lastName: String
    email: Email!
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

  }

  enum USER_LIFESTYLE {

  }

  enum USER_BLOOD_TYPE {

  }

  enum ANALYZE_RESULT_TYPE {

  }
`;

export default () => [UserSchema];
