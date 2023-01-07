import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "me@email.com" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email !== "test@example.com" && password !== "1234") {
          throw new Error("invalid credetials");
        }
        return {
          id: "1234",
          name: "Tester",
          email: "test@example.com",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXT_SECRET,
};

export default NextAuth(authOptions);
