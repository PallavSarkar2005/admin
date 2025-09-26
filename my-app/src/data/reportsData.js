// src/data/reportsData.js

// --- 1. SAMPLE DATA (from DailyTripsChart) ---
// In a real application, this data would be fetched from the server.
export const dailyTripsData = [
  { date: "2025-09-21", totalTrips: 15 },
  { date: "2025-09-22", totalTrips: 22 },
  { date: "2025-09-23", totalTrips: 18 },
  { date: "2025-09-24", totalTrips: 25 },
  { date: "2025-09-25", totalTrips: 20 },
  { date: "2025-09-26", totalTrips: 30 },
  { date: "2025-09-27", totalTrips: 35 },
];

// --- 2. CSV Generation Function ---
export const generateDailyTripsCSV = (data) => {
  // Define CSV headers
  const headers = ['Date', 'Total Trips'];

  // Map data array to CSV rows
  const csvRows = data.map(row => [
    row.date,
    row.totalTrips
  ]);

  // Combine headers and rows
  const csvContent = [
    headers.join(','), // Join headers with commas
    ...csvRows.map(row => row.join(',')) // Join rows with commas
  ].join('\n'); // Join lines with newlines

  return csvContent;
};

// --- 3. CSV Download Function ---
export const downloadCSV = (csvContent, filename) => {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');

  if (link.download !== undefined) {
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};
