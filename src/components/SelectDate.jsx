import { useState } from "react";

export default function SelectDate() {
  const [selectedYear, setSelectedYear] = useState("2020-2021");
  const [selectedMonth, setSelectedMonth] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f0f0f0",
      minHeight: "100vh",
    },
    imgHeader: {
      width: "100%",
    },
    nav: {
      backgroundColor: "#003366",
      padding: "10px 20px",
    },
    navList: {
      display: "flex",
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    navItem: {
      color: "white",
      padding: "5px 15px",
      cursor: "pointer",
    },
    main: {
      padding: "20px",
      backgroundColor: "white",
      margin: "20px auto",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      maxWidth: "600px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    formTitle: {
      fontSize: "18px",
      marginBottom: "20px",
      alignItems: "center",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    select: {
      width: "200px",
      padding: "5px",
      borderRadius: "3px",
      border: "1px solid #ccc",
    },
    footer: {
      backgroundColor: "#003366",
      color: "white",
      textAlign: "center",
      padding: "10px",
      position: "fixed",
      bottom: 0,
      width: "100%",
    },
  };

  return (
    <div style={styles.container}>
      <img
        src="https://ashwin.bih.nic.in/Ashwin/images/Aheader.jpg"
        alt="Header"
        style={styles.imgHeader}
      />

      <nav style={styles.nav}>
        <ul style={styles.navList}>
          {["HOME", "ACTION", "REPORTS", "MASTER REPORTS"].map((item) => (
            <li key={item} style={styles.navItem}>
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <main style={styles.main}>
        <h3 style={styles.formTitle}>आशा दावा का प्रपत्र</h3>
        <div style={styles.formGroup}>
          <div>
            <label style={styles.label}>वित्तीय वर्ष [*]</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={styles.select}
            >
              <option value="2020-2021">2020-2021</option>
              <option value="2021-2022">2021-2022</option>
              <option value="2022-2023">2022-2023</option>
              <option value="2023-2024">2023-2024</option>
            </select>
          </div>
          <div>
            <label style={styles.label}>माह [*]</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              style={styles.select}
            >
              <option value="">Select month</option>
              {months.map((month) => (
                <option key={month} value={month.toLowerCase()}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </main>

    </div>
  );
};
