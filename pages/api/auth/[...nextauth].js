import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "eb804dd67b5bba16c7d3",
      clientSecret: "0b8bb523508b1d427871d21a5705d5508139bd2e",
    }),
  ],
  secret: "q1w2e3r4",
};
export default NextAuth(authOptions);
