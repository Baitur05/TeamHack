import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiAstronautHelmet } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import { Search } from '../search/search'

export const Header = () => {
  const [searchBlockOpened, setSearchBlockOpened] = useState(false)
  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/dealers">Dealers</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>

        <Link className="header__logo" to="/">
          <img src="assets/images/logo.png" />
        </Link>

        {searchBlockOpened && (
          <Search setSearchBlockOpened={setSearchBlockOpened} />
        )}
        <ul className="header__cart">
          <li>
            <AiOutlineSearch
              width={16}
              hanging={16}
              onClick={() => setSearchBlockOpened(true)}
            />
          </li>
          <li style={{ fontSize: '16px', fontWeight: 700 }}>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login" className="header__cart__price">
              <GiAstronautHelmet width={16} hanging={16} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
