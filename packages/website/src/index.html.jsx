/** @jsx jsx */
import { version } from '@marp-team/marp-core/package.json'
import { css, jsx } from '@emotion/core'
import { Layout, contentStyle, defaultTitle, resolvePath } from './layout.jsx'
import { Button } from './components/button.js.jsx'
import { Code } from './components/code.js.jsx'
import { Marp } from './components/marp.js.jsx'

const Hero = () => (
  <section
    css={css`
      background: #fcfcfc url('./assets/hero-background.jpg') no-repeat right
        center;
      background-size: cover;
      overflow: hidden;
      padding: 70px 20px;
      text-align: center;
    `}
  >
    <h1
      css={css`
        margin: 50px 0;
        font-size: calc(12px + 0.75vw);
        font-weight: bold;
        letter-spacing: 1px;

        > img {
          display: block;
          max-width: 560px;
          width: 80%;
          height: auto;
          margin: 0 auto 20px auto;
        }
      `}
    >
      <img
        src="https://raw.githubusercontent.com/marp-team/marp/master/marp.png"
        alt={defaultTitle}
      />
      Markdown Presentation Ecosystem
    </h1>
    {/* TODO: Link to document
    <p>
      <Button
        color="primary"
        href="#"
        css={css`
          font-size: calc(18px + 0.5vw);
          padding: 0.75em 1.5em;
        `}
      >
        Get started!
      </Button>
    </p>
    */}
    <p>
      <Button
        color="primary"
        outline="true"
        href="https://github.com/marp-team/marp/"
        rel="noopener noreferrer"
        css={css`
          font-size: calc(12px + 0.25vw);
        `}
      >
        Find Marp tools at repository...
      </Button>
    </p>
  </section>
)

const example = (resolver = v => v) =>
  `
---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('${resolver('/assets/hero-background.jpg')}')
---

![bg left:40% 80%](https://raw.githubusercontent.com/marp-team/marp/master/marp.png)

# **Marp**

Markdown Presentation Ecosystem

https://marp.app/

---

# How to write slides

Split pages by horizontal ruler (\`---\`). It's very simple! :satisfied:

\`\`\`markdown
# Slide 1

foobar

---

# Slide 2

foobar
\`\`\`
`.trim()

const MarpExample = ({ page }) => (
  <Marp
    markdown={example()}
    page={page}
    style={css`
      border: thin solid #ddd;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
      margin: 20px;
      max-width: 360px;
      width: 80%;
    `}
  />
)

const Description = () => (
  <section
    css={[
      contentStyle,
      css`
        font-weight: 500;
        text-align: center;

        > section {
          text-align: left;

          p {
            margin-left: auto;
            margin-right: auto;
            max-width: 640px;
          }
        }

        > figure {
          margin-top: 1em;
        }
      `,
    ]}
  >
    <h1>
      <mark>The great experience</mark> for creating slide deck
    </h1>
    <section>
      <p>
        Marp, Markdown Presentation Ecosystem, provides the great experience to
        create beautiful slide deck. You only have to focus writing your story
        in Markdown document.
      </p>
    </section>
    <figure>
      <MarpExample page={1} />
      <MarpExample page={2} />
      <figcaption>
        We&apos;re rendering slides generated in{' '}
        <a href="https://github.com/marp-team/marp-core">Marp Core</a>
      </figcaption>
    </figure>
    <p>
      <Button
        onClick="this"
        id="show-markdown-example"
        style={{ fontSize: '0.85em' }}
      >
        Show Markdown example...
      </Button>
    </p>
    <section>
      <details id="markdown-example">
        <summary style={{ display: 'none' }} />
        <Code
          language="markdown"
          style={css`
            border: thin solid #eee;
            background: #f6f6f6 url('/assets/noise.png');
            border-radius: 15px;
            box-sizing: border-box;
            font-size: 0.8em;
            margin: 0 auto;
            max-width: 800px;
            padding: 20px 10px;
            width: 85%;
          `}
        >
          {example(resolvePath)}
        </Code>
      </details>
    </section>
  </section>
)

