import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";
import {Resend} from "resend"
const resend = new Resend(process.env.RESEND_API_KEY);




export async function POST(req:NextRequest,res:NextResponse){
    const {name, email, message} = await req.json()
   try{
    const data = await resend.emails.send({
        from: `${email} <onboarding@resend.dev>`,
        to: ['maxicejas12354@gmail.com'],
        subject: `${name}`,
        react: EmailTemplate({ message: message }),
    })
    return NextResponse.json({message: "Email enviado con exito"},{status: 200})
   }
   catch(error){
        console.log(error)
        return NextResponse.json({message: "Error"},{status: 500})
    }
} 
