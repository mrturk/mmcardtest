export const ADMIN_LOGIN = "/User/adminLogin";
export const ADD_USER = "/User/addUser";

export const getApiEndPoint = (apiKey) => {
  return `${process.env.NEXT_PUBLIC_BASE_API}${apiKey}`;
};
