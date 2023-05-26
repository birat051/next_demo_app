import CustomFooter from '@/components/layout/footer'
import HeaderComponent from '@/components/layout/header'
import '@/styles/globals.css'
import { ThemeProvider } from 'styled-components'

const theme={
  colors: {
    primary: 'yellow',
    secondary: 'blue'
  }
}



export default function App({ Component, pageProps }) {

  if(Component.getLayout)
  {
    return (
      <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
  <Component {...pageProps} />
  <CustomFooter />
  </ThemeProvider>
  )
}
