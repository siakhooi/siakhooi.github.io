import React from 'react'
import PropTypes from 'prop-types'

MyLink.propTypes = {
  desc: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string
}

function MyLink (props) {
  let d = props.desc
  if (d !== undefined) d = `- ${d}`
  return (
    <li className="MyLink"><a className="MyLink" href={props.url} rel='nofollow'>{props.name}</a>{d}</li>
  )
}

export default MyLink
