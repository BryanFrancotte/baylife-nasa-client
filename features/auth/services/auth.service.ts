import apiClient from "@/lib/api/client";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name?: string;
  };
}

class AuthService {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const res = await apiClient.post("/auth/login", data);
    return res.data as LoginResponse;
  }
}

export const authService = new AuthService();


