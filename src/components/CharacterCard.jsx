function CharacterCard({ character }) {
  if (!character) return null;

  const { name, status, species, gender, location, origin, image } = character;

  const statusBadgeStyles = {
    Alive: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]",
    Dead: "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.7)]",
    unknown: "bg-slate-400",
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-2xl hover:border-emerald-400/60 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 ease-out cursor-pointer">
      {/* Effet subtil de lueur façon portail Rick & Morty au hover */}
      <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-300 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-30" />

      <div className="relative overflow-hidden aspect-square bg-slate-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Dégradé d'ombre dynamique en bas de l'image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge de statut avec animation pulse */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-slate-900/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
          <span className="relative flex h-2 w-2">
            {status === "Alive" && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            )}
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${statusBadgeStyles[status] || "bg-slate-400"}`}
            />
          </span>
          <span>{status}</span>
        </div>
      </div>

      <div className="relative z-10 p-5 flex-1 flex flex-col justify-between space-y-4 bg-white">
        <div>
          <h3 className="text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-emerald-600">
            {name}
          </h3>
          <p className="text-xs font-medium text-slate-500">
            {species} • {gender}
          </p>
        </div>

        <div className="space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
          <div className="transition-transform duration-200 group-hover:translate-x-1">
            <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wider">Origine</span>
            <span className="font-medium text-slate-800 line-clamp-1">{origin?.name || "Inconnue"}</span>
          </div>
          <div className="transition-transform duration-200 delay-75 group-hover:translate-x-1">
            <span className="text-slate-400 block text-[11px] font-medium uppercase tracking-wider">Dernière localisation</span>
            <span className="font-medium text-slate-800 line-clamp-1">{location?.name || "Inconnue"}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CharacterCard;
