import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const AdminPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/api/research")
      .then((response) => {
        console.log("📌 API Response:", response.data);
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching research data:", error));
  }, []);

  return (
    <Container>
      <h2>Admin Dashboard - Research Data</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Interest</th>
            <th>Health Areas</th>
            <th>Location</th>
            <th>Challenges</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) ? (
            data.map((item) => (
              <tr key={item._id}>
                <td>{item.name || "N/A"}</td>
                <td>{item.email}</td>
                <td>{item.interest || "N/A"}</td>
                <td>{item.healthAreas?.join(", ") || "N/A"}</td>
                <td>{item.location || "N/A"}</td>
                <td>{item.challenges || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export default AdminPage;
