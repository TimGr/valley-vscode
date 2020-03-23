import colorDark from '../../color_dark';
import colorLight from '../../color_light';

const xml = (type) => {

  let color;

  if (type === 'dark') {
    color = colorDark;
  }

  if (type === 'light') {
    color = colorLight;
  }

  const xmlSyntax = [
    {
      "name": "XML Tag Punctuation",
      "scope": "punctuation.definition.tag.xml",
      "settings": {
        "foreground": color.syntax.turquoiseBlue
      }
    },
  ];

  return xmlSyntax;
}
export default xml;
