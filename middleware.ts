import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function middleware(request: NextRequest) {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  // here is no mocked data
  console.log("data: ", data);
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\.jpg$).*)"],
};
