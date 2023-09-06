import { useAuthContext } from "./useAuthContext";
import { useEffect, useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import { signInWithGoogle } from '../firebase/config';
import { useRouter } from "next/navigation";

export const useLogin = () =>{
    const router = useRouter();
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState<null | any>(null)
    const [isPending, setIsPending] = useState(false);
    const {dispatch}:any = useAuthContext();

    const login = async (email:string, password:string) => {
        setError(null);
        setIsPending(true);

        //sign the user in
        try{
            const res = await projectAuth.signInWithEmailAndPassword(email, password);
            if(res){
                router.push('/')
            }
            //dispatch login action
            dispatch({type: 'LOGIN', payload: res.user})

            //update state
            if(!isCancelled){
                setIsPending(false);
                setError(null);
            }
        }catch(err:any){
            if(!isCancelled){
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    const googleLogin = async () =>{
        setError(null);
        setIsPending(true);
        try{
            const res = await signInWithGoogle();
            if(res){
                router.push('/')
            }

            //dispatch login action
            dispatch({type: 'LOGIN', payload: res.user})

            //update state
            if(!isCancelled){
                setIsPending(false);
                setError(null);
            }
        }catch(err:any){
            if(!isCancelled){
                setError(err.message);
                setIsPending(false);
            }
        }
    }

    useEffect(() =>{
        setIsCancelled(false);
        return () => setIsCancelled(true);
    },[])

    return { login, error, isPending, googleLogin}
}