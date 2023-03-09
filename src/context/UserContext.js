import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [mailid, setmailid] = useState();
  const [forgotUser, setforgotUser] = useState({});
  const [isvisible, setIsvisible] = useState(false);
  const [user, setUser] = useState("");
  const [bookingDetails, setBookingDetails] = useState({});

  return (
    <UserContext.Provider
      value={{
        mailid,
        setmailid,
        forgotUser,
        setforgotUser,
        isvisible,
        setIsvisible,
        user,
        setUser,
        bookingDetails,
        setBookingDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
