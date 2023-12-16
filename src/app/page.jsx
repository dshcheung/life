import '@/app/page.scss'

import LayoutsHeader from '@/app/_layouts/Header'

export default function Home() {
  return (
    <div id="pages-home">
      <LayoutsHeader />

      <a id="portfolio" />
      <div className="container my-3">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Feature Portfolio</h1>
            <p className="text-center">We help businesses bring ideas to life in the digital world, by designing and implementing the technology tools that they need to win.</p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100 p-3 ahub">
              <img src="/images/angelhub.png" className="card-img-top rounded" alt="logo" />
              <div className="card-body">
                <h5 className="card-title"><a href="https://angelhub.io" target="_blank" rel="noreferrer" className="text-black">AngelHub</a></h5>
                <p className="card-text">AngelHub is Hong Kong&apos;s first and only tech investment platform to be licensed and regulated by the Securities and Futures Commission.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 p-3 whub">
              <img src="/images/whub.png" className="card-img-top rounded" alt="logo" />
              <div className="card-body">
                <h5 className="card-title"><a href="https://whub.io" target="_blank" rel="noreferrer" className="text-black">WHub</a></h5>
                <p className="card-text">WHub, Hong Kong&apos;s biggest startup community and power connector, is a platform showcasing startups to accelerate their business through meaningful connections to the resources they need to grow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
