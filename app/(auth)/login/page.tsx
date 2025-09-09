'use client';

import { useState } from 'react';
import { Button } from "@/app/modules/shared/shadcn/components/ui/button";
import { Input } from "@/app/modules/shared/shadcn/components/ui/input";
import { authService } from "@/features/auth/services/auth.service";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const loginStore = useAuthStore((s) => s.login);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await authService.login({ email, password });
      loginStore(res.user, res.token);
      router.push('/dashboard');
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="space-y-2">
        <label className="text-sm">Email</label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="space-y-2">
        <label className="text-sm">Password</label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</Button>
    </form>
  );
}

 