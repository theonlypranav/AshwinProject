import { useState } from "react";

export default function SelectDate() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [showNewForm, setShowNewForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const months = [
    "जनवरी",
    "फ़रवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर",
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
      fontSize: "20px", // Increased font size for form title
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
      fontSize: "16px", // Increased font size for labels
    },
    select: {
      width: "200px",
      padding: "8px", // Increased padding for select inputs
      borderRadius: "3px",
      border: "1px solid #ccc",
      fontSize: "16px", // Increased font size for select inputs
    },
    input: {
      width: "200px",
      padding: "8px", // Increased padding for input fields
      borderRadius: "3px",
      border: "1px solid #ccc",
      fontSize: "16px", // Increased font size for input fields
    },
    button: {
      backgroundColor: "#007BFF",
      color: "white",
      padding: "12px 24px", // Increased padding for buttons
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
      fontSize: "16px", // Increased font size for buttons
    },
    backButton: {
      backgroundColor: "#6c757d", // Different background color for the Back button
      color: "white",
      padding: "12px 24px", // Increased padding for buttons
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
      fontSize: "16px", // Increased font size for buttons
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
      gap: "10px", // Reduced gap between elements in form rows
      justifyContent: "center",
      alignItems: "center",
      width: "100%", // Ensures form rows take full width
    },
    radioLabel: {
      fontSize: "16px", // Font size for radio button labels
    },
  };

  const handleProceedClick = () => {
    if (selectedYear === "" || selectedMonth === "") {
      alert("Choose Month and Year correctly!");
      return;
    }
    setShowNewForm(true);
  };

  const handleBackClick = () => {
    setShowNewForm(false);
  };

  const handleSaveClick = () => {
    setFormSubmitted(true);
  };

  const handleDashboardClick = () => {
    setFormSubmitted(false);
    setShowNewForm(false);
    setSelectedYear("");
    setSelectedMonth("");
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
        <h3 style={styles.formTitle}>आशा दावा का प्रपत्र (Dashboard) </h3>
        <h2 style={styles.formTitle}> ASHA Workers Compensation Portal </h2>
        {formSubmitted ? (
          <div style={styles.formGroup}>
            <h2>Payment will be processed soon! Your details have been sent to Office!
            </h2>
            <button onClick={handleDashboardClick} style={styles.button}>
              Go Back to Dashboard
            </button>
          </div>
        ) : !showNewForm ? (
          <div style={styles.formGroup}>
            <div>
              <label style={styles.label}>वित्तीय वर्ष [*]</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                style={styles.select}
              >
                <option value="">Select Year</option>
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
                <option value="">Select Month</option>
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
                <label style={styles.label}>भुगतान (Payment) </label>
                <select style={styles.select}>
                  <option value="">Select payment</option>
                  <option value="option1">नकद (By Cash) </option>
                  <option value="option2">बैंक खाता (By Bank Account)</option>
                </select>
              </div>
            </div>
            <div style={styles.formRow}>
              <div>
                <label style={styles.label}>क्रिया के प्रकार (Activity Type) </label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input type="radio" id="public" name="activityType" />
                  <label style={styles.radioLabel} htmlFor="public">सार्वजनिक गतिविधि </label>
                  <input type="radio" id="community" name="activityType" />
                  <label style={styles.radioLabel} htmlFor="community">सामुदायिक सेवा</label>
                </div>
              </div>
            </div>
            <div style={styles.formRow}>
              <div>
                <label style={styles.label}>गतिविधि की अवधि </label>
                <select style={styles.select}>
                  <option value="">Select range</option>
                  <option value="option1">0 to 2 weeks</option>
                  <option value="option2">2 weeks to 6 weeks</option>
                  <option value="option3">6 weeks to 10 weeks</option>
                </select>
              </div>
              <div>
                <label style={styles.label}>अनुपस्थित दिनों की संख्या</label>
                <input type="text" placeholder="Enter number of days" style={styles.input} />
              </div>
            </div>
            <div style={styles.formRow}>
              <div>
                <label style={styles.label}>गतिविधि कोड</label>
                <input type="text" placeholder="Enter activity code" style={styles.input} />
              </div>
              <div>
                <label style={styles.label}>लाभार्थियों की संख्या</label>
                <select style={styles.select}>
                  <option value="">Select number</option>
                  <option value="1">1-5</option>
                  <option value="2">6-15</option>
                  <option value="3">More than 15</option>
                </select>
              </div>
            </div>
            
            <div style={styles.buttonGroup}>
            <button onClick={handleBackClick} style={styles.backButton}>
                Back
              </button>
              <button onClick={handleSaveClick} style={styles.button}>
                Save
              </button>
              
            </div>
          </div>
        )}
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2023 आशा दावा का प्रपत्र. All rights reserved.</p>
      </footer>
    </div>
  );
}