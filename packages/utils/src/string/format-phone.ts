type PhoneFormat = "00000000000" | "000-0000-0000";
export const formatPhone = (phone: string | number, format: PhoneFormat): string => {
  let numericPhone: string;

  if (typeof phone === "number") {
    numericPhone = `0${phone.toString()}`;
  } else {
    numericPhone = phone.replace(/[^0-9]/g, "");
    if (phone.startsWith("u") && numericPhone.length === 10) {
      numericPhone = `0${numericPhone}`;
    }
  }
  if (numericPhone.length !== 10 && numericPhone.length !== 11) {
    return "";
  }
  switch (format) {
    case "00000000000":
      return numericPhone;
    case "000-0000-0000":
      return `${numericPhone.slice(0, 3)}-${numericPhone.slice(3, 7)}-${numericPhone.slice(7)}`;
    default:
      return "";
  }
};
