const NextAuth = require('next-auth/next');
const GoogleProvider = require('next-auth/providers/google');
const { connectDB } = require('../../../utils/database');

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ profile }) {
      console.log(profile);
      try {
        await connectDB();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
