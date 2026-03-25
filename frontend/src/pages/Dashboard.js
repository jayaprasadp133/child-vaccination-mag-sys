import { useEffect, useState } from "react";
import { getChildren, deleteChild } from "../services/api";
import ChildCard from "../components/ChildCard";

function Dashboard() {

  const [children, setChildren] = useState([]);

  useEffect(() => {
    loadChildren();
  }, []);

  const loadChildren = async () => {
    const res = await getChildren();
    setChildren(res.data);
  };

  const handleDelete = async (id) => {
    await deleteChild(id);
    loadChildren();
  };

  return (
    <div className="container">

      <h2>Registered Children</h2>

      {children.map((child) => (
        <ChildCard
          key={child.id}
          child={child}
          onDelete={handleDelete}
        />
      ))}

    </div>
  );
}

export default Dashboard;