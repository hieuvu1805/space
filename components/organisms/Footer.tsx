export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 text-white text-right">{`© ${year}`}</footer>
  )
}
