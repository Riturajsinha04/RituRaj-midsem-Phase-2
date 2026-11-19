export function formatAge(ageMonths) {
    if (ageMonths< 12) return ageMonths + "months";
    const years = Math.floor(ageMonths/ 12);
    return years + (years == 1 ? "year" : "years");
}
export function formatFee(fee){
    return fee == 0 ? "Free" : "₹"+ fee;
}