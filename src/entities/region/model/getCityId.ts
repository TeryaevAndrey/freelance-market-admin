export const getCityId = (idStr: string) => {
    const idStrToArr = idStr.split(":");
    
    return Number(idStrToArr[0]);
}