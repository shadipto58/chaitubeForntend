"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../api/api";
import Register from "@/api/user/register";
import axios from "axios";
import Spinner from "../components/Spinner/Spinner";

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const avatarimageSchema = z
  .any({ message: "Avatar image is required" })
  // To not allow empty files
  .refine((files) => files?.length >= 1, { message: "Avatar image is required" })
  // To not allow files other than images
  .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
    message: ".jpg, .jpeg, .png and .webp files are accepted",
  })
  // To not allow files larger than 5MB
  .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
    message: `Max file size is 2MB`,
  })
  .optional();

const imageSchema = z
  .any({ message: "" })

 
  .optional();

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email Invalid",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
  avatar: avatarimageSchema,
  coverImage: imageSchema,
});

type FormData = z.infer<typeof formSchema>;

const Signup = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const { toast } = useToast();

  // const handleAvatarImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setAvatar(e.target.files[0]);
  //   }
  // };

  // const handleCoverImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setCoverImage(e.target.files[0]);
  //   }
  // };

   // State for storing base64 encoded logo
   const [avatarBase64, setAvatarBase64] = useState("");

   // Function to handle logo change
   const handleAvatarImageChange = (e) => {
     const file = e.target.files[0];
     const reader = new FileReader();
     reader.onloadend = () => {
      setAvatarBase64(reader.result);
     };
     reader.readAsDataURL(file);
   };
  
   // State for storing base64 encoded logo
   const [coverImageBase64, setCoverImageBase64] = useState("");

   // Function to handle logo change
   const handleCoverImageChange = (e) => {
     const file = e.target.files[0];
     const reader = new FileReader();
     reader.onloadend = () => {
      setCoverImageBase64(reader.result);
     };
     reader.readAsDataURL(file);
   };
  
   

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // console.log("Data from Form::", data);

    // const formdata = new FormData();
    // formdata.append("username", data.username);
    // formdata.append("fullname", data.fullname);
    // formdata.append("email", data.email);
    // formdata.append("password", data.password);
    // if (avatar) {
    //   formdata.append("avatar", avatar);
    // }
    // if (coverImage) {
    //   formdata.append("coverImage", coverImage);
    // }

    const newData = {
      ...data,
      avatar: avatarBase64,
      coverImage: coverImageBase64,
    }

    try {
      // const response = await axios.post("http://localhost:5000/api/users/register", newData);
      const response = await Register(newData)

      console.log("The response in Forntend is", response);

      if (response.statusCode === 200) {
        toast({
          description: "User successfully registered",
        });
        reset();
      }
    } catch (error) {
      console.log("The Error 149 is:", error);
      //console.log("The Error Responce is:", error?.response?.data);
      
      if (error?.response?.status == 409) {
        toast({
          description:"Username or Email already registered !!",
        }); 
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
      } else {
        // Something else happened while setting up the request
        console.error("Error while sending the request:", error.message);
      }
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-black">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Create your account to get started.
          </p>
        </div>
        <form target="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

          <div>
            <div className="space-y-2">
              <Label htmlFor="username">Username *</Label>
              <Input
                {...register("username")}
                name="username"
                id="username"
                placeholder="Enter your username"
              />
            </div>
            {errors.username && <span className="text-red-500 text-xs">{errors.username.message}</span>}
          </div>

          <div>
            <div className="space-y-2">
              <Label htmlFor="fullname">Full Name *</Label>
              <Input
                {...register("fullname")}
                id="fullname"
                name="fullname"
                placeholder="Enter your full name"
              />
            </div>
            {errors.fullname && <span className="text-red-500 text-xs">{errors.fullname.message}</span>}
          </div>

          <div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                {...register("email")}
                id="email"
                name="email"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </div>

          <div>
            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <Input
                {...register("password")}
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password.message}</span>
            )}
          </div>

          <div>
            <div className="space-y-2">
              <Label htmlFor="profile-picture">Profile Picture *</Label>
              <Input
                {...register("avatar")}
                onChange={handleAvatarImageChange}
                name="avatar"
                id="profile-picture"
                type="file"
              />
            </div>
            {errors.avatar?.message && (
              <span className="text-red-500 text-xs">
                {(errors.avatar as FieldError).message}
              </span>
            )}
          </div>

          <div>
            <div className="space-y-2">
              <Label htmlFor="cover-photo">Cover Photo *</Label>
              <Input
                {...register("coverImage")}
                onChange={handleCoverImageChange}
                name="coverImage"
                id="cover-photo"
                type="file"
              />
            </div>
            {errors.coverImage?.message && (
              <span className="text-red-500 text-xs">
                {(errors.coverImage as FieldError).message}
              </span>
            )}
          </div>
          
            
          {/* <Button className="w-full hover:bg-green-400 gap-2 justify-center" type="submit" disabled>
            <Spinner/>
            Sign Up
          </Button> */}
          <Button className="w-full hover:bg-green-400" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
