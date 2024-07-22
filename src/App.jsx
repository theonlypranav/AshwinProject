import { useState, useEffect } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectDate from "./components/SelectDate";
import supabase from "./supabase.js"
import ActivityDisplay from "./components/ActivityDisplay.jsx";


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
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element= {<ActivityDisplay />} />
        <Route path="add-activity" element= {<SelectDate />} />
        <Route
          index
          element={
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
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
