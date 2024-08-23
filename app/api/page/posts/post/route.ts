import { NextResponse } from "next/server";

const access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN
const user_id = process.env.NEXT_PUBLIC_USER_ID
const page_id = process.env.NEXT_PUBLIC_PAGE_ID
const endpoint = `https://graph.facebook.com/v20.0/${page_id}/posts?access_token=${access_token}`;


export async function GET() {
  try{
    const response = await fetch(endpoint)

    if (response){
      const res = await response.json()
      return NextResponse.json({
        data: res
      });
    }else{
      return NextResponse.json({
        message: "Some error occured!!!",
      });
    }
  }catch(error){
    return error;
  }

}
