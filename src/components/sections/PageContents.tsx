/**
 * "On this page": a row of links to the page's sections (owner, 27 Nov; tried
 * on the cream bath page first). Each link points at an anchor the page tree
 * places just before its section ({"type": "div", "props": {"id": …,
 * "className": "page-anchor"}}), so Google can offer "jump to" links under the
 * search result and visitors on phones can skip to prices or questions.
 */
export default function PageContents({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <nav className="page-contents" aria-label={title}>
      <div className="container">
        <p className="page-contents__title">{title}</p>
        <ul className="page-contents__list">
          {items.map((item) => (
            <li key={item.href}>
              <a className="page-contents__link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
