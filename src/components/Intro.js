
const Intro = () => {
  return (
    <section className="content intro--container">
        <div className="max-content intro">
            <h1 className="intro__title">Designed for the future</h1>
            <div className="intro__content">
                <div className="intro__articles">
                    <article>
                        <h2 className="intro__article-title">Introducing an extensible editor</h2>
                        <p className="intro__article-description">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                        The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                        videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                        change the looks of a blog.</p>
                    </article>
                    <article>
                        <h2 className="intro__article-title">Robust content management</h2>
                        <p className="intro__article-description">Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                        by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                    </article>
                </div>
                <div className="intro__image">
                    <img src="/images/illustration-editor-desktop.svg" alt="desktop editor" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Intro