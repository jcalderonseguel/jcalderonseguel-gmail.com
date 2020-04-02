
export const validateEmail = (value) => {
    if (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(value)) {
        return true;
      }
      return false;
}

export const validatePhone = (value) => {
    const rexp = new RegExp(/^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/);
    if (rexp.test(value)) {
      return true;
    }
    return false;
}
