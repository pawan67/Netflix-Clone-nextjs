import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Welcome from "../components/home/Welcome";
import { useUserContext } from "../context/userContext";

function HomePage() {
  const { logOutUser, user } = useUserContext();
  const router = useRouter();
  useEffect(() => {
    // logOutUser()
  });

  if(user == null){
      return <div>
          <Welcome/>
      </div>
  }

  return (
    <div>
      home
      {user ? (
        <button
          onClick={()=> logOutUser()}
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
