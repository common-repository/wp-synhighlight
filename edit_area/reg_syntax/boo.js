editAreaLoader.load_syntax["boo"] = {
    'COMMENT_SINGLE' : {1: "//", 2: "#"}, 
    'COMMENT_MULTI' : {"/*": "*/"}, 
    'QUOTEMARKS' : {0: "\'\'\'", 1: "\'", 2: "\"\"\"", 3: "\""}, 
    'KEYWORDS' : {
        'keywordgroup1': ["namespace", "import", "from"],
        'keywordgroup2': ["yield", "return", "goto", "continue", "break"],
        'keywordgroup3': ["while", "unless", "then", "in", "if", "for", "else", "elif"],
        'keywordgroup4': ["set", "get"],
        'keywordgroup5': ["try", "raise", "failure", "except", "ensure"],
        'keywordgroup6': ["public", "private", "protected", "internal"],
        'keywordgroup7': ["struct", "ref", "of", "interface", "event", "enum", "do", "destructor", "def", "constructor", "class"],
        'keywordgroup8': ["typeof", "cast", "as"],
        'keywordgroup9': ["yieldAll", "using", "unchecked", "rawArayIndexing", "print", "normalArrayIndexing", "lock", "debug", "checked", "assert"],
        'keywordgroup10': ["required", "property", "meta", "getter", "default"],
        'keywordgroup11': ["zip", "shellp", "shellm", "shell", "reversed", "range", "prompt", "matrix", "map", "len", "join", "iterator", "gets", "enumerate", "cat", "array"],
        'keywordgroup12': ["__switch__", "__initobj__", "__eval__", "__addressof__", "quack"],
        'keywordgroup13': ["void", "ushort", "ulong", "uint", "true", "timespan", "string", "single", "short", "sbyte", "regex", "object", "null", "long", "int", "false", "duck", "double", "decimal", "date", "char", "callable", "byte", "bool"],
        'keywordgroup14': ["not", "or", "and", "is", "isa"],
        'keywordgroup15': ["virtual", "transient", "static", "partial", "override", "final", "abstract"],
        'keywordgroup16': ["super", "self"],
        'keywordgroup17': ["pass"]
}, 
    'OPERATORS' : ["[|", "|]", "${", "!", "@", "%", "&", "*", "|", "/", "<", ">", "+", "-", ";"], 
    'DELIMITERS' : [ '(', ')', '[', ']', '{', '}' ], 
    'STYLES' : { 
        'COMMENTS' : 'color: #999999;', 
        'QUOTESMARKS' : 'color: #008000;', 
        'KEYWORDS' : { 
        'keywordgroup1': 'color:green;',
        'keywordgroup2': 'color:navy;',
        'keywordgroup3': 'color:blue;',
        'keywordgroup4': 'color:#8B4513;',
        'keywordgroup5': 'color:teal;',
        'keywordgroup6': 'color:blue;',
        'keywordgroup7': 'color:blue;',
        'keywordgroup8': 'color:blue;',
        'keywordgroup9': 'color:maroon;',
        'keywordgroup10': 'color:maroon;',
        'keywordgroup11': 'color:purple;',
        'keywordgroup12': 'color:#4B0082;',
        'keywordgroup13': 'color:purple;',
        'keywordgroup14': 'color:#008B8B;',
        'keywordgroup15': 'color:brown;',
        'keywordgroup16': 'color:black;',
        'keywordgroup17': 'color:gray;'    }, 
       'OPERATORS' : 'color: #006400;', 
        'DELIMITERS' : 'color: #006400;' 
    } 
}; 
