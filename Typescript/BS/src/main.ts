import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { renderComponent } from './renderComponent.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
renderComponent("Profile Card", ` 
  <div style="border:1px solid #ccc; padding:10px; border-radius:5px;"> 
  <h3>Hello, I am BUSETTY 🚀</h3> 
  <p>I’m learning Vite + Vanilla TS!</p> 
  </div> `); 
renderComponent("Another Section", ` 
  <p>This is another component rendered dynamically.</p> 
  `);

setupCounter(document.querySelector<HTMLButtonElement>('#example1')!)
