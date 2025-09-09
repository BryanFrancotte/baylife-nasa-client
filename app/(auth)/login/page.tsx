'use client';

import { useState } from 'react';
import { Button } from "@/app/modules/shared/shadcn/components/ui/button";
import { Input } from "@/app/modules/shared/shadcn/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Hook up to auth service
    console.log({ email, password });
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
      <Button type="submit" className="w-full">Sign in</Button>
    </form>
  );
}

 