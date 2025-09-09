import apiClient from "@/lib/api/client";
import { env } from "@/lib/env";

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
    if (env.NEXT_PUBLIC_DEV_AUTH === 'true') {
      if (data.email === 'admin@nasa.dev' && data.password === 'password') {
        return {
          token: 'dev-token',
          user: { id: 'dev-user-1', email: data.email, name: 'Dev Admin' },
        };
      }
      throw new Error('Invalid dev credentials');
    }
    const res = await apiClient.post("/auth/login", data);
    return res.data as LoginResponse;
  }
}

export const authService = new AuthService();


