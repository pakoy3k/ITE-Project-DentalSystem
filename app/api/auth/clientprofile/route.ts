import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET (req: NextRequest) {

    const userId = req.user.sub;
    const userProfile = await prisma.user_data.findUnique({where: {id_user}});

    if (!userProfile) {
        return NextResponse.json({ error: 'User profile not found' }, { status: 404 });
    }
    return NextResponse.json({ userProfile }, { status: 200 })

}

