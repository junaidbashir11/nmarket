import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{"background-image":"url('/bc.jpeg');"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}