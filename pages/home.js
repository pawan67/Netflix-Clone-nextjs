import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useUserContext } from "../context/userContext";

function HomePage() {
  const { logOutUser, user } = useUserContext();
  const router = useRouter();
  useEffect(() => {
    
  });
  

  return (
    <div>
      home
      {user ? (
        <button
          
        >
          CLik me to log out
        </button>
      ) : (
        ""
      )}
      {/* {user.displayName} */}
    </div>
  );
}

export default HomePage;
