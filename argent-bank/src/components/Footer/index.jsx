const year = new Date().getFullYear()

function Header() {
  return (
    <footer className='footer'>
      <p>Copyright {year} Argent Bank</p>
    </footer>
  )
}

export default Header