export const UsersTypeDefs = `
  type Users {
    userName: String
    userPass: String
    firstName: String
    lastName: String
  }
`;

// Provide resolver functions for your schema fields
export const UsersResolvers = {
  users: (root, args, context) => {
    return {
      userName: 'raihan',
      userPass: 'Qwer1234',
      firstName: 'Ryann',
      lastName: 'Flores'
    };
  }
};