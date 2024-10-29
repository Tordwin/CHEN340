//https://solace.ist.rit.edu/~ec7233/proxy/https://ischool.gccis.rit.edu/api/
//https://people.rit.edu/~ec7233/proxy/https://ischool.gccis.rit.edu/api/
//this is the base of my proxy to get the data!
const proxyServer = "https://solace.ist.rit.edu/~ec7233/proxy/https://ischool.gccis.rit.edu/api/"

async function getData(endpoint) {
    const result = await fetch('${proxyServer}${endpoint}');
    return await result.json();
}

export default getData;