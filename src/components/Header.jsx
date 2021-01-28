import s from "./Header.module.css"

const Header = ({title = "This is title", descr = "This is Description!"}) => {
  return (
    <header className={s.root}>
      <div className={s.forest}/>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
      </div>
    </header>
  )
}

export default Header
