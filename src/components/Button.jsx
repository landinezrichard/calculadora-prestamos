function Button({ operador, fn}) {
  return (
    <button
      type="button"
      className="h-10 w-10 flex items-center justify-center font-bold text-2xl bg-lime-500 text-white rounded-full hover:outline-none hover:ring-2 hover:ring-lime-500 hover:ring-offset-2"
      onClick={fn}
    >
      {operador}
    </button>
  );
}

export default Button;
