import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth, { provider } from "@/firebase/firebase";
import toast from "react-hot-toast";
import { ProductProvider } from "@/context/ContextProvider";
import { Loader } from "lucide-react";

export default function Form() {
  let [login, setLogin] = useState("signup");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let { loading, setLoading, setUserInfo } = useContext(ProductProvider);

  async function submitHandler() {
    if (login == "signup") {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(false);
          toast.success(`welcome ${user.email.split("@")[0]}`);
          setLogin("login");
        })
        .catch((error) => {
          toast.error(error.code);
          setLoading(false);
        });
    } else {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(false);
          toast.success(`welcome ${user.email.split("@")[0]}`);
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.code);
          setLoading(false);
        });
    }
  }

  async function signinWithGoogle() {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserInfo(user);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.code);
        setLoading(false);
      });
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            {login == "signup" ? "Sign up" : "Login"} to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            {login == "signup" ? (
              <Button variant="link" onClick={() => setLogin("login")}>
                Login
              </Button>
            ) : (
              <Button variant="link" onClick={() => setLogin("signup")}>
                Sign Up
              </Button>
            )}
          </CardAction>
        </CardHeader>
        <CardContent>
          {/* form  */}
          <div className="flex flex-col gap-6">
            {login == "signup" && (
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          {login == "signup" ? (
            <>
              <Button onClick={submitHandler} type="submit" className="w-full">
                {loading ? <Loader className="animate-spin" /> : "Sign up"}
              </Button>
              <Button
                onClick={signinWithGoogle}
                variant="outline"
                className="w-full"
              >
                {loading && <Loader className="animate-spin" />} Sign up with
                Google
              </Button>
            </>
          ) : (
            <>
              <Button onClick={submitHandler} type="submit" className="w-full">
                {loading ? <Loader className="animate-spin" /> : "Login"}
              </Button>
              <Button
                onClick={signinWithGoogle}
                variant="outline"
                className="w-full"
              >
                {loading && <Loader className="animate-spin" />} Login with
                Google
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
