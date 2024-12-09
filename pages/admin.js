// pages/admin.js
import { useState, useEffect } from "react";

export default function Admin() {
  const [form1, setForm1] = useState("");
  const [form2, setForm2] = useState("");

  useEffect(() => {
    fetch("/api/links")
      .then((res) => res.json())
      .then((data) => {
        setForm1(data.form1 || "");
        setForm2(data.form2 || "");
      });
  }, []);

  const handleSave = async () => {
    await fetch("/api/links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form1, form2 }),
    });
    alert("Links saved successfully!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Panel</h1>
      <div style={{ marginBottom: "1rem" }}>
        <label>Google Form 1:</label>
        <input
          type="url"
          value={form1}
          onChange={(e) => setForm1(e.target.value)}
          style={{ marginLeft: "1rem", width: "300px" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Google Form 2:</label>
        <input
          type="url"
          value={form2}
          onChange={(e) => setForm2(e.target.value)}
          style={{ marginLeft: "1rem", width: "300px" }}
        />
      </div>
      <button onClick={handleSave} style={{ padding: "0.5rem 1rem" }}>
        Save Links
      </button>
    </div>
  );
}
