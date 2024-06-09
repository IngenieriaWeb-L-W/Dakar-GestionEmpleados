// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      rol?: string | null;  // Aquí agregas la propiedad `rol`
    };
  }
}
