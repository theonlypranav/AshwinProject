import React, { useState, useEffect } from 'react';
import supabase from '../supabase';

const ActivityDisplay = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  async function fetchActivities() {
    const { data, error } = await supabase
      .from('Activities')
      .select('month, no_of_days, no_of_recipients, payment_type, week_range, year, status');

    if (error) {
      console.error('Error fetching activities:', error);
    } else {
      setActivities(data);
    }
  }

  const getMonthName = (monthNumber) => {
    const months = [
      "जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून",
      "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"
    ];
    return months[monthNumber - 1];
  };

  const getPaymentType = (paymentType) => {
    return paymentType === 1 ? "नकद (By Cash)" : "बैंक खाता (By Bank Account)";
  };

  const styles = {
    activityDisplay: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
      backgroundColor: '#f2f2f2',
      fontWeight: 'bold',
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
    },
    evenRow: {
      backgroundColor: '#f9f9f9',
    },
    title: {
      textAlign: 'center',
      color: '#003366',
    }
  };

  return (
    <div style={styles.activityDisplay}>
      <h2 style={styles.title}>Activity Records</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Year</th>
            <th style={styles.th}>Month</th>
            <th style={styles.th}>Week Range</th>
            <th style={styles.th}>Days Worked</th>
            <th style={styles.th}>Recipients</th>
            <th style={styles.th}>Payment Type</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.evenRow : {}}>
              <td style={styles.td}>{activity.year}</td>
              <td style={styles.td}>{getMonthName(activity.month)}</td>
              <td style={styles.td}>{activity.week_range}</td>
              <td style={styles.td}>{activity.no_of_days}</td>
              <td style={styles.td}>{activity.no_of_recipients}</td>
              <td style={styles.td}>{getPaymentType(activity.payment_type)}</td>
              <td style={styles.td}>{activity.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityDisplay;