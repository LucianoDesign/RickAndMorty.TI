
export const validateEmail = (email) => {
    if (!email) return "Email vacio";
    if (!/\S+@\S+\.\S+/.test(email)) return "El usuario tiene que ser un email";
    if (email.length > 35) return "Exceso de caracteres";
    return "";
  };

export const validatePassword = (password) => {
    if (!/^(?=.*\d)/.test(password)) return "Debe tener al menos un numero";
    return "";
  };