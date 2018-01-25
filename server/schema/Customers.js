export const CustomersTypeDefs = `
  type Customers {
    userName: String
    userPass: String
    firstName: String
    lastName: String
  }
`;

// Provide resolver functions for your schema fields
export const CustomersResolvers = {
  customers: (root, args, context) => {
    return {
      userName: 'cherry',
      userPass: 'Asdf4321',
      firstName: 'Cherry Louie',
      lastName: 'Flores'
    };
  }
};