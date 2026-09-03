export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateName(name: string): string | null {
  if (!name.trim()) {
    return "Name is required.";
  }

  return null;
}

export function validateEmail(email: string): string | null {
  if (!email.trim()) {
    return "Email is required.";
  }

  if (!isValidEmail(email.trim())) {
    return "Please enter a valid email address.";
  }

  return null;
}

export function validateContactMessage({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): string | null {
  const nameError = validateName(name);

  if (nameError) {
    return nameError;
  }

  const emailError = validateEmail(email);

  if (emailError) {
    return emailError;
  }

  if (!message.trim()) {
    return "Message is required.";
  }

  return null;
}
