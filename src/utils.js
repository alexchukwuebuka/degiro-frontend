export const formatCurrency = (amount) => {
    if (amount === undefined || amount === null || isNaN(amount)) return '0.000';
    return Number(amount).toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
};
