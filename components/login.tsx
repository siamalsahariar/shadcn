import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Mail } from "lucide-react";  // You might need to replace this with a suitable icon
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col gap-4 bg-muted/40 justify-center">
      <Card className="mx-auto w-full max-w-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <Input type="email" id="email" placeholder="hello@example.com" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password">Password</label>
              <Input type="password" id="password" placeholder="********" />
            </div>
            <Button type="submit" className="w-full">
              Login <Mail className="w-4 h-4 ml-2" /> {/* Use an appropriate icon */}
            </Button>
          </div>

          <div className="mt-4 text-center text-sm">
            Don’t have an account?
            <Link href="/register" className="underline">
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
