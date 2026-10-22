import { useState } from "react";
import RandomUser from "./components/RandomUser";
import UserList from "./components/UserList";
import RickAndMorty from "./components/RickAndMorty";
import RickAndMortyDocs from "./components/RickAndMortyDocs";

function App() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "🌟 Tous les exercices" },
    { id: "random-user", label: "Exercice 1.1 à 1.4 — Random User" },
    { id: "user-list", label: "Exercice 1.5 — User List & Filtre" },
    { id: "rick-morty", label: "Exercice 2 — Rick & Morty" },
    { id: "docs", label: "Exercice 2 — User Stories & Wireframes" },
  ];

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 pb-16">
      {/* Barre de navigation principale */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Sélecteur d'onglets pour naviguer entre les exercices */}
            <nav
              className="flex flex-wrap gap-1.5 opacity-0 hover:opacity-100"
              aria-label="Navigation des exercices"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8 space-y-12">
        {/* Exercice 1 (1.1 - 1.4) : Random User Profil Unique */}
        {(activeTab === "all" || activeTab === "random-user") && (
          <section className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Partie 1
              </span>
              <h2 className="text-xl font-bold text-slate-800">
                Exercice 1 — Random User (1.1 à 1.4)
              </h2>
              <p className="text-sm text-slate-500">
                Hook <code>useFetch</code>, gestion des trois états (chargement, erreur, succès), composant <code>UserCard</code> et bouton <code>refetch</code>.
              </p>
            </div>
            <RandomUser />
          </section>
        )}

        {/* Exercice 1.5 : User List & Genre */}
        {(activeTab === "all" || activeTab === "user-list") && (
          <section className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Partie 1.5
              </span>
              <h2 className="text-xl font-bold text-slate-800">
                Exercice 1.5 — Liste de 6 utilisateurs & Choix du genre
              </h2>
              <p className="text-sm text-slate-500">
                Requête avec paramètres d'URL (<code>?results=6&nat=fr&gender=...</code>), rendu par liste avec <code>map</code>, clé unique <code>user.login.uuid</code> et persistance du menu de filtre.
              </p>
            </div>
            <UserList />
          </section>
        )}

        {/* Exercice 2 : Rick and Morty Explorer */}
        {(activeTab === "all" || activeTab === "rick-morty") && (
          <section className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Partie 2
              </span>
              <h2 className="text-xl font-bold text-slate-800">
                Exercice 2 — API Rick and Morty
              </h2>
              <p className="text-sm text-slate-500">
                Recherche de personnages en direct par nom, filtrage par statut et pagination.
              </p>
            </div>
            <RickAndMorty />
          </section>
        )}

        {/* Exercice 2 - Spécifications, User Stories & Wireframes */}
        {(activeTab === "all" || activeTab === "docs") && (
          <section className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Préparation Prochain TD
              </span>
              <h2 className="text-xl font-bold text-slate-800">
                User Stories & Wireframes de l'application Rick & Morty
              </h2>
              <p className="text-sm text-slate-500">
                Dossier de conception d'une application React complète basée sur l'API Rick and Morty.
              </p>
            </div>
            <RickAndMortyDocs />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
