'use client'
import { FaGoogle } from "react-icons/fa";
import { Person, Envelope, Lock } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
// import { redirect } from "next/dist/server/api-utils";
import { redirect } from 'next/navigation'
import Image from "next/image";

const SignUp = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        // console.log("Form Submitted Data:", user);

        const {data, error} = await authClient.signUp.email({
        email: user.email,
        password: user.password,
        name: user.fullName,
        image: user.image 
        }) 
        

   console.log(data, error) 

if (error) {
    console.log(error.message)  
    return
}

if (data) {
    redirect('/')
}
        // if (data.password !== data.confirmPassword) {
        //     alert("Passwords do not match!");
        //     return;
        // }
    };

    return (
        <div className="mt-[100px] mb-[60px] max-w-[1400px] flex flex-col items-center ">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-light text-gray-800">Create Account</h1>
                <p className="text-gray-500 mt-2">Start your adventure with Wanderlust</p>
            </div>

            {/* Form Card */}
            <Form onSubmit={onSubmit} className="flex w-[450px] mx-auto flex-col gap-5 bg-white p-10 rounded-xl shadow-sm border border-gray-100">
                
                {/* Full Name Field */}
                <TextField isRequired name="fullName" type="text">
                    <Label className="font-medium text-gray-700 ">Full Name</Label>
                    <div className="relative flex items-center">
                        <Person className="absolute left-3 text-gray-400" />
                        <Input 
                            name="fullName" 
                            className="pl-10 bg-gray-50 border-none rounded-md" 
                            placeholder="Enter your name" 
                        />
                    </div>
                    <FieldError />
                </TextField>

                {/* Email Address Field */}
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    // validate={(value) => {
                    //     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    //         return "Please enter a valid email address";
                    //     }
                    //     return null;
                    // }}
                >
                    <Label className="font-medium text-gray-700">Email Address</Label>
                    <div className="relative flex items-center">
                        <Envelope className="absolute left-3 text-gray-400" />
                        <Input 
                            name="email" 
                            className="pl-10 bg-gray-50 border-none rounded-md" 
                            placeholder="Enter your email" 
                        />
                    </div>
                    <FieldError />
                </TextField>

           {/* img-url Field */}
                <TextField name="image" type="url">
                    <Label className="font-medium text-gray-700">Image URL</Label>
                    <div className="relative flex items-center">
                        <Image className="absolute left-3 text-gray-400" size={18} />
                        <Input 
                            name="image" 
                            className="pl-10 bg-gray-50 border-none rounded-md" 
                            placeholder="Enter image URL" 
                        />
                    </div>
                    <FieldError />
                </TextField>

                {/* Password Field */}
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    // validate={(value) => {
                    //     if (value.length < 8) return "Password must be at least 8 characters";
                    //     if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                    //     if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                    //     return null;
                    // }}
                >
                    <Label className="font-medium text-gray-700">Password</Label>
                    <div className="relative flex items-center">
                        <Lock className="absolute left-3 text-gray-400" />
                        <Input 
                            name="password" 
                            className="pl-10 bg-gray-50 border-none rounded-md" 
                            placeholder="Create a password" 
                        />
                    </div>
                    <FieldError />
                </TextField>

           

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-[#17a2b8] text-white py-6 rounded-md hover:bg-[#138496] transition-colors mt-2">
                    Create Account
                </Button>

                {/* Divider */}
                <div className="relative flex py-3 items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-gray-400 text-sm font-light">Or sign up with</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* Social Button */}
                <Button variant="bordered" className="w-full border-gray-200 py-6 text-gray-700 font-medium flex gap-2">
                    <FaGoogle className="text-red-500" /> Sign Up With Google
                </Button>

                {/* Footer Link */}
                <p className="text-center text-gray-500 mt-4">
                    Already have an account? <span className="text-[#17a2b8] font-semibold cursor-pointer">Sign In</span>
                </p>
            </Form>
        </div>
    );
};

export default SignUp;