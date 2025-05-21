import axiosInstance from "../Interceptor/AxiosInterceptor";

const loginUser = async (login: any) => {
  try {
    const response = await axiosInstance.post('/auth/login', login);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { loginUser };
