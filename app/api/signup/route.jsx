import { NextResponse } from "next/server"
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function POST(request) {
    let Userdata = await request.json()
    const saveData = await prisma.user.create({data:Userdata})
    return NextResponse.json({"status":200,"data":"user registerd successfully"})
}