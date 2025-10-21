export const useCaps = (text: string, action?: string) => {
  const textConverted =
    action === "upper" ? text.toUpperCase() : text.toLowerCase();

  const pruebaFuncion = () => {
    return "Probando";
  };

  return {
    original: text,
    converted: textConverted,
    pruebaFuncion,
  };
};
