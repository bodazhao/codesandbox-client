import { SandpackTheme } from '../types';

export const getThemeStyleSheet = (theme: SandpackTheme) => `
.sp-wrapper {
  --colors-highlightText: ${theme.palette.highlightText};
  --colors-defaultText: ${theme.palette.defaultText};
  --colors-inactive: ${theme.palette.inactive};
  --colors-mainBackground: ${theme.palette.mainBackground};
  --colors-inputBackground: ${theme.palette.inputBackground};
  --colors-accent: ${theme.palette.accent};
  --colors-error: #C02C24;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --fontSizes-default: 14px;
  --fonts-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --fonts-mono: "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace;
  --radii-default: 4px;
`;

export const getStyleSheet = () => `
.sp-wrapper {
  --colors-highlightText: #5b6776;
  --colors-defaultText: #999999;
  --colors-inactive: #e5e7eb;
  --colors-mainBackground: #f8f9fb;
  --colors-inputBackground: #ffffff;
  --colors-accent: #6caedd;
  --colors-error: #c02c24;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --fontSizes-default: 14px;
  --fonts-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --fonts-mono: 'Fira Mono', 'DejaVu Sans Mono', Menlo, Consolas,
    'Liberation Mono', Monaco, 'Lucida Console', monospace;
  --radii-default: 4px;

  border: 1px solid var(--colors-inactive);
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  background: var(--colors-mainBackground);
  border-radius: var(--radii-default);
  font-size: var(--fontSizes-default);
  font-family: var(--fonts-body);
  overflow: hidden;
  box-sizing: border-box;
  text-align: left;
  text-decoration: initial;

  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-touch-callout: none;
}

@media screen and (min-resolution: 2dppx) {
  .sp-wrapper {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

.sp-wrapper > * {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  width: 0;
  min-width: 350px;
  height: 300px;

  border: 1px solid var(--colors-inactive);
  margin: -1px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.sp-wrapper * {
  box-sizing: border-box;
}

.sp-cm {
  padding: var(--space-4) 0;
  flex: 1;
  position: relative;
  outline: none;
  overflow: auto;
}

.sp-cm:focus {
  box-shadow: inset 0 0 0 4px var(--colors-accent);
  padding-left: var(--space-1);
  padding-right: var(--space-1);
}

.sp-cm:focus .cm-line {
  padding: 0 var(--space-2);
}

.sp-cm:focus:not(:focus-visible) {
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
}

.sp-cm:focus:not(:focus-visible).cm-line {
  padding: 0 var(--space-3);
}

.sp-cm:focus-visible {
  box-shadow: inset 0 0 0 4px var(--colors-accent);
}

.sp-cm .cm-wrap {
  height: 100%;
}

.sp-cm .cm-content {
  padding: 0;
}

.sp-cm .cm-line {
  padding: 0 var(--space-3);
}

.sp-cm .cm-light .cm-content {
  caret-color: var(--colors-highlightText);
}

.sp-cm .cm-focused {
  outline: none;
}

.sp-cm .cm-scroller {
  font-family: var(--fonts-mono);
}

.sp-cm .cm-gutter-lineNumber {
  padding-right: var(--space-2);
}

.sp-cm .cm-gutterElement.cm-gutterElement-lineNumber {
  padding: 0;
}

.sp-tabs {
  border: 1px solid var(--colors-inactive);
  margin: -1px;
}

.sp-tabs-scrollable-container {
  padding: 0 var(--space-4);
  overflow: auto;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  height: 40px;
  margin-bottom: -1px;
  margin-top: -1px;
}

.sp-preview-frame {
  flex: 1;
  margin-top: 1px;
  display: flex;
  position: relative;
  background: white;
}

.sp-navigator {
  background: var(--colors-mainBackground);
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid var(--colors-inactive);
  margin: -1px;
  padding: var(--space-2) var(--space-4);
}

/* Elements */

.sp-tab-button {
  display: block;
  background: transparent;
  appearance: none;
  font-size: inherit;
  padding: 0 var(--space-2);
  color: var(--colors-defaultText);
  height: 40px;
  border: 0;
  border-bottom: 1px solid transparent;
  transition: border 0.15s ease-out;
}

.sp-tab-button[data-active='true'] {
  color: var(--colors-highlightText);
  border-bottom: 1px solid var(--colors-accent);
}

.sp-tab-button:hover {
  color: var(--colors-highlightText);
}

.sp-tab-button:focus {
  background-color: var(--colors-inactive);
  outline: none;
}

.sp-tab-button:focus:not(:focus-visible) {
  background-color: transparent;
}

.sp-tab-button:focus-visible {
  background-color: var(--colors-inactive);
  outline: none;
}

.sp-button {
  appearance: none;
  border: 0;
  padding: var(--space-1) var(--space-3) var(--space-1) var(--space-2);
  border-radius: var(--radii-default);
  display: flex;
  align-items: center;
  color: var(--colors-defaultText);
  background-color: transparent;
  font-size: inherit;
  font-family: inherit;
  transition: all 0.15s ease-in-out;
}

.sp-button.icon {
  padding: 0;
}

.sp-button:hover:not(:disabled) {
  background-color: var(--colors-inactive);
  color: var(--colors-highlightText);
}

.sp-button:disabled {
  color: var(--colors-inactive);
}

.sp-button:focus {
  outline: 2px solid var(--colors-accent);
}

.sp-button:focus:not(:focus-visible) {
  outline: none;
}

.sp-button:focus-visible {
  outline: 2px solid var(--colors-accent);
}

.sp-input {
  background-color: var(--colors-inputBackground);
  color: var(--colors-highlightText);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radii-default);
  border: 0;
  height: 24px;
  font-size: inherit;
}

.sp-error {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  margin: 0;
  overflow: auto;
  height: 100%;
  padding: var(--space-4);
  white-space: pre-wrap;
  font-family: var(--fonts-mono);
  background-color: var(--colors-error);
  color: white;
  z-index: 3;
}
`;