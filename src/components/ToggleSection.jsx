import { useState } from "react";

export default function ToggleSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <section
      className={`group border bg-gray-100 text-gray-500 px-4 py-4 ${!open ? "cursor-pointer" : ""}`}
      onClick={() => {
        if (!open) setOpen(true);
      }}
    >
      <div className="flex justify-between items-center uppercase text-md">
        <span className={`${!open ? "group-hover:underline underline-offset-4" : ""}`}>{title}</span>
        {open ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="uppercase underline"
          >
            close
          </button>
        ) : (
          <span className="underline">open</span>
        )}
      </div>

      {open && <div className="text-md space-y-8 mt-8">{children}</div>}
    </section>
  );
}
