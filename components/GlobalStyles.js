import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --main-background-color: #ffffff;
    --font-stack-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-stack-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
    --screen-sm: 40rem;
    --screen-md: 48rem;
    --screen-lg: 69.5rem;
    --screen-xl: 80rem;
    --screen-xxl: 96.875rem;
    --screen-sm-minus-one: calc(var(--screen-sm) - 0.0625rem);
    --screen-md-minus-one: calc(var(--screen-md) - 0.0625rem);
    --screen-lg-minus-one: calc(var(--screen-lg) - 0.0625rem);
    --screen-xl-minus-one: calc(var(--screen-xl) - 0.0625rem);
    --screen-xxl-minus-one: calc(var(--screen-xxl) - 0.0625rem);
    --text-line-height: 1.33;
    --text-size-100: clamp(0.42rem, calc(0.27rem + 0.38vw), 0.63rem);
    --text-size-200: clamp(0.56rem, calc(0.36rem + 0.5vw), 0.84rem);
    --text-size-300: clamp(0.75rem, calc(0.48rem + 0.67vw), 1.13rem);
    --text-size-400: clamp(1rem, calc(0.64rem + 0.89vw), 1.5rem);
    --text-size-500: clamp(1.33rem, calc(0.86rem + 1.19vw), 2rem);
    --text-size-600: clamp(1.78rem, calc(1.14rem + 1.59vw), 2.67rem);
    --text-size-700: clamp(2.37rem, calc(1.52rem + 2.11vw), 3.55rem);
    --text-size-800: clamp(3.16rem, calc(2.03rem + 2.82vw), 4.74rem);
    --text-size-900: clamp(4.21rem, calc(2.71rem + 3.76vw), 6.31rem);
    --space-size-100: clamp(0.25rem, calc(0.16rem + 0.22vw), 0.38rem);
    --space-size-200: clamp(0.5rem, calc(0.32rem + 0.45vw), 0.75rem);
    --space-size-300: clamp(0.75rem, calc(0.48rem + 0.67vw), 1.13rem);
    --space-size-400: clamp(1rem, calc(0.64rem + 0.89vw), 1.5rem);
    --space-size-500: clamp(1.5rem, calc(0.96rem + 1.34vw), 2.25rem);
    --space-size-600: clamp(2rem, calc(1.29rem + 1.79vw), 3rem);
    --space-size-700: clamp(3rem, calc(1.93rem + 2.68vw), 4.5rem);
    --space-size-800: clamp(4rem, calc(2.57rem + 3.57vw), 6rem);
    --space-size-900: clamp(6rem, calc(3.86rem + 5.36vw), 9rem);
    --space-range-400-600: clamp(1rem, calc(-0.43rem + 3.57vw), 3rem);
    --space-range-400-900: clamp(1rem, calc(-4.71rem + 14.29vw), 9rem);
    --color-primary-50: #000000;
    --color-primary-100: #000000;
    --color-primary-200: #000000;
    --color-primary-300: #000000;
    --color-primary-400: #000000;
    --color-primary-500: #5333ff;
    --color-primary-600: #000000;
    --color-primary-700: #000000;
    --color-primary-800: #000000;
    --color-primary-900: #000000;
    --color-slate-50: hsl(210, 40%, 98%);
    --color-slate-100: hsl(210, 40%, 96%);
    --color-slate-200: hsl(214, 32%, 91%);
    --color-slate-300: hsl(213, 27%, 84%);
    --color-slate-400: hsl(215, 20%, 65%);
    --color-slate-500: hsl(215, 16%, 47%);
    --color-slate-600: hsl(215, 19%, 35%);
    --color-slate-700: hsl(215, 25%, 27%);
    --color-slate-800: hsl(217, 33%, 17%);
    --color-slate-900: hsl(222, 47%, 11%);
    --color-white: hsl(0, 0%, 100%);
    --color-black: hsl(0, 0%, 0%);
    --transition-duration: 0.3s;
    --transition-easing: ease-in-out;
    --section-padding-y: 18rem;
    --header-height: 3.5rem;
  }

  /* CSS Reset (Preflight) */
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: theme('borderColor.DEFAULT', currentColor);
  }

  html {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
    font-family: var(--font-stack-sans);
  }

  body {
    margin: 0;
    line-height: inherit;
  }

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }

  abbr:where([title]) {
    text-decoration: underline dotted;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: var(--font-stack-mono);
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }

  :-moz-focusring {
    outline: auto;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  summary {
    display: list-item;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  legend {
    padding: 0;
  }

  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: var(--color-slate-400);
  }

  button,
  [role='button'] {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  [hidden] {
    display: none;
  }

  /* Custom Global Styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1;
    color: var(--color-slate-900);
  }

  h1 {
    font-size: var(--text-size-900);
    font-weight: 800;
    letter-spacing: -0.025em;

    + * {
      margin-top: var(--space-size-400);
    }
  }

  h2 {
    font-size: var(--text-size-800);
  }
  h3 {
    font-size: var(--text-size-700);
  }
  h4 {
    font-size: var(--text-size-600);
  }
  h5 {
    font-size: var(--text-size-500);
  }
  h6 {
    font-size: var(--text-size-400);
  }

  p {
    font-size: var(--text-size-400);
    line-height: var(--text-line-height);
    color: var(--color-slate-500);

    strong {
      font-weight: 700;
      color: var(--color-slate-900);
    }
  }
`;

export default GlobalStyles;
