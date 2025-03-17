import axios from "axios";

const client = axios.create({
  baseURL: "https://sarirniroo.ir/sarir/",
});

export const getItems = async (id: string | number) => {
  const { data } = await client(`cards.php?id=${id}`);
  return data;
};
export const getservices = async () => {
  const { data } = await client("cards.php");
  return data;
};
export const getSample = async () => {
  const { data } = await client("sample-work.php");
  return data;
};
export const getCustomers = async () => {
  const { data } = await client("");
  return data.customers;
};
export const getCompany = async () => {
  const { data } = await client("info.php");
  return data;
};
export const getProjects = async () => {
  const { data } = await client("projects.php");
  return data;
};