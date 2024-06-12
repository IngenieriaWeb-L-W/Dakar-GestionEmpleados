import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
//import prisma from "./config/prisma"
//import Auth0 from "next-auth/providers/auth0"

 
const prisma = new PrismaClient();
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
})
