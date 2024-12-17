import './index.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class CourseItemDetailsRoute extends Component {
  state = {apiStatus: apiStatusConstants.initial, courseItemDetails: {}}

  componentDidMount() {
    this.getCourseItemDetails()
  }

  getCourseItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const courseDetails = data.course_details
      const formattedCourseDetails = {
        id: courseDetails.id,
        name: courseDetails.name,
        description: courseDetails.description,
        imageUrl: courseDetails.image_url,
      }
      this.setState({
        courseItemDetails: formattedCourseDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getCourseItemDetails()
  }

  /* Loading view */
  renderLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  /* Failure View */
  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-head">Oops! Something Went Wrong</h1>
      <p className="failure-desc">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        className="retry-button"
        type="button"
        onClick={this.onClickRetry}
      >
        Retry
      </button>
    </div>
  )

  renderCourseItemDetailsView = () => {
    const {courseItemDetails} = this.state
    const {name, description, imageUrl} = courseItemDetails
    return (
      <div className="course-item-cont">
        <div className="course-item-card">
          <img src={imageUrl} alt={name} className="course-item-img" />
          <div className="course-details-cont">
            <h1 className="course-item-name">{name} </h1>
            <p className="course-item-desc">{description} </p>
          </div>
        </div>
      </div>
    )
  }

  renderCourseItemDetailsSection = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderCourseItemDetailsView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="course-item-main-bg">
        <Header />
        <div className="course-item-container">
          {this.renderCourseItemDetailsSection()}
        </div>
      </div>
    )
  }
}
export default CourseItemDetailsRoute
