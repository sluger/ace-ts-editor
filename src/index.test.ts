import { AceEditor, IAceEditorConfig } from './index';
import 'ace-builds/src-noconflict/ext-language_tools';

describe('Ace Editor test bench', () => {
  test('basic', () => {
    const cfg: IAceEditorConfig = {
      element: document.createElement('div'),
      value: '',
      completers: [],
    };
    const editor = new AceEditor(cfg);
    expect(editor).toBeTruthy();
  });
});
