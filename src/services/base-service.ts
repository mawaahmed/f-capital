import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";
import { TOKEN_STORAGE_KEY } from "@/lib/constants";

const baseApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

baseApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    console.error("API Request Error:", error.message, error.config);
    return Promise.reject(error);
  }
);

baseApi.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  async (error: AxiosError): Promise<AxiosError> => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Implement token refresh logic here
        // This usually involves calling a /refresh-token endpoint with a refresh token
        // stored in an HTTP-only cookie (safer) or localStorage.
        // For demonstration, let's assume a function `refreshAccessToken` exists.
        // You would typically have a separate auth service for this.
        // await authService.refreshAccessToken(); // Call your actual refresh token function
        // const newAccessToken = localStorage.getItem('accessToken'); // Get the newly refreshed token

        // // Update the original request's authorization header with the new token
        // if (newAccessToken) {
        //   originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        //   return api(originalRequest); // Retry the original request
        // } else {
        //   // If token refresh fails or no new token is available, redirect to login
        //   // window.location.href = '/login'; // Or use React Router's navigate
        //   console.error('Failed to refresh token. Redirecting to login.');
        // }

        console.error(
          "401 Unauthorized: Token expired or invalid. Please re-authenticate."
        );
        // history.push('/login'); // If using useHistory hook
        window.location.href = "/login"; // Simple full page redirect
      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);
        // Clear tokens and redirect to login if refresh also fails
        localStorage.removeItem("accessToken");
        // localStorage.removeItem('refreshToken'); // Keep this for when we will handle refresh token
        window.location.href = "/login";
      }
    }

    if (error.response) {
      console.error(
        `API Error - Status: ${error.response.status}, Data:`,
        error.response.data,
        error.response.config
      );
      // You can implement different error handling based on status codes
      switch (error.response.status) {
        case 400:
          // Bad Request - e.g., validation errors
          // alert('Bad Request: ' + (error.response.data.message || ''));
          break;
        case 403:
          // Forbidden - user doesn't have permission
          // alert('Permission denied.');
          break;
        case 404:
          // Not Found
          // alert('Resource not found.');
          break;
        case 500:
          // Internal Server Error
          // alert('Server error. Please try again later.');
          break;
        default:
          // alert('An unexpected error occurred.');
          break;
      }
    } else if (error.request) {
      // The request was made but no response was received (e.g., network error)
      console.error("API Network Error:", error.message, error.request);
      // alert('Network error. Please check your internet connection.');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("API Config Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default baseApi;
