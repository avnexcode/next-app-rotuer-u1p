import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
    
    const isLogin = true;
    if(!isLogin) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    // if (request.nextUrl.pathname.startsWith('/about')) {
    //     if(!isLogin) {
    //         return NextResponse.redirect(new URL('/', request.url));
    //     }
    // }
};


export const config = {
    // matcher: "/dashboard:path*",
    matcher: ["/dashboard:path*", "/about"],
}