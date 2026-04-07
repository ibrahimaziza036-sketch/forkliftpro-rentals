type ClassValue = string | number | boolean | undefined | null | ClassValue[] | Record<string, boolean | undefined | null>;

export function cn(...inputs: ClassValue[]): string {
  return clsx(...inputs);
}

export function clsx(...args: ClassValue[]): string {
  const classes: string[] = [];
  for (const arg of args) {
    if (!arg) continue;
    if (typeof arg === "string") {
      classes.push(arg);
    } else if (typeof arg === "number") {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      const inner = clsx(...arg);
      if (inner) classes.push(inner);
    } else if (typeof arg === "object") {
      for (const [key, value] of Object.entries(arg)) {
        if (value) classes.push(key);
      }
    }
  }
  return classes.join(" ");
}

export function formatPhoneForTel(phone: string): string {
  return phone.replace(/[^+\d]/g, "");
}

export function formatWhatsAppLink(number: string, message?: string): string {
  const base = `https://wa.me/${number.replace(/[^+\d]/g, "").replace("+", "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
