ace.define('ace/mode/prestosql', [], function (require, exports, module) {

  var oop = require("ace/lib/oop");
  var TextMode = require("ace/mode/text").Mode;
  var PrestoSqlHighlightRules = require("ace/mode/prestosql_highlight_rules").PrestoSqlHighlightRules;

  var Mode = function () {
    this.HighlightRules = PrestoSqlHighlightRules;
  }
  oop.inherits(Mode, TextMode);

  // (function () {
  //   this.lineCommentStart = "--";
  // }).call(Mode.prototype);

  exports.Mode = Mode;
});

ace.define('ace/mode/prestosql_highlight_rules', [], function (require, exports, module) {

  var oop = require("ace/lib/oop");
  var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

  var PrestoSqlHighlightRules = function () {
    var keywords = (
      "with|select|all|distinct|from|where|group by|having|union|intersect|order by|asc|desc|offset|" +
      "row|rows|limit|fetch|next|only|with ties|on|join|inner join|left join|left outer join|" +
      "right join|right outer join|full join|full outer join|cross join|grouping sets|cube|rollup|" +
      "as|in|null|nulls|values|tablesample|bernoulli|system|unnest|array|map|ordinality|lateral"
    );

    var builtinConstants = (
      "null|true|false|and|or|not"
    );

    var builtinFunctions = (
      "cast|case|end|if|else|then|when|coalesce|nullif|try"
    );

    var dataTypes = (
      "boolean|tinyint|smallint|integer|bigint|real|double|decimal|varchar|char|varbinary|json|date|time|timestamp|interval|array|map|row"
    );

    var keywordMapper = this.createKeywordMapper({
      "support.function": builtinFunctions,
      "keyword": keywords,
      "constant.language": builtinConstants,
      "storage.type": dataTypes,
    }, "identifier", true);

    this.$rules = {
      "start": [{
        token: "comment",
        regex: "--.*$"
      }, {
        token: "comment",
        start: "/\\*",
        end: "\\*/"
      }, {
        token: "string",           // " string
        regex: '".*?"'
      }, {
        token: "string",           // ' string
        regex: "'.*?'"
      }, {
        token: "string",           // ` string (apache drill)
        regex: "`.*?`"
      }, {
        token: "constant.numeric", // float
        regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
      }, {
        token: keywordMapper,
        regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
      }, {
        token: "keyword.operator",
        regex: "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
      }, {
        token: "paren.lparen",
        regex: "[\\(]"
      }, {
        token: "paren.rparen",
        regex: "[\\)]"
      }, {
        token: "text",
        regex: "\\s+"
      }]
    };
  }

  oop.inherits(PrestoSqlHighlightRules, TextHighlightRules);
  exports.PrestoSqlHighlightRules = PrestoSqlHighlightRules;
});
