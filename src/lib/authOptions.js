import { isRegister } from "@/app/actions/auth/isRegistered";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                // Add logic here to look up the user from the credentials supplied
                const user =await isRegister(credentials)
                console.log("FROM DB", user);
                // const user = credentials

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user 
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],

    pages: {
        signIn: '/auth/login'
    },

    // callbacks: {
    //     async jwt({ token, user }) {
    //         if (user) token.user = user; // store user info in JWT
    //         return token;
    //     },
    //     async session({ session, token }) {
    //         if (token?.user) session.user = token.user;
    //         return session;
    //     },
    // },
    // secret: process.env.NEXTAUTH_SECRET,
}