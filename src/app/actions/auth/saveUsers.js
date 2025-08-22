"use server"
import dbconnect, { collectionName } from "@/lib/dbconnect"


export const saveUsers =async (payload)=> {

    const database = dbconnect(collectionName.USERS)

    const {email, password} = payload
    if(!email || !password){
        return {message: "anauthorized assecc!"}
    }

    const existingUser = await database.findOne({email: payload?.email})

    if(existingUser) return null

    const result =await database.insertOne(payload)
    result.insertedId = result.insertedId.toString()
    return result
}