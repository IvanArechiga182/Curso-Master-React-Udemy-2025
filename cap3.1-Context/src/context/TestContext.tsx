import { createContext } from "react";
// import type { Course } from "../types/Course";
import type { User } from "../types/User";

type TestContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const TestContext = createContext<TestContextType | null>(null);
