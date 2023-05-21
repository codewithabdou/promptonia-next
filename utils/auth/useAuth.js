
import { useRouter } from "next/navigation";


const useAuth = ({ user,setUser }) => {
  const router = useRouter();
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
          image: "https://avatars.githubusercontent.com/u/90573541?s=96&v=4",
          email: "kk_habouche@esi.dz",
        })
      );
      SignIn();
    }
  };

  const SignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/")
  };

  return {SignIn,SignOut}
};


export default useAuth;