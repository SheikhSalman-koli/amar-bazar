"use server"
import dbconnect, { collectionName } from "@/lib/dbconnect"

export const isRegister =async (credentials)=>{
    const database = dbconnect(collectionName.USERS)
    const {email, password} = credentials
    const user = await database.findOne({email})

    if(!user) return null
    const isPasswordOk = password == user?.password
    if(!isPasswordOk) return null

    return user
}