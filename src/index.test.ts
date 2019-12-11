import AceEditor, { IAceEditorConfig } from "./index";

describe('Ace Editor test bench', () => {
  test('basic', () => {
    const cfg: IAceEditorConfig = {
      element: document.createElement('div'),
      value: '',
      completers: []
    }
    const editor = new AceEditor(cfg);
    expect(editor).toBeTruthy();
  });
});
