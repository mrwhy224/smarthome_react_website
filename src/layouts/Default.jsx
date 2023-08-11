import { Footer, Header, ProtectedRoute } from '../components'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DARK, useTheme } from "../contexts/Theme"
import AppRoutes from '../routes'

const DefaultLayout = (props) => {
  const { theme, toggleThemeMode } = useTheme();

  const colorMode = theme.mode === DARK ?'dark' : 'light';
  return (
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      <Header {...props} routes={AppRoutes} />
      {/*<Sidebar {...props} routes={AppRoutes} />*/}
      <div className="page-wrapper d-block">
        <div className={`page-content ${colorMode}`} data-bs-theme={ colorMode }>
          <Switch>
            {AppRoutes.map((prop, key) => {
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />
              } else if (prop.private) {
                return <ProtectedRoute {...prop} key={key} />
              } else {
                return <Route {...prop} key={key} />
              }
            })}
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout
