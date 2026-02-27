
export function renderComponent(name: string, jsxCode: string): void {
  const app = document.getElementById("app");

  if (!app) {
    console.error("App root element not found!");
    return;
  }

  // Create a wrapper div
  const wrapper = document.createElement("div");

  // Insert name + JSX-like HTML
  wrapper.innerHTML = `
    <h2>${name}</h2>
    <div>${jsxCode}</div>
  `;

  // Append to DOM
  app.appendChild(wrapper);
}
