import dbconnect , {collectionName } from "@/lib/dbconnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET = async(req, {params})=>{
    // const id =await params?.id
    // const query = {_id: new ObjectId(id)}
    // const database = dbconnect(collectionName.PRODUCTS)

    // const singleProduct = await database.findOne(query)

    // return NextResponse.json(singleProduct)
    try {
    const id = params?.id;
    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid product ID" },
        { status: 400 }
      );
    }

    const database = await dbconnect(collectionName.PRODUCTS);
    const singleProduct = await database.findOne({ _id: new ObjectId(id) });

    if (!singleProduct) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(singleProduct, { status: 200 });
  } catch (error) {
    // console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
