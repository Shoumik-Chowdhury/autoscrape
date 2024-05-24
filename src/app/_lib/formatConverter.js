//Formatters
export const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export const mileageFormatter = new Intl.NumberFormat("pt-PT", { style: "unit", unit: "kilometer" });