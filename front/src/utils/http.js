export const fetchGET = async () => {
  const response = await fetch("http://localhost:3000/getUsers");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return resData;
};

export const fetchPOST = async (dataToPost) => {
  const response = await fetch("http://localhost:3000/findUser", {
    method: "POST",
    body: JSON.stringify(dataToPost),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return resData;
};
