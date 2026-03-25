import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChildDetails } from "../services/api";

function ChildDetails() {
  const { id } = useParams();
  const [child, setChild] = useState({});

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await getChildDetails(id);
    setChild(res.data);
  };

  return (
    <div>
      <h2>{child.name}</h2>
      <p>Reg No: {child.reg_no}</p>
      <p>Vaccinated: {child.vaccinated}</p>
      <p>Pending: {child.pending}</p>
    </div>
  );
}

export default ChildDetails;