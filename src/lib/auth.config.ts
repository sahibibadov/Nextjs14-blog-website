export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user?._doc.isAdmin;
        token.email = user?._doc.email;
      }

      return token;
    },
    async session({ session,  token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
        session.user.email = token.email;
      }
      return session;
    },
    authorized({ auth, request }: any) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");


      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }


      if (isOnBlogPage && !user) {
        return false;
      }


      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
