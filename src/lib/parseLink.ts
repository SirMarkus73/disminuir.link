export default function parseLink(url: string) {
  let parsedUrl: URL

  try {
    parsedUrl = new URL(url)
  } catch {
    return null
  }

  const shortedLink = `${parsedUrl.host}${parsedUrl.pathname}`
  const path = parsedUrl.pathname

  return {
    shortedLink,
    path,
  }
}
