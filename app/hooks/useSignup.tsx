import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState<any | null>();
    const [isPending, setIsPending] = useState(false);
    const { dispatch }: any = useAuthContext();

    const signup = async (
        email: string,
        password: string,
        displayName: string
    ) => {
        setError(null);
        setIsPending(true);

        try {
        //signup user
        const res = await projectAuth.createUserWithEmailAndPassword(
            email,
            password
        );

        if (!res) {
            throw new Error("Could not complete signup");
        }

        //add display name to user
        await res.user?.updateProfile({ displayName });

        //dispatch login action
        dispatch({ type: "LOGIN", payload: res.user });

        //update state
        if (!isCancelled) {
            setIsPending(false);
            setError(null);
        }
        } catch (err: any) {
        if (!isCancelled) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
        }
    };

    useEffect(() => {
        setIsCancelled(false);
        return () => setIsCancelled(true);
    }, []);

    return { error, isPending, signup };
};
