import { useRouter } from "next/router";
import React from "react";
import { useUserContext } from "../context/userContext";

function HomePage() {
  const { logOutUser, user } = useUserContext();
  const router = useRouter();
  if (user == null) {
    router.push("/");
  }
  console.log(user);

  return (
    <div>
      home
      {user ? (
        <button
          onClick={() => {
            router.push("/");
            logOutUser();
          }}
        >
          CLik me to log out
        </button>
      ) : (
        ""
      )}
      {user.displayName}
    </div>
  );
}

export default HomePage;
