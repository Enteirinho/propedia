// pages/index.js

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>

      <Header />

      <main>
        <section className="hero-section" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
          <img
            src="/images/protein-image.jpg"
            alt="Protein Interaction"
            className="hero-image"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '80%', objectFit: 'cover', zIndex: 0 }}
          />

          <div className="logo-overlay" style={{ position: 'absolute', top: '90px', right: '270px', zIndex: 3, height: '60px' }}>
            <img src="/images/logo.png" alt="Logo" className="img-fluid" />
          </div>

          <div className="container content-overlay" style={{ position: 'relative', zIndex: 2, paddingTop: '100px', marginTop: '50px', marginBottom: '40px' }}>
            <div className="row">
              <div className="col-lg-6 text-black">
                <h1 className="display-3 fw-bold mb-2" style={{ fontSize: '1.8rem' }}>
                  A database of peptide-protein interactions
                </h1>
                <p style={{ lineHeight: 1.8, marginBottom: '2rem', padding: '1.5rem 0' }}>
                  PROPEDIA is a database of peptide-protein complexes clusterized in three
                  methodologies: (i) peptide sequences; (ii) structure interface; (iii) binding sites.
                  PROPEDIA main goal is to give new insights into peptide design of biotechnological
                  interests.
                </p>
                <a href="/explore" className="btn btn-success btn-lg px-5 py-3">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container my-5">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="border rounded p-4" style={{ borderLeft: '5px solid #8c6239' }}>
                <img src="/images/p2.png" alt="DB" style={{ height: '40px' }} />
                <h3 className="mt-3">19,813</h3>
                <p className="text-uppercase small fw-bold">Peptide-Protein Complexes*</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="border rounded p-4" style={{ borderLeft: '5px solid #28a745' }}>
                <img src="/images/p3.png" alt="Sequence" style={{ height: '40px' }} />
                <h3 className="mt-3">1,845</h3>
                <p className="text-uppercase small fw-bold">Sequence Clusters</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="border rounded p-4" style={{ borderLeft: '5px solid #d9534f' }}>
                <img src="/images/p4.png" alt="Interface" style={{ height: '40px' }} />
                <h3 className="mt-3">1,891</h3>
                <p className="text-uppercase small fw-bold">Interface Clusters</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="border rounded p-4" style={{ borderLeft: '5px solid #007bff' }}>
                <img src="/images/p1.png" alt="Binding Site" style={{ height: '40px' }} />
                <h3 className="mt-3">1,466</h3>
                <p className="text-uppercase small fw-bold">Binding Site Clusters</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
