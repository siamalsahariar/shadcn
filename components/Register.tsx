import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { MailPlus } from "lucide-react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col gap-4 bg-muted/40 justify-center">
      <Card className="mx-auto w-full max-w-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="first_name">First Name</label>
                <Input type="text" id="first_name" placeholder="John" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="last_name">Last Name</label>
                <Input type="text" id="last_name" placeholder="Doe" />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <Input type="email" id="email" placeholder="hello@exmple.com" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="role">Role</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>User</SelectLabel>
                    <SelectItem value="apple">Admin</SelectItem>
                    <SelectItem value="banana">Employee</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              Register <MailPlus className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="mt-4 text-center text-sm">
            Already Have an account?
            <Link href="/login" className="underline ml-1">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
