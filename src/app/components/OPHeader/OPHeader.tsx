"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Here logic of when menu is open the scrollbar willbe disable
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [menuOpen]);
  // Toggle menu open/close state
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  console.log("MenuOpen is :", menuOpen);

  return (
    <nav className="border-b sticky top-0 bg-[#304D30] dark:bg-transparent">
      <div className="container m-auto flex md:flex-row flex-col justify-between items-center md:gap-0 py-5">
        <div className="flex items-center justify-between md:w-auto w-full">
          <h1 className="text-3xl font-extrabold dark:text-primary">
            Growoly.
          </h1>
          <Button onClick={toggleMenu} className="md:hidden">
            <FaBars className="text-xl" />
          </Button>
        </div>
        <div className="md:flex hidden gap-5 items-center">
          <Link href={"/"}>
            <Button
              variant={"ghost"}
              className="font-bold text-base text-[#416D19]"
            >
              Home
            </Button>
          </Link>
          <Link href={"/"}>
            <Button
              variant={"ghost"}
              className="font-bold text-base text-primary"
            >
              About
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant={"ghost"} className="font-bold text-base">
              Team
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant={"ghost"} className="font-bold text-base">
              Contact
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant={"ghost"} className="font-bold text-base">
              Contact us
            </Button>
          </Link>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:hidden gap-5 items-center md:pt-0 pt-5 h-screen">
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="font-bold text-base text-red-500"
                  >
                    Home
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button variant={"ghost"} className="font-bold text-base">
                    About
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button variant={"ghost"} className="font-bold text-base">
                    Team
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button variant={"ghost"} className="font-bold text-base">
                    Contact
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button variant={"ghost"} className="font-bold text-base">
                    Contact us
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Link href={"/"} className="hidden md:block">
          <Button>Get in touch</Button>
        </Link>
      </div>
      {/* <div className={`h-screen w-full bg-black bg-opacity-[0.1] backdrop-blur-sm fixed inset-0`}>
      </div> */}
    </nav>
  );
};

export default Header;




"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

