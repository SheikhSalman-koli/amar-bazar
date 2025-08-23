import dbconnect , {collectionName } from "@/lib/dbconnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async(req, {params})=>{
    const id =await params?.id
    const query = {_id: new ObjectId(id)}
    const database = dbconnect(collectionName.PRODUCTS)

    const singleProduct = await database.findOne(query)

    return NextResponse.json(singleProduct)
}
