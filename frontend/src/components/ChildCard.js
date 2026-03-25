import { useNavigate } from "react-router-dom";

function ChildCard({ child, onDelete }) {

  const navigate = useNavigate();

  return (
    <div className="child-card">

      <div
        className="child-name"
        onClick={() => navigate(`/child/${child.id}`)}
      >
        {child.name}
      </div>

      <div className="actions">
        <button
          className="delete-btn"
          onClick={() => onDelete(child.id)}
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default ChildCard;