export const dailyTripsData = [
  { date: "2025-09-21", totalTrips: 15, isForecast: false },
  { date: "2025-09-22", totalTrips: 22, isForecast: false },
  { date: "2025-09-23", totalTrips: 18, isForecast: false },
  { date: "2025-09-24", totalTrips: 25, isForecast: false },
  { date: "2025-09-25", totalTrips: 20, isForecast: false },
  { date: "2025-09-26", totalTrips: 28, isForecast: false },
  { date: "2025-09-27", totalTrips: 21, isForecast: false }, 
];

export const generateLocalForecast = (data, days = 7) => {
    if (!data || data.length < 2) return [];
    
    // Simple logic: Base the forecast on the last data point's value
    const lastValue = data[data.length - 1].totalTrips;
    
    // Get the date of the last historical data point
    const lastDate = new Date(data[data.length - 1].date);
    
    const forecast = [];
    for (let i = 1; i <= days; i++) {
        const nextDate = new Date(lastDate);
        nextDate.setDate(lastDate.getDate() + i);
        
        // Apply a simple variation for forecasting
        const predictedValue = Math.round(
            lastValue + (i * 1.5) + Math.sin(i) * 5
        );
        
        forecast.push({
            date: nextDate.toISOString().slice(0, 10),
            totalTrips: Math.max(10, predictedValue), // Ensure trips don't go below 10
            isForecast: true
        });
    }
    return forecast;
};

export const generateDailyTripsCSV = (data) => {
    let csv = "Date,TotalTrips\n";
    data.forEach(d => {
        // Exclude forecast data from the CSV export by checking 'isForecast' property
        if (!d.isForecast) {
            csv += `${d.date},${d.totalTrips}\n`;
        }
    });
    return csv;
};

export const downloadCSV = (csvContent, filename) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) { 
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    } else {
        // Fallback for older browsers
        alert("Download feature not supported by your browser.");
    }
};
