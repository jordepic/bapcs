async function data() {
  const response = await fetch('https://www.reddit.com/r/buildapcsales/new/.json');
  const myJson = await response.json();
  const obj = JSON.parse(JSON.stringify(myJson));
  const posts = obj.data.children;
  const minPosts = [];
  posts.forEach(element => {
    let minListing = {};
    minListing.url = element.data.url;
    minListing.flair = element.data.link_flair_text;
    minListing.title = element.data.title;
    minListing.permalink = `https://www.reddit.com/${element.data.permalink}`
    const dollarIndex = minListing.title.indexOf("$");
    let price = Number.MAX_SAFE_INTEGER;
    if (dollarIndex !== -1) {
      const sub = minListing.title.substring(dollarIndex + 1);
      price = parseFloat(sub);
    }
    minListing.price = price
    minPosts.push(minListing);
  })
  return minPosts;
}

