export const csvConverter = (data, setCsv) => {

    const headers = Object.keys(data[0]);

    const csvHeader = headers.join(',');

    const csvRows = data.map(obj => {
        const rowValues = headers.map(header => obj[header].replace(/\s*,\s*/g, " ") || "");
        return rowValues.join(',');
    });

    const csvContent = [csvHeader, ...csvRows].join('\n');
    setCsv(csvContent);
    return csvContent;
    
}