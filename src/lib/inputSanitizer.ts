// common input sanitizer functions

export const stringSanitizer = (stringValue: string): string => {
  if (!stringValue) {
    return "";
  }
  stringValue = stringValue.trim();
  stringValue = stringValue
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  const maxLength = 255; // Example maximum length
  const truncatedText = stringValue.substring(0, maxLength);

  return truncatedText;
};

export const emailSanitizer = (emailValue: string): string => {
  if (!emailValue) {
    return "";
  }
  const trimmedEmail = emailValue.trim();

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!emailRegex.test(trimmedEmail)) {
    return "";
  }

  const lowercasedEmail = trimmedEmail.toLowerCase();

  return lowercasedEmail;
};

export const phoneSanitizer = (phoneValue: string): string => {
  if (!phoneValue) {
    return "";
  }

  // 1. Remove all non-digit characters (except the leading '+')
  let cleanedNumber = phoneValue.replace(/[^\d+]/g, "");

  // 2. Check for a leading '+' and ensure it's only at the beginning
  if (cleanedNumber.startsWith("+")) {
    cleanedNumber = "+" + cleanedNumber.substring(1).replace(/\+/g, ""); // Keep first '+', remove others
  }

  return cleanedNumber;
};
