import { useState, useEffect } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gffbqldvokpadhsmcrdj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZmJxbGR2b2twYWRoc21jcmRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0NjMxNDQsImV4cCI6MjAzNTAzOTE0NH0.6uSLWmq33rddRKhhnAY524n1n2GMW9sKocdQpj7yQF8",
);

function App() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session?.user);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        switch (event) {
          case "SIGNED_IN":
            setSession(session?.user);
            break;
          case "SIGNED_OUT":
            setSession(null);
            break;
          default:
        }
      },
    );
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  async function login() {
    const { data, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (error) {
      alert(error.message);
    }
  }

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      <NavBar />
      <Login
        login={login}
        logout={logout}
        setEmail={setEmail}
        setPassword={setPassword}
        session={session}
      />
    </div>
  );
}

export default App;
