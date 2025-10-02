import React from "react";
import bglogin from "@/assets/images/bglogin.png";
import img from "@/assets/images/img.jpg";

const SignUp: React.FC = () => {
  return (
    <div
      className="pt-10 items-center justify-center flex min-h-screen pb-10 px-4"
      style={{
        backgroundImage: `url(${bglogin})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Conteneur principal */}
      <div className="flex w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Image à gauche */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
          <img
            src={img}
            alt="Illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Formulaire à droite */}
        <main className="flex flex-col justify-center px-8 pt-10 pb-8 w-full md:w-1/2">
          <header className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-slate-800">
              Créer un compte
            </h1>
            <p className="mt-2 text-center text-slate-600">
              Remplissez le formulaire pour vous inscrire
            </p>
          </header>

          <section className="mt-8 w-full">
            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-slate-700"
                >
                  Prénom
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Votre prénom"
                  className="mt-1 w-full p-3 border rounded-md border-[#D0D5DD] text-slate-700"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-slate-700"
                >
                  Nom
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Votre nom"
                  className="mt-1 w-full p-3 border rounded-md border-[#D0D5DD] text-slate-700"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="exemple@email.com"
                  className="mt-1 w-full p-3 border rounded-md border-[#D0D5DD] text-slate-700"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 w-full p-3 border rounded-md border-[#D0D5DD] text-slate-700"
                />
              </div>
            </div>
          </section>

          <div className="mt-8 w-full font-semibold ">
            <button
              className="w-full px-5 py-3 bg-blue-800 text-white rounded cursor-pointer"
              type="button"
            >
              S'inscrire
            </button>

            <p className="mt-4 text-center text-sm text-slate-600">
              Vous avez déjà un compte ?{" "}
              <a href="/login" className="text-blue-800 underline">
                Se connecter
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
