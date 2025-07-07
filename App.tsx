import { Routes } from "@routes/index";
import { AuthContextProvider } from "context/AuthContext";


export default function App() {
  

  return (
    <AuthContextProvider>
      <Routes/>
    </AuthContextProvider>
  );
}
