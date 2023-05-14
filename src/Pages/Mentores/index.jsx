import { useEffect, useState } from 'react'
import "./index.css";

function Mentores() {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/mentores.json')
                const jsonData = await response.json()
                setData(jsonData)
            } catch (error) {
                console.error('Error loading JSON data: ', error)
            }
        }
        fetchData()
    }, [])
  return (
    <>
      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <h2>Mentores</h2>

          {data ? ( data['mentores'].map((item) => (
            <div key={item.nome}>
              <div className="grid-x grid-padding-x">
                <div className="large-12 cell">
                  <div className="callout">
                    <h3>{item.nome}</h3>
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 medium-12 cell">
                        <label>
                          Calendário
                          <p>
                            <a href={item.calendario}>Calendly</a>
                          </p>
                        </label>
                        <label>
                          Pronomes
                          <p>{item.pronomes}</p>
                        </label>
                        <label>
                          {" "}
                          Localização
                          <p>{item.localizacao}</p>
                        </label>
                        <label>
                          {" "}
                          LinkedIn
                          <p>
                            {" "}
                            <a href={item.linkedin}>
                              LinkedIn
                            </a>
                          </p>
                        </label>
                        <label>
                          Bio
                          <p>
                            {item.bio}
                          </p>
                        </label>
                        <label>
                          Experiências
                          <p>
                            {item.experiencias}
                          </p>
                        </label>
                        <label>
                          Empresas
                          <p>{item.empresas}</p>
                        </label>
                        <label>
                          Tópicos de interesse
                          <p>
                            {item.topicosDeInteresse}
                          </p>
                        </label>
                        <label>
                          Áreas técnicas de interesse
                          <p>
                            {item.areasTecnicasDeInteresse}
                          </p>
                        </label>
                        <label>
                          Tecnologias
                          <p>
                            {item.tecnologias}
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))) : (
            <p>Loading...</p>
          ) }



        </div>
      </div>
    </>
  );
}

export default Mentores;
