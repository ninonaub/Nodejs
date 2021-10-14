import LoginForm from "../components/loginform"
import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Login = ({ categories }) => {

  const seo = {
    metaTitle: 'Login',
    metaDescription: 'Login',
  }

  return (
    <Layout categories={categories}>
      <Seo seo={seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Login</h1>
          <LoginForm />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const categories = await fetchAPI("/categories")

  return {
    props: { categories },
    revalidate: 1,
  }
}

export default Login