const Features = () => {
  const FeatureSections = props => (
    <section {...props}>
      <section>
        <figure>
          <img
            src="https://icongr.am/octicons/markdown.svg?size=50&amp;color=444455"
            alt="Based on CommonMark"
          />
        </figure>
        <h2>
          Based on <mark>CommonMark</mark>
        </h2>
        <p>
          If you know how to write document with Markdown, you already know how
          to write Marp slide deck too. Our format is based on{' '}
          <a
            href="https://commonmark.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CommonMark
          </a>
          , the consistent spec of Markdown. The only important difference is{' '}
          <a
            href="https://marpit.marp.app/markdown"
            rel="noopener noreferrer"
            target="_blank"
          >
            a ruler <code>---</code> for splitting pages.
          </a>
        </p>
      </section>
      <section>
        <figure>
          <img
            src="https://icongr.am/octicons/gist.svg?size=50&amp;color=444455"
            alt="Directives and extended syntax"
          />
        </figure>
        <h2>
          <mark>Directives</mark> and <mark>extended syntax</mark>
        </h2>
        <p>
          Nevertheless, you may think the simple text content is lacking to
          emphasize your voice. We are supporting to create beautiful slide
          through{' '}
          <a
            href="https://marpit.marp.app/directives"
            rel="noopener noreferrer"
            target="_blank"
          >
            directives
          </a>{' '}
          and extended syntax (
          <a
            href="https://marpit.marp.app/image-syntax"
            rel="noopener noreferrer"
            target="_blank"
          >
            Image syntax
          </a>
          ,{' '}
          <a
            href="https://github.com/marp-team/marp-core#math-typesetting"
            rel="noopener"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            math typesetting
          </a>
          ,{' '}
          <a
            href="https://github.com/marp-team/marp-core#auto-scaling-features"
            rel="noopener"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            auto-scaling
          </a>
          , etc...).
        </p>
      </section>
      <section>
        <figure>
          <img
            src="https://icongr.am/octicons/paintcan.svg?size=50&amp;color=444455"
            alt="Built-in themes and CSS theming"
          />
        </figure>
        <h2>
          <mark>Built-in themes</mark> and <mark>CSS theming</mark>
        </h2>
        <p>
          <a
            href="https://github.com/marp-team/marp-core/"
            rel="noopener"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            Our core engine
          </a>{' '}
          has{' '}
          <a
            href="https://github.com/marp-team/marp-core/tree/master/themes"
            rel="noopener"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            3 built-in themes called <code>default</code>, <code>gaia</code>,
            and <code>uncover</code>
          </a>
          , to tell your story beautifully. If you are feeling unsatisfied to
          design, Marp can{' '}
          <a
            href="https://marpit.marp.app/theme-css?id=tweak-style-through-markdown"
            rel="noopener noreferrer"
            target="_blank"
          >
            tweak style through Markdown
          </a>
          , or{' '}
          <a
            href="https://marpit.marp.app/theme-css"
            rel="noopener noreferrer"
            target="_blank"
          >
            create your own theme with plain CSS
          </a>
          .
        </p>
      </section>
      <section>
        <figure>
          <img
            src="https://icongr.am/octicons/file.svg?size=50&amp;color=444455"
            alt="Export to HTML, PDF, and PowerPoint"
          />
        </figure>
        <h2>
          Export to <mark>HTML, PDF, and PowerPoint</mark>
        </h2>
        <p>
          Have you finished writing? Let&apos;s share the deck with a favorite
          way! We can convert Markdown into HTML, what is more, PDF and
          PowerPoint document directly! (Powered by{' '}
          <a
            href="https://www.google.com/chrome/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Chrome
          </a>{' '}
          /{' '}
          <a
            href="https://www.chromium.org/Home"
            rel="noopener noreferrer"
            target="_blank"
          >
            Chromium
          </a>
          )
        </p>
      </section>
      <section>
        <figure>
          <img
            src="https://icongr.am/octicons/tools.svg?size=50&amp;color=444455"
            alt="Marp family: The official toolset"
            style={{ transform: 'scale(0.8)' }}
          />
        </figure>
        <h2>
          <mark>Marp family</mark>: The official toolset
        </h2>
        <p>
          Marp family has the rich toolset to assist your work.{' '}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode"
            rel="noopener noreferrer"
            target="_blank"
          >
            <b>Marp for VS Code</b>
          </a>{' '}
          extension can preview editting Markdown and custom theme immediately.{' '}
          <a
            href="https://github.com/marp-team/marp-cli/"
            rel="noopener"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            <b>Marp CLI</b>
          </a>{' '}
          allows to convert Markdown through CLI interface.{' '}
          <a
            href="https://web.marp.app/"
            rel="noopener"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            Marp Web <i>(Tech demo)</i>
          </a>{' '}
          can render your deck in online.{' '}
          <a
            href="https://github.com/marp-team/marp/"
            rel="noopener"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            ...and more!
          </a>
        </p>
      </section>
      <section>
        <figure>
          <img
            src="https://icongr.am/octicons/plug.svg?size=50&amp;color=444455"
            alt="Extensible architecture"
          />
        </figure>
        <h2>
          <mark>Extensible</mark> architecture
        </h2>
        <p>
          As a matter of fact,{' '}
          <em>Marp is essentially just a converter for Markdown.</em> Marp
          ecosystem is built on{' '}
          <a
            href="https://marpit.marp.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <b>Marpit framework</b>
          </a>
          , the skinny framework for creating HTML + CSS slide deck. It has a
          pluggable architecture and developer can{' '}
          <a
            href="https://marpit.marp.app/usage?id=extend-marpit-by-plugins"
            rel="noopener noreferrer"
            target="_blank"
          >
            extend features via plugin
          </a>
          .
        </p>
      </section>
      <section>
        <figure>
          <img
            src="https://icongr.am/octicons/heart.svg?size=50&amp;color=444455"
            alt="Fully open source"
          />
        </figure>
        <h2>
          Fully <mark>open-source</mark>
        </h2>
        <p>
          We are loving open source! All tools and related libraries by{' '}
          <a
            href="https://github.com/marp-team"
            rel="noopener"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            Marp team
          </a>{' '}
          are MIT license.
        </p>
      </section>
    </section>
  )

  const { length } = FeatureSections().props.children

  return (
    <FeatureSections
      css={[
        contentStyle,
        css`
          display: grid;
          grid-template-rows: repeat(${length + 1}, auto);
          grid-template-columns: 1fr;
          max-width: 1200px;
          padding-top: 0;

          section {
            background: #fff;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
            box-sizing: border-box;
            font-size: 85%;
            margin: 10px;
            padding: 25px;
            white-space: break-word;
            grid-column: 1;

            figure {
              margin: 0;
              height: 50px;
              text-align: center;

              img {
                width: 50px;
                height: 50px;
              }
            }

            h2 {
              font-size: 22px;
              text-align: center;
            }

            p {
              font-size: 14px;
              font-size: calc(14px + 0.02vw);
              margin-bottom: 0;
            }
          }

          @media (min-width: 768px) {
            grid-template-columns: 1fr 1fr;

            section {
              margin: 20px;

              &:nth-of-type(odd) {
                grid-column: 1;
              }

              &:nth-of-type(even) {
                grid-column: 2;
              }

              ${[...Array(length)].map(
                (_, i) => css`
                  &:nth-of-type(${i + 1}) {
                    grid-row: ${i + 1} / span 2;
                  }
                `
              )}
            }
          }
        `,
      ]}
    />
  )
}

export default function Index() {
  return (
    <Layout
      route="/"
      description="Marp, Markdown Presentation Ecosystem, provides the great experience to create beautiful slide deck. You only have to focus writing your story in Markdown document."
      type="website"
    >
      <Hero />
      <Description />
      <Features />

      {/* TODO: Add introduction section for tools and header */}
      <script src="/index.js" />
      <script
        src={`https://cdn.jsdelivr.net/npm/@marp-team/marp-core@${version}/lib/browser.js`}
      />
    </Layout>
  )
}
