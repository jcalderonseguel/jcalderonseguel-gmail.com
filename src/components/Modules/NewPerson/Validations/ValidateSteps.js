export const validateStep1 = (input) => {
    const { firstName, lastName } = input;
    const notifications = {};
    if(firstName.trim() === ""){
        notifications.firstname = ["First Name is required."];
    }
    if(lastName.trim() === ""){
        notifications.lastName = ["Last Name is required."];
    } 
    const hasErrors = Object.keys(notifications).length;
    return hasErrors ? notifications: undefined;
}