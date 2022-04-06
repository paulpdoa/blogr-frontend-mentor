
const Laptop = () => {
  return (
    <section className="content">
        <div className="max-content laptop">
            <img className="laptop__image-mobile" src="/images/illustration-laptop-mobile.svg" alt="laptop" />
            <img className="laptop__image" src="/images/illustration-laptop-desktop.svg" alt="laptop" />
            <div className="laptop__contents">
                <article>
                    <h1 className="laptop__title">Free, open, simple</h1>
                    <p className="laptop__description">Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </article>
                <article>
                   <h1 className="laptop__title">Powerful tooling</h1>
                   <p className="laptop__description">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                    capable of producing even the most complicated sites.</p>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Laptop