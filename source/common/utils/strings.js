export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function secureString(string) {
  return (
    string.slice(0, 1) +
    string.slice(string.length - 1).padStart(string.length, '•')
  );
}
