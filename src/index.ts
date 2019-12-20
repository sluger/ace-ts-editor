/**
 * @author Stefan Luger
 */

import * as ace from 'ace-builds';


export interface IAceEditorOptions extends Partial<ace.Ace.EditorOptions> {

  /**
   * Enable auto completion via the language tools.
   */
  enableBasicAutocompletion?: boolean;

  /**
   * Enable live auto completion via the language tools.
   */
  enableLiveAutocompletion?: boolean;
}

export interface IAceEditorConfig {

  /**
   * The parent element the editor is added to.
   */
  element: Element | string;

  /**
   * Code snippet or just text the editor is loaded with initially.
   */
  value: string;

  /**
   * Core ace configuration options including language tools.
   *
   * @see https://github.com/ajaxorg/ace/wiki/Configuring-Ace
   */
  options?: IAceEditorOptions;

  /**
   * An array of autocompletions.
   */
  completers: ace.Ace.Completer[];
}

/**
 * Ace editor wrapper which has a reference to the parent HTML element of the editor.
 * It sets the custom language mode as well as registers completers.
 */
export class AceEditor {

  /**
   * Ace editor options.
   */
  private options: Partial<IAceEditorOptions> = {};

  /**
   * Ace editor default options.
   */
  private readonly defaultOptions: IAceEditorOptions = {
    enableBasicAutocompletion: false,
    enableLiveAutocompletion: false
  }

  /**
   * Instantiate the ace editor with the given options and completers.
   *
   * @param cfg The ace editor config.
   */
  constructor(cfg: Readonly<IAceEditorConfig>) {
    const { options, element, value, completers } = cfg;

    // override default with actual options
    Object.assign(this.options, this.defaultOptions, options);

    const editor = ace.edit(element, this.options);
    editor.setValue(value);
    this.registerCompleters(editor, completers);
  }

  /**
   * Register completers.
   */
  registerCompleters(editor: ace.Ace.Editor, completers: ace.Ace.Completer[]) {
    if (this.options.enableBasicAutocompletion) {
      editor.completers = [];
      editor.completers.push(...completers);
    }
  }
}
