import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  password: string;
  password_confirmation: string;
}

export interface AuthResponse {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
}

export const authService = {
  async getCsrfToken() {
    await axios.get(`http://localhost:8000/sanctum/csrf-cookie`, {
      withCredentials: true,
    });
  },

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await this.getCsrfToken();
    const response = await axios.post<AuthResponse>(`${API_URL}/login`, credentials, {
      withCredentials: true,
    });
    return response.data;
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    await this.getCsrfToken();
    const response = await axios.post<AuthResponse>(`${API_URL}/register`, data, {
      withCredentials: true,
    });
    return response.data;
  },

  async logout(): Promise<void> {
    await axios.post(`${API_URL}/logout`, {}, {
      withCredentials: true,
    });
  },
}; 