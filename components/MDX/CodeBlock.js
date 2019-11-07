import React from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'

import theme from './oceanicReact'

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta) => {
  if (!RE.test(meta)) {
    return () => false
  } else {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map((v) => v.split('-').map((v) => parseInt(v, 10)))
    return (index) => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  }
}

const CodeBlock = ({ children, className, metastring }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const language = className.replace(/language-/, '')

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className}>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i })
            if (shouldHighlightLine(i)) {
              lineProps.className = `${lineProps.className} highlight-line`
            }
            return (
              // eslint-disable-next-line react/jsx-key
              <div {...lineProps}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </StyledPre>
      )}
    </Highlight>
  )
}

const StyledPre = styled.pre`
  padding: 20px;
  color: rgb(255, 255, 255);
  tab-size: 1.5em;
  background: rgb(40, 44, 52);
  border-radius: 10px;
  font-family: 'source-code-pro', Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  margin: '1rem';
  line-height: 24px;
  white-space: pre-wrap;
  word-break: break-word;

  .highlight-line {
    background-color: rgb(53, 59, 69);
    margin: 0 -1.25rem;
    padding: 0 1.25rem;
  }
`

export default CodeBlock
