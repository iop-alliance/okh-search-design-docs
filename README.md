[![Open Know-How Logo](readme-images/IOP-OKH-A.svg)][iop-okh]

# Open Know-How Search

> This is a work-in-progress.

A search engine for open source hardware that makes use of the [IOP-OKH][iop-okh] specification. A proof-of-concept v1 is available [here](https://github.com/iop-alliance/okh-search).

## Goals

- **We want to see high quality projects.** We want to surface projects that are in advanced stages of development and worth looking at and attempting to re-build. The front page and top results should be useful to someone looking for a project to work on.
- **We want to give visitors the information they need in a delightful way.** We want a modern, clean and accessible user interface. Something that is easy on the eyes, easy to use but also fast, responsive, powerful and, most importantly, contains the most relevant information to the visitor.
- **We want to let communities use our software for themselves.** We want light-weight instances of our search page to be able to be spun up by individuals and communities to present their projects, on their own cheap/free hosting. If given consent, these “light” instances will feed their data to a central instance that links back to them.
- **We want projects to be found.**  We are building a search engine but realistically people will use bigger search engines to find web pages served by our software. We need to optimize for this by following SEO best practices when generating pages.

## Architecture

![okh-search-architecture.png](readme-images/okh-search-architecture.png)

([diagram source](https://excalidraw.com/#json=kXJcKO75tBfwyr-R47aPw,bYxgATlARFCm0NMwkunliw))


## Communities

We are already reaching out to communities and building prototypes of OKH pages for them.

- https://field-ready-projects.openknowhow.org
- https://projects.openhardware.science

[Example Communities Table](https://kitspaceorg.notion.site/86b835b66cbe4ab692d80caeae4c1cb0)

[![communities table preview](readme-images/communities_table_preview.png)](https://kitspaceorg.notion.site/86b835b66cbe4ab692d80caeae4c1cb0)


## Usability Issues/Features


[Usability Issues/Features table](https://kitspaceorg.notion.site/a070f3e0cbb7489f87b9c597a2a22497)

[![usability issues table preview](readme-images/usability_issues_preview.png)](https://kitspaceorg.notion.site/a070f3e0cbb7489f87b9c597a2a22497)



## Software Bill of Materials

We are building out static community sites using [NextJS](https://nextjs.org). A more comprehensive list of dependencies can be obtain by inspecting the `package.json` and the `package-lock.json` of the relevant project (e.g. [for GOSH](https://gitlab.com/gosh-community/gosh-okh-search/-/blob/master/package.json)). We are still evaluating search libraries for the individual use-cases. Here is a table we are working on:

[Search Libraries Table](https://kitspaceorg.notion.site/77c08d2059fe42db83d207a95886babf)

[![search libraries table preview](readme-images/search_libraries_table_preview.png)](https://kitspaceorg.notion.site/77c08d2059fe42db83d207a95886babf)

## Licensing

This repository currently only consists of documentation. We dedicate this documentation to the public domain through a CC-0-1.0 waiver:

<p xmlns:dct="http://purl.org/dc/terms/" xmlns:vcard="http://www.w3.org/2001/vcard-rdf/3.0#">
  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
  To the extent possible under law,
  <a rel="dct:publisher"
     href="https://find-and-update.company-information.service.gov.uk/company/12005620">
    <span property="dct:title">KITSPACE MANUFACTURING SOFTWARE LTD</span></a>
  has waived all copyright and related or neighboring rights to
  <span property="dct:title">Open Know-How Search Documentation</span>.
This work is published from:
<span property="vcard:Country" datatype="dct:ISO3166"
      content="GB" about="https://find-and-update.company-information.service.gov.uk/company/12005620">
  United Kingdom</span>.
</p>

## Thanks

This project is funded through the NGI0 Discovery Fund, a fund established by NLnet with financial support from the European Commission's Next Generation Internet programme, under the aegis of DG Communications Networks, Content and Technology under grant agreement No 825322.

[![nlnet banner](readme-images/nlnet.png)](https://nlnet.nl/)
[![ngi0 banner](readme-images/ngi0.png)](https://nlnet.nl/NGI0)


[iop-okh]: https://www.internetofproduction.org/open-know-how
