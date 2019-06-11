import {html} from 'lit-html';
import {until} from 'lit-html/directives/until.js';

export const App = (store) => html`
  ${Box({title: "Greeting"}, [
    html`
      <div class="bar">
        Hello ${store.get('name')}
      </div>`
    ])
  }
  ${Box({title: "Fields", actions: ['AddItem', 'ShowMenu']}, [
      html`<button @click=${(e) => console.log('clicked')}>Button</button>`,
      html`${FieldControl({
              size:    "sm", 
              color:   "primary", 
              variant: "text", 
              label:   "Demo Field"
      })}`,
      html`${FieldControl({
              size:    "md", 
              color:   "primary", 
              variant: "checkbox", 
              label:   "Checkbox"
      })}`,
      html`<label>Number: <input type="number" .value=${store.get('number')}/></label>`,
      html`<label>
            <input type="checkbox" .value="${store.get('checked')}"> ${store.get('checked')}
          </label>
      `
  ])}
  ${Box({title: "List"},[
     html`<ul>${store.get('lists').map(list => html`
            <li>${list}</li>`)}
           </ul>
      `
  ])}
  ${Box({title: "Fetch"}, [
      html`
        ${FetchContainer(store.get('profile'))}
      `,
  ])}
`;

const Box = (props, children) => html`
  <style>
    .box {padding: .25rem; margin-bottom: .5rem; border-radius: 5px;}
    .primary {border-color: seagreen}
    .header  {font-weight: bold; color: var(--primary); padding: .5rem;}
    .content {padding: 1em .5em; display: flex; flex-direction: column;}
    .footer  {display: flex; justify-content: flex-end; align-items: center; padding: .5rem 1rem;}
    button {background: #f1f1f1; box-shadow: 0; border: 1px solid #ccc; padding: .25rem .5rem; border-radius: 5px; margin: 0 .1rem; color var(--primary)}
  </style>
  <div class="box">
    <header class="header">${props.title}</header>
    <div class="content">
      ${children.map(child => html`${child}`)}
    </div>
    <footer class="footer">${props.actions ? props.actions.map(a => html`<button>${a}</button>`) : ""}</footer>
  </box>
`;

const FieldControl = ({size, color, variant, label}) => html`  
  <div class="field">
    <label for=${label}> ${label}
      <input id=${label} type=${variant} class="${size, color}" />
    </label>
  </div>
`;

const FetchContainer = ref => html`
  ${until(ref.then(data => renderData(data)),
    html`<span>Loading...</span>`
  )}
`;

const renderData = data => html`
  <pre>${JSON.stringify(data, null, 4)}</pre>
`;