import './style.css'
import './topics/01-basic-types'
import './topics/02-object-interface'
import './topics/03-functions.ts'
import './topics/04-homework-types.ts'
import './topics/05-basic-destructuring-aObjects.ts'
import './topics/05-basic-destructuring-bArrays.ts'
import './topics/06-function-destructuring-aTASK.ts'
import './topics/06-function-destructuring-bSOLVED.ts'
import './topics/07-import-export.ts'
import './topics/08-classes-aBasics.ts'
import './topics/08-classes-bConstructor.ts'
import './topics/08-classes-btodolist.ts'
import './topics/08-classes-cExtend.ts'
import './topics/08-classes-dComposicion.ts'
import './topics/09-generics.ts'
import './topics/10-classes-decorators-aBasic.ts'
import './topics/10-classes-decorators-bClase.ts'
import './topics/10-classes-decorators-cDecorador.ts'
import './topics/10-classes-decorators-dUso.ts'
import './topics/11-optional-chaining.ts'

import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

/* console.log(document.getElementById('app'));
console.log(document.querySelector('#app')); */

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <h2>Esto marcha...</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
