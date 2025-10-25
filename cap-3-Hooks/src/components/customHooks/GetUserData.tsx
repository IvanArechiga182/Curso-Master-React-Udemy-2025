import { useEffect, useState } from "react";

export const GetUserData = (url: string) => {
  const [state, setState] = useState<object>({
    data: null,
    loading: true,
  });

  const fetchUser = async () => {
    try {
      setState({
        ...state,
        loading: true,
      });

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      const { data } = await res.json();

      if (data) {
        console.log(data);
        setState({
          data: data,
          loading: false,
        });
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [url]);

  return {
    data: state.data,
    loading: state.loading,
  };
};
