import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TransForm } from "../components/form/TransForm";
import { Layout } from "../components/layout/Layout";
import { TransTable } from "../components/table/TransTable";
import { fetchTrans } from "../utils/axiosHelper";

const Dashboard = () => {
  const navigate = useNavigate();
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    getTrans();

    const user = JSON.parse(sessionStorage.getItem("user"));
    !user && navigate("/");
  }, []);

  const getTrans = async () => {
    const { trans } = await fetchTrans();

    setTrans(trans);
  };
  console.log(trans);
  return (
    <Layout>
      <div className="form">
        <TransForm />
      </div>
      <div className="table">
        <TransTable trans={trans} />
      </div>
    </Layout>
  );
};

export default Dashboard;
