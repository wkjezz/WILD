
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="rail">
        <p>© {new Date().getFullYear()} WILD! Magazine · All rights reserved.</p>
      </div>
    </footer>
  )
}
