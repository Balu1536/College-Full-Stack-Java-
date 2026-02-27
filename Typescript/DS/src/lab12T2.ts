let btn = document.getElementById("btn") as HTMLButtonElement;

let element: HTMLElement | unknown = document.getElementById("username");

let inputElement = element as HTMLInputElement;

// Step 3: Function to read and log the value
function printInputValue(): void {
  // Defensive check: ensure element exists
  if (inputElement) {
    console.log("Input Value:", inputElement.value);
  } else {
    console.log("No input element found!");
  }
}
btn.addEventListener("click", printInputValue)
