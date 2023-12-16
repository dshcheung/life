function LayoutsFooter() {
  return (
    <>
      <a id="footer" />
      <footer id="layouts-footer" className="text-center bg-dark text-white">
        <div className="container">
          <div className="p-3">
            &copy; {new Date().getFullYear()} - <a className="text-white" href="https://happynow.studio">Happy Now Limited</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default LayoutsFooter
