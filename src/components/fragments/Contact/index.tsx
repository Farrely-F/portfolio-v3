"use client";

import { ContactForm, contactFormSchema } from "@/lib/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from "@/components/layouts/Section";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Contact() {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const formSubmit = (data: ContactForm) => {
    try {
      // throw new Error("Function not implemented.");
      toast({
        title: "Message Sent",
        description:
          "Thank you for contacting me. I will get back to you soon.",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Error Sending Message",
          description: error.message,
        });
      }
    }
  };

  return (
    <>
      <Section
        id="contact"
        className="relative overflow-clip bg-gradient-to-b from-white/5 via-black to-white/0 py-12"
      >
        <div className="absolute -top-2/3 left-1/2 z-[-1] h-[800px] w-[75%] -translate-x-1/2 rounded-full bg-white/5 blur-xl"></div>
        <div className="grid w-full grid-cols-10 gap-y-8 md:min-h-[60dvh]">
          <div className="col-[1/11] h-full w-full space-y-4 lg:col-[1/6]">
            <p className="text-balance text-sm">LETS GET IN TOUCH ⚡</p>
            <h2 className="text-5xl font-bold">Contact Me</h2>
            <p className="mt-6 max-w-sm font-sans">
              Feel free to contact me if you have any questions or suggestions.
              I am also open to discussions and collaborations
            </p>
          </div>
          <div className="col-[1/11] h-full w-full lg:col-[6/11]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(formSubmit)}
                className="grid-cols-2 gap-4 space-y-4 lg:grid lg:space-y-0"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Subject of the Message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[140px]"
                          placeholder="Your Message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="col-span-2 max-w-fit text-xs transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_12px_12px_hsl(0,0%,100%,0.08)] active:scale-95 active:bg-gray-100">
                  SUBMIT
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>
    </>
  );
}
