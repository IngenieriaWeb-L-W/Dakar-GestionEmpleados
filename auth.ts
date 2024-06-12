import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
//import prisma from "./config/prisma"
import Auth0 from "next-auth/providers/auth0"

 
const prisma = new PrismaClient();
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0({
      wellKnown: `https://${process.env.AUTH0_DOMAIN}/`,
      issuer: process.env.AUTH0_DOMAIN,
      authorization: `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&prompt=login`,
      clientId: `${process.env.AUTH0_CLIENT_ID}`,
      clientSecret: `${process.env.AUTH0_CLIENT_SECRET}`,
    }),
],
})