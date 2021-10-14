import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container uk-navbar" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav blog-name">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category.slug}`} href="/category/[id]">
                    <a className="uk-link-reset">{category.name}</a>
                  </Link>
                </li>
              )
            })}
            <li>
              <Link as="/chat" href="/chat">
                <a className="uk-link-reset">
                  <span className="material-icons">
                    chat_bubble
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link as="/login" href="/login">
                <a className="uk-link-reset">
                  <span className="material-icons">
                    account_circle
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
