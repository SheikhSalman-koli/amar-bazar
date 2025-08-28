import dbconnect, { collectionName } from "@/lib/dbconnect"
import { NextResponse } from "next/server"

export const GET = async()=>{

    const database = await dbconnect(collectionName.PRODUCTS)
    const allProducts =await database.find().toArray()

    return NextResponse.json(allProducts)

}