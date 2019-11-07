var colors = {
  char: '#D8DEE9',
  comment: '#B2B2B2',
  keyword: '#c5a5c5',
  lineHighlight: '#353b45', 
  primitive: '#5a9bcf',
  string: '#8dc891',
  variable: '#d7deea',
  boolean: '#ff8b50',
  punctuation: '#88C6BE',
  tag: '#fc929e',
  function: '#79b6f2',
  className: '#FAC863',
  method: '#6699CC',
  operator: '#fc929e'
}

var theme = {
  plain: {
    backgroundColor: '#282c34',
    color: '#ffffff'
  },
  styles: [
    {
      types: ['attr-name'],
      style: {
        color: colors.keyword
      }
    },
    {
      types: ['attr-value'],
      style: {
        color: colors.string
      }
    },
    {
      types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: colors.comment
      }
    },
    {
      types: [
        'property',
        'number',
        'function-name',
        'constant',
        'symbol',
        'deleted'
      ],
      style: {
        color: colors.primitive
      }
    },
    {
      types: ['boolean'],
      style: {
        color: colors.boolean
      }
    },
    {
      types: ['tag'],
      style: {
        color: colors.tag
      }
    },
    {
      types: ['string'],
      style: {
        color: colors.string
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: colors.string
      }
    },
    {
      types: ['selector', 'char', 'builtin', 'inserted'],
      style: {
        color: colors.char
      }
    },
    {
      types: ['function'],
      style: {
        color: colors.function
      }
    },
    {
      types: ['operator', 'entity', 'url', 'variable'],
      style: {
        color: colors.variable
      }
    },
    {
      types: ['keyword'],
      style: {
        color: colors.keyword
      }
    },
    {
      types: ['at-rule', 'class-name'],
      style: {
        color: colors.className
      }
    },
    {
      types: ['important'],
      style: {
        fontWeight: '400'
      }
    },
    {
      types: ['bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7
      }
    }
  ]
}

export default theme
