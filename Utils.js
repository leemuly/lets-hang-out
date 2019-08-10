// YYYY-MM-DD
export function getDate() {
    let today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth()+1;
    let dd = today.getDate();

    if (dd < 10) dd = '0'+dd;
    if (mm < 10) mm = '0'+mm;

    today = `${yyyy}-${mm}-${dd}`
    calRange = `${yyyy + 1}-${mm}-${dd}`

    return { today, calRange }
}
