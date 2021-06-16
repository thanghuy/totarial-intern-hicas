  
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const AuthMain = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.auth.isLoading);
  useEffect(() => {
    dispatch({ type: "CHECK_LOGIN_USER" }); 
  }, []);
  return (
    <Fragment>
      {isLoading ? "" : children}
    </Fragment>
  );
};

export default AuthMain;