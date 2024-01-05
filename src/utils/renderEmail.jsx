const renderEmailsInDescription = (description) => {
  const emailRegex = /<email>(.*?)<\/email>/g;
  let lastIndex = 0;
  return [...description.matchAll(emailRegex)]
    .map((match, index) => {
      const [fullMatch, email] = match;
      const startIndex = match.index;

      const elements = [
        <span key={`${index}-before`}>
          {description.substring(lastIndex, startIndex)}
        </span>,
        <a key={`${index}-email`} href={`mailto:${email}`}>
          {email}
        </a>,
      ];

      lastIndex = startIndex + fullMatch.length;

      return elements;
    })
    .flat()
    .concat(
      <span key={`${lastIndex}-after`}>{description.substring(lastIndex)}</span>
    );
};

export default renderEmailsInDescription;
