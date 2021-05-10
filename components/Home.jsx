import React, { useState, useEffect } from "react";
import axios from "axios";

import ArgoList from "./ArgoList";
import Form from "./Form";
import Loader from "../Presentationals/Loader";

import getArgonautesApiUrl from "../utils/getApiUrl";

const Home = () => {
  const [Loading, setLoading] = useState(false);
  const [argonautesList, setArgonautesList] = useState([]);

  const handleSubmit = (newArgonaute) => {
    const apiUrl = getArgonautesApiUrl();
    setLoading(true);
    axios
      .post(apiUrl, newArgonaute)
      .then((response) => {
        setArgonautesList([response.data, ...argonautesList]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(async () => {
    setLoading(true);
    const apiUrl = getArgonautesApiUrl();

    const { data } = await axios.get(apiUrl);
    setArgonautesList(data);

    setLoading(false);
  }, []);

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      {Loading && <Loader />}
      <ArgoList list={argonautesList} />
    </>
  );
};

export default Home;
