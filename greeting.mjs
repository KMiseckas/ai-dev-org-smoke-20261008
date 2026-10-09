export function greet(name) {
  const visitor = name.trim() || 'guest';
  return `Hello, ${visitor}`;
}
