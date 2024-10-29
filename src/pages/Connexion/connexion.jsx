import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  Checkbox,
} from "@nextui-org/react";
import home from "../../assets/icons/icon-accueil.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default function Connexion() {
  const [selected, setSelected] = useState("login");
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    mot_de_passe: "",
  });
  const [error, setError] = useState(null);

  // Gestion de la saisie du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Soumettre le formulaire d'inscription
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/utilisateurs",
        {
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          mot_de_passe: formData.password,
        }
      );

      console.log("Inscription réussie:", response.data);
      // Optionnel : rediriger ou afficher un message de succès
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      setError("Inscription échouée, veuillez réessayer.");
    }
  };

  return (
    <>
      <div className="fondLogin overflow-hidden">
        <div className="flex justify-center w-full h-full md:place-items-center">
          <div className="absolute top-0 left-0">
            <NavLink to="/">
              <img src={home} alt="icon caddie" className="w-11" />
            </NavLink>{" "}
          </div>
          <Card className="max-w-full m-10 md:w-2/5 xl:w-1/4 md:h-3/4 bg-danger-100 p-2 ">
            <CardBody className="overflow-hidden">
              <Tabs
                fullWidth
                size="lg"
                aria-label="Tabs form"
                variant="light"
                className="bg-danger-50 rounded-xl mb-3"
                selectedKey={selected}
                onSelectionChange={setSelected}
              >
                <Tab
                  key="sign-up"
                  title="Inscription"
                  color="danger"
                  className="py-6 m-0.5"
                >
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input
                      isRequired
                      size="lg"
                      label="Nom"
                      placeholder="Entrez votre nom"
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                    />
                    <Input
                      isRequired
                      size="lg"
                      label="Prénom"
                      placeholder="Entrez votre prénom"
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                    />
                    <Input
                      isRequired
                      size="lg"
                      label="Email"
                      placeholder="Entrez votre email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <Input
                      isRequired
                      size="lg"
                      label="Mot de passe"
                      placeholder="Entrez votre mot de passe"
                      type="password"
                      name="mot_de_passe"
                      value={formData.mot_de_passe}
                      onChange={handleInputChange}
                    />
                    {error && <p className="text-danger-600">{error}</p>}
                    <p className="text-center text-small mt-8">
                      Vous avez déjà un compte?{" "}
                      <Link
                        size="sm"
                        onPress={() => setSelected("login")}
                        className="text-danger-600 underline"
                      >
                        Se connecter
                      </Link>
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Button
                        fullWidth
                        size="lg"
                        className="bg-danger-600 text-white"
                        type="submit"
                      >
                        S&#39;inscrire
                      </Button>
                    </div>
                  </form>
                </Tab>
                <Tab
                  key="login"
                  title="Connexion"
                  color="danger"
                  className="py-6 m-0.5"
                >
                  <form className="flex flex-col gap-4 h-[300px]">
                    <Input
                      isRequired
                      size="lg"
                      label="Email"
                      placeholder="Entrez votre email"
                      type="email"
                    />
                    <Input
                      isRequired
                      size="lg"
                      label="Mot de passe"
                      placeholder="Entrez votre mot de passe"
                      type="password"
                    />
                    <div className="grid grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <Checkbox color="danger" radius="sm">
                          Se souvenir de moi
                        </Checkbox>
                      </div>
                      <div className="text-right">
                        <Link
                          size="sm"
                          className="text-danger-600 underline text-right"
                        >
                          Mot de passe oublié?
                        </Link>
                      </div>
                    </div>
                    <p className="text-center text-small  mt-8">
                      Vous n&#39;avez pas de compte?{" "}
                      <Link
                        size="sm"
                        onPress={() => setSelected("sign-up")}
                        className="text-danger-600 underline"
                      >
                        S&#39;inscrire
                      </Link>
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Button
                        fullWidth
                        size="lg"
                        className="bg-danger-600 text-white"
                      >
                        Connexion
                      </Button>
                    </div>
                  </form>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
