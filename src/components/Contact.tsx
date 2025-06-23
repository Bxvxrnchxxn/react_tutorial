"use client";
import React from "react";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  User,
  AtSign,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactForm } from "@/validation/contact.schema";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: ContactForm) => {
    console.log("send =>", data);
    reset();
  };
  return (
    <div className="bg-slate-700 flex flex-col items-center justify-center min-h-screen py-16 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-6 h-6 border-2 border-purple-400/30 rounded-full animate-pulse-scale"></div>
        <div className="absolute bottom-20 left-10 w-8 h-8 border-2 border-pink-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400/50 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-20 left-1/2 w-4 h-4 bg-pink-400/30 rounded-full animate-pulse-scale" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <div className="animate-blink flex flex-col mb-4">
        <div className="md:text-5xl text-4xl font-bold text-gray-100 mb-4">
          Get In Touch
        </div>
        <div className="animate-shimmer w-40 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mb-6 mx-auto inline"></div>
      </div>
      <div className="align-center text-gray-100 w-full px-12 md:text-lg text-base text-center">
        Have a project in mind? Let&apos;s discuss how we can work together to
        bring your ideas to life.
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 md:gap-[20vw] gap-6 items-start justify-start mt-12">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-10">
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-4 animate-glow-float">
              <Mail size={24} className="text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-100 font-semibold">Email</div>
              <div className="text-gray-300 font">bovorn09871@gmail.com</div>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-4 animate-glow-float">
              <Phone size={24} className="text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-100 font-semibold">Phone</div>
              <div className="text-gray-300 font">+66 983799686</div>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-4 animate-glow-float">
              <MapPin size={24} className="text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-gray-100 font-semibold">Location</div>
              <div className="text-gray-300 font">Bangkok, Thailand</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-80">
            {/* NAME */}
            <div className="group">
              <div className="relative group-hover:scale-105 transition-all duration-300 hover:shadow-purple-600/60 hover:shadow-xl">
                <User
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  placeholder="Name"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                  className={cn(
                    "pl-10 focus-visible:border-purple-400 text-gray-100",
                    errors.name && "border-red-500 focus:border-red-500"
                  )}
                />
              </div>
              {touchedFields.name && errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL ––– same layout as Name */}
            <div className="group">
              <div className="relative group-hover:scale-105 transition-all duration-300 hover:shadow-purple-600/60 hover:shadow-xl">
                <AtSign
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                  className={cn(
                    "pl-10 focus-visible:border-purple-400 text-gray-100", // ← เพิ่มตรงนี้
                    errors.email && "border-red-500 focus:border-red-500"
                  )}
                />
              </div>
              {touchedFields.email && errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* MESSAGE ––– same layout as Name */}
            <div className="group">
              <div className="relative group-hover:scale-105 transition-all duration-300 hover:shadow-purple-600/60 hover:shadow-xl">
                <MessageCircle
                  size={16}
                  className="absolute left-3 top-5 -translate-y-1/2 text-gray-400" // ← เพิ่มตรงนี้
                />
                <Textarea
                  rows={4}
                  placeholder="Message"
                  aria-invalid={!!errors.message}
                  {...register("message")}
                  className={cn(
                    "resize-none pl-10 focus-visible:border-purple-400  text-gray-100", // ← เพิ่มตรงนี้
                    errors.message && "border-red-500 focus:border-red-500"
                  )}
                />
              </div>
              {touchedFields.message && errors.message && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <Button
              type="submit"
              className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 
              hover:scale-105 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,1)]"
            >
              <Send size={18} className="mr-2 group-active:animate-send" /> Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
