import { NextResponse } from "next/server";

const access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN
const user_id = process.env.NEXT_PUBLIC_USER_ID
const page_id = process.env.NEXT_PUBLIC_PAGE_ID
const endpoint = `https://graph.facebook.com/v20.0/${page_id}/conversations?access_token=${access_token}`;


export async function GET() {
  try{
    const response = await fetch(endpoint)

    if (response){
      const res = await response.json()
      // console.log("response: ", res.data[0]);
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


// async function getPage() {
//   try{
//     const response = await fetch(endpoint)
//     console.log("fetcing....");
//     if (response){
//       const res = await response.json()
//       console.log("response: ", res.data[0]);
//     }else{
//       console.log("sorry");
//     }
//   }catch(error){
//     console.log("error: ", error);
//   }
// }