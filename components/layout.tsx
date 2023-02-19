import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }: any) {
  return (
    <div>
      <Header />
      <h1>레이아웃</h1>
      {children}
      <Footer />
    </div>
  )
}
