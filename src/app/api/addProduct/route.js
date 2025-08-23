import dbconnect, { collectionName } from "@/lib/dbconnect"
import { NextResponse } from "next/server"


export const POST =async (req)=>{

    const newProduct =await req.json()
    const database = dbconnect(collectionName.PRODUCTS)
    const result = await database.insertOne(newProduct)

    result.insertedId = result.insertedId.toString()

    return NextResponse.json(result)

}