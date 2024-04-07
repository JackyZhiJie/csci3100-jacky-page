let token: any = localStorage.getItem("token");

export const getRequestOptions: any = {
  method: "GET",
  credentials: "include",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
export let baseUrl = "http://localhost:8080/api/web/";

export const postRequestOptions: any = {
  method: "POST",
  withCredentials: "include",
  headers: { Authorization: `Bearer ${token}` },
};
export const getAxiosRequestOptions: any = {
  method: "GET",
  withCredentials: "include",
  headers: { Authorization: `Bearer ${token}` },
};

export const handleAuth = (status: number) => {
  if (status == 200) {
  } else if (status == 401) {
    window.location.href = "/login";
  }
};

export async function checkAuth() {
  let url = baseUrl + "auth";

  fetch(url, getRequestOptions).then((res: any) => {
    handleAuth(res.status);
    return res.json();
  });
}

export default {};
