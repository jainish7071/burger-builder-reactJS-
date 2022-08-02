import classes from "./Layout.module.css"

const Layout = (props) => {
  return (
    <>
    <div>Toolbar, sideDrawer, backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </>
  )
}

export default Layout