function getMonth(month) {
    month--;
    const months = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Augest",
        "September",
        "October",
        "November",
        "December",
    ]

    if (!months[month]) {
        throw new Error("Invalid month number");
    }
    return months[month];
}

try {
    month = getMonth(13);
} catch (e) {
    console.log(e.message);
}