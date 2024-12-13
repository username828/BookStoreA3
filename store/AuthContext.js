import { useRouter } from "next/router";
import { createContext,useContext,useState } from "react";

const AuthContext=createContext({

    user:null,
    token:null,
    login:function(userName,email){},
    logout:function(){}
})

export function AuthContextProvider(props){
    const router=useRouter()
    const [user,setUser]=useState(null);
    const [token,setToken]=useState(null);


    const login = async (userName, email) => {
        const res = await fetch(`/api/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                username: userName,
                email: email
            }),
            headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
    
        if (res.ok) {
            setUser(data.user);
            setToken(data.token);
            return true; 
        } else {
            return data.message || "An error occurred"; 
        }
    };
    

    const logout=async()=>{
        const res=await fetch("/api/auth/logout",{
            method:"POST",
            headers:{"Content-Type":"application/json"}
        })
        const data=await res.json();
        setUser(null)
        setToken(false)

        router.push('/login')
    }

    const context={
        user,
        token,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={context}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext)
export default AuthContext

