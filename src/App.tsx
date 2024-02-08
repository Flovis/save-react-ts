import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const { toast } = useToast();
  interface FormData {
    nom: string;
    prenom: string;
    email: string;
  }
  const [data, setData] = useState<FormData>({
    nom: "",
    prenom: "",
    email: "",
  });

  const handleClick = () => {
    if (data.nom !== "") {
      console.log(data);
    } else {
      toast({
        duration: 1000,
        variant: "destructive",
        title: "Impossible d'envoyer le formulaire",
        description: "Veuillez remplir tout les champs",
      });
    }
  };

  return (
    <>
      <div className=" flex flex-col h-screen w-full justify-center items-center pt-16">
        <h1 className="font-bold">Veiller enregister les agents dans la BD</h1>
        <div className="flex flex-col gap-3 md:w-full w-full p-4 lg:w-[500px]">
          <div className=" flex flex-col gap-2">
            <span className="">Nom</span>
            <Input
              type="email"
              placeholder="Nom"
              onChange={(e) => {
                setData({ ...data, nom: e.target.value });
              }}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <span className="">Prenom</span>
            <Input
              type="text"
              placeholder="Prenom"
              onChange={(e) => {
                setData({ ...data, prenom: e.target.value });
              }}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <span className="">Email</span>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </div>
          <Button onClick={handleClick}>Enregister maintenant</Button>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
