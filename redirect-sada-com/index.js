// sāda.com (xn--sda-1oa.com) is retired: send every request to the same path on sada.com.om.
// sada.com.om then turns any old ".html" address into its clean one (for example /support.html → /support).
export default {
  async fetch(request) {
    const url = new URL(request.url);
    return Response.redirect('https://sada.com.om' + url.pathname + url.search, 301);
  },
};
