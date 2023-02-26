import { useState, useEffect } from "react";
import paginate from "./paginate";
const propertyUrl =
  "https://realty-in-us.p.rapidapi.com/properties/v2/list-sold?offset=0&limit=100&city=New%20York%20City&state_code=NY&sort=sold_date";
const agentUrl =
  "https://realty-in-us.p.rapidapi.com/agents/list?postal_code=11234&offset=0&limit=40&sort=recent_activity_high&types=agent";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9ee8477928msh123a659c3e0e11cp1ad15ejsn9a07e4d818a9",
    "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
  },
};

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [properties, setProperties] = useState([]);
  const [agents, setAgents] = useState([]);

  const getProducts = async () => {
    const response = await fetch(propertyUrl, options);
    const data = await response.json();
    const properties = data.properties;
    setProperties(properties);
    setData(paginate(properties));
    setLoading(false);
  };
  const getAgent = async () => {
    const response = await fetch(agentUrl, options);
    const data = await response.json();
    const { agents } = data;
    setAgents(agents);
  };
  useEffect(() => {
    getAgent();
  }, []);
  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data, properties, agents, setProperties };
};

export default useFetch;
