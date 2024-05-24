export default function validateCanadianPostalCode(postalCode) {
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    return postalCodeRegex.test(postalCode);
}