import { Container, FooterSection, Link, Links, Title } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <Title>Categorias</Title>
        <Links>
          <li>
            <Link
              title="Clique para acessar jogos de Ação"
              to="/categories#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              title="Clique para acessar jogos de Esportes"
              to="/categories#sports"
            ></Link>
          </li>
          <li>
            <Link
              title="Clique para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </Link>
          </li>
          <li>
            <Link
              title="Clique para acessar jogos de Luta"
              to="/categories#fight"
            >
              Luta
            </Link>
          </li>
          <li>
            <Link title="Clique para acessar jogos de RPG" to="/categories#rpg">
              RPG
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <Title>Acesso rápido</Title>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar a seção de promoção"
              to="/#on-sale"
            >
              Promoções
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em Breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitors reservados</p>
    </div>
  </Container>
)

export default Footer
