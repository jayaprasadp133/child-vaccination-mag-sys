import { useState } from "react";
import { getStatus } from "../services/api";

function CheckStatus() {
  const [reg, setReg] = useState("");
  const [data, setData] = useState(null);

  const handleCheck = async () => {
    const res = await getStatus(reg);
    setData(res.data);
  };

  return (
    <div>
      <input
        value={reg}
        onChange={(e) => setReg(e.target.value)}
        placeholder="Enter Reg No"
      />
      <button onClick={handleCheck}>Check</button>

      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>Vaccinated: {data.vaccinated}</p>
          <p>Pending: {data.pending}</p>
        </div>
      )}
    </div>
  );
}

export default CheckStatus;