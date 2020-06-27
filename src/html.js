import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <React.Fragment>
      {/*
██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝

Greetings ! */}
      {/*
if (employer) {
  yes, I'm always looking for great opportunities;
}
else if (want a website) {
  ping me ! lets discuss how will I help you;
}
else if (female && single) {
  Sorry, I'm committed now :p
}
else if (geek) {
  hi, I love to be friends with like minded people.
  Message me, maybe we could help each other.
}
else {
  goto: https://kbtechspace.com/404
} */}
      {/* ________________________________________________________________________________________

When I wrote this code, only God and I understood what I was doing
Now, God only knows

If you don't like anything on this website, bite me !
________________________________________________________________________________________

No copyright issues.
Feel free to copy anything and everything from this website.
If you need any help, ping me !
________________________________________________________________________________________

Cheers,
Karthik Balaji
mailto: karthik.akb009@gmail.com
________________________________________________________________________________________

SSSssshhhhh!! The code starts below --> */}

      <html {...props.htmlAttributes} class="fuck" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,900&display=swap"
            rel="stylesheet"
          />
          {props.headComponents}
        </head>
        <body
          {...props.bodyAttributes}
          style={{ fontFamily: 'muli !important' }}
        >
          {props.preBodyComponents}
          <noscript key="noscript" id="gatsby-noscript">
            This app works best with JavaScript enabled.
          </noscript>
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
        </body>
      </html>
    </React.Fragment>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
