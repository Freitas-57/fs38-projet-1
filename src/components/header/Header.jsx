import Logo from "../../assets/img/logo/logo.png";
import style from "./header.module.css";
import SearchIcon from "../icons/SearchIcon";
import Cart from "../icons/Cart";


function Header() {
  return (
    <>
      <header>
        <div className={style.logo}>
          <img className={style.logoImg} src={Logo} alt="" />
        </div>

        <div className="search">
          <div className={style.search}>
            <input
              className={style.inputSearch}
              type="text"
              name="search"
              id="search"
              placeholder="Pesquisar produto..."
            />
            <i className={style.iconSearch}>
              <SearchIcon />
            </i>
          </div>
        </div>

        <div className={style.storeLinks}>
          <a className="sign-up" href="">
            Cadastre-se
          </a>
          <a className={style.btnLogin} href="">
            Entrar
          </a>
          <div className>
            <Cart />
            <span>2</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
