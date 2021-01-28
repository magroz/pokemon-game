const Layout = ({id, title, descr, urlBg, colorBg}) => {
  return (
    <section className="root" id={id}>
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>{title}</h3>
            <span className="separator"></span>
          </div>
          <div className="desc full">
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout
