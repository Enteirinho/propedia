import Image from 'next/image'
import ufmgLogo from '../public/images/ufmg-logo.png' // substitua pelos caminhos corretos
import dccLogo from '../public/images/dcc-logo.png'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start">
        
        {/* Texto institucional */}
        <div className="mb-4 mb-md-0" style={{ maxWidth: '500px' }}>
          <p><strong>Laboratório de Bioinformática e Sistemas (LBS)</strong></p>
          <p><strong>Universidade Federal de Minas Gerais</strong><br />
            Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901
          </p>
          <p>
            Instituto de Ciências Exatas (ICEx), Departamento de Ciência da Computação (DCC)
          </p>
          <p>
            Anexo U, 4º andar, Sala: 4340 | Telefone +55 31 3409-5896
          </p>
        </div>

        {/* Logos */}
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
          <div className="text-center">
            <Image src={ufmgLogo} alt="Logo UFMG" width={215} height={100} />
          </div>
          <div className="text-center">
            <Image src={dccLogo} alt="Logo DCC" width={260} height={100} />
          </div>
        </div>

      </div>
    </footer>
  )
}
