export const authConfig = {
    pages:{
        signIn:"/login",
    },
    providers:[],
    
    callbacks:{
        async jwt({ token, user }){
            if(user){
                token.id = user.id
            }
            return token
        },
        async session({ session, token }){
            if(token){
                session.user.id = token.id
            }
            return session
        },
        authorized({ auth, request }){
            const user = auth?.user;
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
            const isOnProfilePage = request.nextUrl?.pathname.startsWith("/profile");
             
            if(user && isOnLoginPage){
                return Response.redirect(new URL("/", request.nextUrl));
            
             }
             if(!user && isOnProfilePage){
                
                return Response.redirect(new URL("/login", request.nextUrl));
   
             }
             else{
                return true;
            
             }
         
         }
     }
 }
    