import { NextResponse } from "next/server"
import {PrismaClient} from '@prisma/client'



const prisma = new PrismaClient()
export async function POST(request) {
    let userData = await request.json()
    const user = await prisma.user.findUnique({
        where: {
            email: userData.email,
            password: userData.password
          }
    })
    if (user){
        return  NextResponse.json({"status":200,"data":"User exists"})
    }else{
        return  NextResponse.json({"status":200,"data":"user dosen't exists"})
    }
}