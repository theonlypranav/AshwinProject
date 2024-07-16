import { useState } from "react";

export default function SelectDate() {
  const [selectedYear, setSelectedYear] = useState("2020-2021");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [showNewForm, setShowNewForm] = useState(false);

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
    input: {
      width: "200px",
      padding: "5px",
      borderRadius: "3px",
      border: "1px solid #ccc",
    },
    button: {
      backgroundColor: "#007BFF",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
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
    buttonGroup: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
    },
    formRow: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const handleProceedClick = () => {
    setShowNewForm(true);
  };

  const handleBackClick = () => {
    setShowNewForm(false);
  };

  const handleSaveClick = () => {
    alert("Activity details have been saved! Payment will be processed");
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
        {!showNewForm ? (
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
            <button onClick={handleProceedClick} style={styles.button}>Proceed</button>
          </div>
        ) : (
          <div style={styles.formGroup}>
            <div style={styles.formRow}>
              <div>
                <label style={styles.label}>Payment</label>
                <select style={styles.select}>
                  <option value="">Select payment</option>
                  <option value="option1">By Cash</option>
                  <option value="option2">By Bank Account</option>
                </select>
              </div>
              <div>
                <label style={styles.label}>Activity Type</label>
                <select style={styles.select}>
                  <option value="">Select activity type</option>
                  <option value="type1">Community Service</option>
                  <option value="type2">Private Health</option>
                </select>
              </div>
            </div>
            <div style={styles.formRow}>
              <div>
                <label style={styles.label}>Duration of Activity</label>
                <select style={styles.select}>
                  <option value="">Select range</option>
                  <option value="option1">0 to 2 weeks</option>
                  <option value="option2">2 weeks to 6 weeks</option>
                  <option value="option3">6 weeks to 10 weeks</option>
                </select>
              </div>
              <div>
                <label style={styles.label}>Number of Absent Days</label>
                <input type="text" style={styles.input} />
              </div>
            </div>
            <div style={styles.formRow}>
              <div>
                <label style={styles.label}>Activity Code</label>
                <input type="text" style={styles.input} />
              </div>
              <div>
                <label style={styles.label}>No of Beneficiaries</label>
                <select style={styles.select}>
                  <option value="">Select number</option>
                  <option value="1">1-5</option>
                  <option value="2">6-15</option>
                  <option value="3">More than 15</option>
                </select>
              </div>
            </div>
            
            <div style={styles.buttonGroup}>
              <button onClick={handleBackClick} style={styles.button}>Back</button>
              <button onClick={handleSaveClick} style={styles.button}>Save</button>
            </div>
          </div>
        )}
      </main>

      <footer style={styles.footer}>
        <p>Developed by NIC, Bihar State Centre</p>
      </footer>
    </div>
  );
}
