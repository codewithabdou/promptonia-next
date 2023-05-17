
const useAuth = ({ user,setUser }) => {
  const SignIn = () => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    if (userStorage) {
      setUser(userStorage);
      return;
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Habouche khaled",
          image: "/assets/images/logo.svg",
          email: "kk_habouche@esi.dz",
        })
      );
      SignIn();
    }
  };

  const SignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return {SignIn,SignOut}
};


export default useAuth;