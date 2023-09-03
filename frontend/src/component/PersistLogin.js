import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { useSelector } from "react-redux";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const getRefreshToken = useRefreshToken();

  const { userInfo, isLoading: load } = useSelector((state) => state.auth);

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await getRefreshToken();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    // persist added here AFTER tutorial video
    // Avoids unwanted call to verifyRefreshToken
    console.log(userInfo);
    !userInfo?.data ? verifyRefreshToken() : setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);
  if (isLoading) return <p>Loading...</p>;
  return <>{<Outlet />}</>;
};

export default PersistLogin;
