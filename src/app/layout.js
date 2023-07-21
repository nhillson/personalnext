import NavBar from "./navbar"

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}