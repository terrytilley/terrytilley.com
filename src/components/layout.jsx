/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import sun from "../images/sun.png"
import moon from "../images/moon.png"

import Toggle from "./Toggle"

class Layout extends React.Component {
  state = { theme: null }

  componentDidMount() {
    this.setState({ theme: window.__theme })
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })
    }
  }

  render() {
    return (
      <>
        <div style={{ float: `right`, margin: `1rem`, position: `absolute`, top: `0`, right: `0` }}>
          {this.state.theme !== null ? (
            <Toggle
              icons={{
                checked: (
                  <img
                    src={moon}
                    width="16"
                    height="16"
                    alt="moon"
                    style={{ pointerEvents: "none" }}
                  />
                ),
                unchecked: (
                  <img
                    src={sun}
                    width="16"
                    height="16"
                    alt="sun"
                    style={{ pointerEvents: "none" }}
                  />
                ),
              }}
              checked={this.state.theme === "dark"}
              onChange={e =>
                window.__setPreferredTheme(e.target.checked ? "dark" : "light")
              }
            />
          ) : (
            <div style={{ height: "24px" }} />
          )}
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.0875rem 1.45rem`,
          }}
        >
          <main>{this.props.children}</main>
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
