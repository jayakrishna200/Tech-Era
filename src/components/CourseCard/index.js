import './index.css'
import {Link} from 'react-router-dom'

const CourseCard = props => {
  const {courseItem} = props
  const {id, name, logoUrl} = courseItem

  return (
    <Link to={`/courses/${id}`} className="link-element">
      <li className="course-item">
        <img src={logoUrl} alt={name} className="logo" />
        <p className="course-name">{name} </p>
      </li>
    </Link>
  )
}
export default CourseCard
