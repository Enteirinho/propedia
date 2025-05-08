mport Header from '../components/Header'
import Footer from '../components/Footer'

//Tabela exemplo.
const sampleData = [
  { complex: '2wpv-B-C', peptideSize: 48, receptorSize: 283, resolution: 2.0, proteinName: 'CRYSTAL STRUCTURE OF S. CEREVISIAE GET4-GET5 COMPLEX', classification: 'PROTEIN BINDING', clusters: '' },
  { complex: '2x2c-R-S', peptideSize: 11, receptorSize: 165, resolution: 2.4, proteinName: 'ACETYL-CYPA:CYCLOSPORINE COMPLEX', classification: 'ISOMERASE/IMMUNOSUPPRESSANT', clusters: '' },
  { complex: '3v4o-B-A', peptideSize: 6, receptorSize: 234, resolution: 2.1, proteinName: 'HUMAN MALT1 (CASPASE DOMAIN) IN COMPLEX WITH AN IRREVERSIBLE PEPTIDIC INHIBITOR', classification: 'HYDROLASE/INHIBITOR', clusters: '' },
  { complex: '3w6k-A-E', peptideSize: 15, receptorSize: 81, resolution: 2.4, proteinName: 'CRYSTAL STRUCTURE OF DIMER OF SCPB N-TERMINAL DOMAIN COMPLEXED WITH SCPA PEPTIDE', classification: 'CELL CYCLE', clusters: '' },
  { complex: '3wuw-C-G', peptideSize: 9, receptorSize: 281, resolution: 2.0, proteinName: 'KIR3DL1 IN COMPLEX WITH HLA-B*57:01.I80T', classification: 'PROTEIN BINDING', clusters: '' },
  { complex: '4n4f-C-A', peptideSize: 6, receptorSize: 193, resolution: 1.8, proteinName: 'CRYSTAL STRUCTURE OF THE BROMODOMAIN-PHD FINGER MODULE OF HUMAN TRANSCRIPTIONAL CO-ACTIVATOR CBP IN COMPLEX WITH DI-ACETYLATED HISTONE 4 PEPTIDE (H4I2ACK16AC).', classification: 'TRANSCRIPTION/PROTEIN BINDING', clusters: '' },
  { complex: '4qh7-H-E', peptideSize: 11, receptorSize: 83, resolution: 1.8, proteinName: 'LC8 - ANA2 (159-168) COMPLEX', classification: 'MOTOR PROTEIN', clusters: '' },
  { complex: '4yjl-K-B', peptideSize: 13, receptorSize: 337, resolution: 2.1, proteinName: 'CRYSTAL STRUCTURE OF APC-ARM IN COMPLEXED WITH AMER1-A2', classification: 'CELL ADHESION/PROTEIN BINDING', clusters: '' },
  { complex: '5oy0-7-6', peptideSize: 44, receptorSize: 147, resolution: 2.5, proteinName: 'STRUCTURE OF SYNECHOCYSTIS PHOTOSYSTEM I TRIMER AT 2.5A RESOLUTION', classification: 'PHOTOSYNTHESIS', clusters: '' },
];

export default function Home() {
  return (
    <>

      <Header />
      //logo
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
      //caixas de texto fixo
        <div className="container my-5 h-" style={{minHeight: '300px'}}>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div className="border rounded p-4 " style={{ borderLeft: '5px solid #8c6239'}}>
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
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      
      {/* Citação */}
      <div className="max-w-3x1 mx-auto border rounded shadow-sm p-4 bg-gray-50" style={{minHeight: '200px'}}>
        <p className="font-semibold mb-1">How to cite:</p>
        <p className="text-sm text-gray-700">
          Pedro M. Martins, Lucianna H. Santos, Diego Mariano, Felippe C. Queiroz, Luana L. Bastos,
          Isabela de S. Gomes, Pedro H. C. Fischer, Rafael E. O. Rocha, Sabrina A. Silveira,
          Leonardo H. F. de Lima, Mariana T. Q. de Magalhães, Maria G. A. Oliveira & Raquel C. de Melo-Minardi (2021).{" "}
          <a
            href="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-021-04138-6"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Propedia: a database for protein–peptide identification based on a hybrid clustering algorithm.
          </a>{" "}
          BMC Bioinformatics, 22(1), 1-20.
        </p>
      </div>

      {/* Estudos de Caso */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
        <ul className="space-y-2" style={{minHeight: '200px'}}>
          <li>
            <span className="text-gray-700">
              SARS-CoV-2 main protease interactions with peptides (PDB id: 6lu7)
            </span>{" "}
            <a href="#" className="text-blue-600 underline">View</a>
          </li>
          <li>
            <span className="text-gray-700">Anti-carsia Protease Inhibitor</span>{" "}
            <a href="#" className="text-blue-600 underline">View</a>
          </li>
        </ul>
      </div>
    </main>
    <section className="max-w-6xl mx-auto px-4 py-10">
  <h2 className="text-2xl font-bold mb-6 text-center">Complex samples</h2>
//tabela
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">Complex samples</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Complex</th>
                <th className="px-4 py-2 border">Peptide size</th>
                <th className="px-4 py-2 border">Receptor size</th>
                <th className="px-4 py-2 border">Resolution (Å)</th>
                <th className="px-4 py-2 border">Protein Name</th>
                <th className="px-4 py-2 border">Classification</th>
                <th className="px-4 py-2 border">Clusters</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((s) => (
                <tr key={s.complex} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border text-blue-600 underline cursor-pointer">{s.complex}</td>
                  <td className="px-4 py-2 border">{s.peptideSize}</td>
                  <td className="px-4 py-2 border">{s.receptorSize}</td>
                  <td className="px-4 py-2 border">{s.resolution.toFixed(1)}</td>
                  <td className="px-4 py-2 border">{s.proteinName}</td>
                  <td className="px-4 py-2 border">{s.classification}</td>
                  <td className="px-4 py-2 border">{s.clusters || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

  <div className="text-center mt-6">
    <button className="bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-400 px-6 py-2 rounded shadow-sm text-gray-700 hover:bg-gray-200 transition">
      Show more...
    </button>
  </div>
</section>


      <Footer />
    </>
  )
}

