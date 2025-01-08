/**
 * Logs an empty line to the console.
 */
export const breakLine = () => {
  console.log('\n')
}

/**
 * Logs a header with a border to the console.
 * @param {string} headerText - The text to be displayed in the header.
 * @param {number} [padding=4] - The amount of padding to add around the header text.
 */
export const header = (headerText, padding = 4) => {
  const textLength = headerText.length
  const totalLength = textLength + (padding * 2)
  const border = '─'.repeat(totalLength)

  console.log(`┌${border}┐`)
  console.log(`│${' '.repeat(padding)}${headerText}${' '.repeat(padding)}│`)
  console.log(`├${border}┤`)
}

/**
 * Logs a footer with a border to the console.
 * @param {string} footerText - The text to be displayed in the footer.
 * @param {number} [padding=4] - The amount of padding to add around the footer text.
 */
export const footer = (footerText, padding = 4) => {
  const textLength = footerText.length
  const totalLength = textLength + (padding * 2)
  const border = '─'.repeat(totalLength)

  console.log(`├${border}┤`)
  console.log(`│${' '.repeat(padding)}${footerText}${' '.repeat(padding)}│`)
  console.log(`└${border}┘`)
}