
export const validateEmail = (email) => {
    if (!email) return "Email vacio";
    if (email.length > 35) {
      return "Exceso de caracteres";}
    else if (!/\S+@\S+\.\S+/.test(email)) return "El usuario tiene que ser un email";
    
    return "";
  };

export const validatePassword = (password) => {
    if (password.length < 6 || password.length > 10){
      return "Debe tener entre 6 y 10 caracteres"
    }
    else if (!/^(?=.*\d)/.test(password)) return "Debe tener al menos un numero";
    return "";
  };