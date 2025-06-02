interface PillButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function PillButton({ children, onClick }: PillButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer rounded-full px-3 py-1 text-[10px] outline outline-indigo-400/30 transition-shadow duration-300 ease-in-out hover:bg-indigo-50/30 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
      // className="cursor-pointer rounded-full px-3 py-1 text-[10px] outline outline-indigo-400/30 transition-shadow duration-300 ease-in-out hover:bg-indigo-50/30 hover:shadow-md hover:shadow-indigo-400/40 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
    >
      {children}
    </button>
  );
}
