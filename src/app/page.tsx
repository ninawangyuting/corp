"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation";
export default function App() {
  const [date, setDate] =React.useState<Date | undefined>(new Date())
  const router = useRouter();
  const onSaveLogin = ()=>{
    router.push('/home')
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form action="" className="w-full max-w-md flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center">Create App</h1>
        <Input placeholder="Enter your name" name="name" />
        <Textarea placeholder="Enter your message" name="message" />
        <Button onClick={onSaveLogin} type="button">Submit</Button>
      </form>
    </div>
  );
}
