
export const declineWord = (number: number, arrayOfOptions: string[]): string => {
    let many = number % 100;
    let few = number % 10;
    if (many > 10 && many < 20) return arrayOfOptions[2];
    if (few > 1 && few < 5) return arrayOfOptions[1];
    if (few == 1) return arrayOfOptions[0];
    return arrayOfOptions[2];
};