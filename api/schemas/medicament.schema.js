const MedicamentSchema = `
  scalar Date

  type Medicament {
    id: String!
    ownerId: String!
    name: String!
    type: MEDICAMENT_TYPE!
    amount: MedicamentAmount!
    activeSubstance: MedicamentActiveSubstance!
    refillHistory: [MedicamentRefillHistory!]!
    deleted: Boolean!
  }

  type MedicamentAmount {
    num: Float!
    type: AMOUNT_TYPE!
  }

  type MedicamentActiveSubstance {
    num: Float!
    type: ACTIVE_SUBSTANCE_TYPE!
  }

  type MedicamentRefillHistory {
    date: Date!
    amount: Int!
    price: String!
    currency: String!
  }

  enum MEDICAMENT_TYPE {

  }

  enum AMOUNT_TYPE {

  }

  enum ACTIVE_SUBSTANCE_TYPE {

  }
`;

export default () => [MedicamentSchema];
