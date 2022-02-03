import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h2>About this project</h2>
        <p>THis is a React app to leave feeedback for a product or a service</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>Back to Homepage</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
